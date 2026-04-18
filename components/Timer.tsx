"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(1500);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const m = Math.floor(time / 60);
  const s = time % 60;

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        {m}:{s.toString().padStart(2, "0")}
      </h1>
    </div>
  );
}