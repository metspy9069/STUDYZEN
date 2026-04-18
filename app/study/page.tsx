"use client";

import { useEffect, useState } from "react";
import { useSocket } from "@/lib/useSocket";

export default function StudyPage() {
  const [time, setTime] = useState(1500);
  const socket = useSocket();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => {
        if (t > 0) {
          socket?.emit("study-update", { time: t - 1 });
          return t - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [socket]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">
        {Math.floor(time / 60)}:
        {(time % 60).toString().padStart(2, "0")}
      </h1>
    </div>
  );
}