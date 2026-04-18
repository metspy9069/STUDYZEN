"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-[350px]"
      >
        <h1 className="text-xl font-semibold mb-4">Welcome to StudyZen</h1>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-primary text-white rounded-lg py-2">
            Parent
          </button>
          <button className="flex-1 bg-gray-100 rounded-lg py-2">
            Student
          </button>
        </div>

        <input
          placeholder="Email or phone"
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <button className="w-full bg-primary text-white py-2 rounded-lg">
          Sign In
        </button>

        <button className="w-full mt-3 border py-2 rounded-lg">
          Continue as Guest
        </button>
      </motion.div>
    </div>
  );
}