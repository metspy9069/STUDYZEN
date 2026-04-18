"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-5 rounded-xl shadow flex items-center justify-between transition"
    >
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-1 text-gray-900">
          {value}
        </h2>
      </div>

      {/* ICON */}
      <div className="bg-blue-100 p-2 rounded-lg">
        <Clock className="text-blue-600" size={20} />
      </div>
    </motion.div>
  );
}