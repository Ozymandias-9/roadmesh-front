"use client";
import { useEffect, useRef } from "react";

export default function Map() {
    const map = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!map.current) return;

        const ctx = map.current.getContext("2d");

        if (!ctx) return;

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 100, 100);
    }, [map]);
      
  return (
    <canvas ref={map} width={500} height={500} className="bg-slate-800 border border-slate-600 rounded-lg">
    </canvas>
  );
}