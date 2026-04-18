"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSocket } from "@/lib/useSocket";

const data = [
  { day: "Mon", focus: 40 },
  { day: "Tue", focus: 60 },
  { day: "Wed", focus: 75 },
  { day: "Thu", focus: 50 },
  { day: "Fri", focus: 85 },
];

export default function Dashboard() {
  const socket = useSocket();
  const [liveTime, setLiveTime] = useState(0);

  useEffect(() => {
    socket?.on("study-update", (d) => setLiveTime(d.time));
    return () => socket?.off("study-update");
  }, [socket]);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="grid grid-cols-[260px_1fr_320px] gap-6">

        {/* SIDEBAR */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-card rounded-2xl p-6 shadow-soft flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold text-textMain">
              StudyZen
            </h2>
            <p className="text-sm text-textSub mt-2">
              Focus. Track. Improve.
            </p>

            <button className="mt-6 w-full bg-primary text-white py-2 rounded-xl font-medium">
              Parent Mode
            </button>
          </div>

          <div className="text-sm text-textSub">
            Live Focus:
            <span className="ml-2 text-textMain font-semibold">
              {liveTime}s
            </span>
          </div>
        </motion.div>

        {/* CENTER */}
        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-5">
            <StatCard title="Screen Time" value="2h 40m" />
            <StatCard title="Study Time" value="1h 05m" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-6 rounded-2xl shadow-soft"
          >
            <h3 className="font-semibold mb-4 text-textMain">
              Weekly Focus
            </h3>

            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="focus"
                  stroke="#5B7CFA"
                  strokeWidth={3}
                  dot={false}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-semibold mb-4 text-textMain">
            Study Mode
          </h3>

          <div className="flex gap-3 mb-6">
            {["15m", "30m", "45m"].map((t) => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                key={t}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm"
              >
                {t}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-500 text-white py-3 rounded-xl font-medium"
          >
            Start Session
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

