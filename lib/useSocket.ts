"use client";

import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export function useSocket() {
  const socketRef = useRef<any>(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(
        process.env.NEXT_PUBLIC_SOCKET_URL!
      );
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return socketRef.current;
}