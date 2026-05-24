"use client";

import { useState, useEffect, useCallback } from "react";
import { WorkflowStep } from "@/data/cases";

type StepStatus = "idle" | "processing" | "done";

interface Props {
  steps: WorkflowStep[];
  accentColor: string;
}

export default function WorkflowDemo({ steps, accentColor }: Props) {
  const [statuses, setStatuses] = useState<StepStatus[]>(
    steps.map(() => "idle")
  );
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const reset = useCallback(() => {
    setStatuses(steps.map(() => "idle"));
    setRunning(false);
    setDone(false);
  }, [steps]);

  const runWorkflow = useCallback(async () => {
    if (running) return;
    reset();
    setRunning(true);

    for (let i = 0; i < steps.length; i++) {
      // Set current step to processing
      setStatuses((prev) => {
        const next = [...prev];
        next[i] = "processing";
        return next;
      });

      // Processing delay (varies per step for realism)
      const delay = 600 + Math.random() * 800;
      await new Promise((r) => setTimeout(r, delay));

      // Set to done
      setStatuses((prev) => {
        const next = [...prev];
        next[i] = "done";
        return next;
      });

      // Small pause between steps
      await new Promise((r) => setTimeout(r, 150));
    }

    setRunning(false);
    setDone(true);
  }, [running, reset, steps.length]);

  // Auto-run once on mount after a short delay
  useEffect(() => {
    const t = setTimeout(() => runWorkflow(), 800);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-2xl border border-[#1e1e2e] bg-[#0e0e1a] p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Workflow Engine
          </span>
        </div>
        <button
          onClick={done || !running ? runWorkflow : undefined}
          disabled={running && !done}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            running && !done
              ? "text-slate-600 cursor-not-allowed"
              : "text-slate-300 hover:text-white border border-[#1e1e2e] hover:border-white/20 cursor-pointer"
          }`}
        >
          {running && !done ? "Running..." : done ? "↺ Run Again" : "▶ Run"}
        </button>
      </div>

      {/* Steps */}
      <div className="space-y-1">
        {steps.map((step, idx) => {
          const status = statuses[idx];
          return (
            <div key={step.id}>
              <div
                className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  status === "processing"
                    ? "bg-white/5 border border-white/10"
                    : status === "done"
                    ? "bg-[#0a0a14]"
                    : ""
                }`}
              >
                {/* Status indicator */}
                <div className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center">
                  {status === "idle" && (
                    <div className="w-4 h-4 rounded-full border border-[#2e2e3e]" />
                  )}
                  {status === "processing" && (
                    <svg
                      className="w-4 h-4 animate-spin"
                      style={{ color: accentColor }}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                  )}
                  {status === "done" && (
                    <svg
                      className="w-4 h-4"
                      style={{ color: accentColor }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>

                {/* Icon */}
                <div className="text-base mt-0.5 flex-shrink-0">{step.icon}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-sm font-medium transition-colors ${
                        status === "done"
                          ? "text-slate-200"
                          : status === "processing"
                          ? "text-white"
                          : "text-slate-500"
                      }`}
                    >
                      {step.label}
                    </span>
                    {status === "processing" && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded-full font-mono"
                        style={{
                          backgroundColor: `${accentColor}20`,
                          color: accentColor,
                        }}
                      >
                        processing
                      </span>
                    )}
                    {status === "done" && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full font-mono bg-green-500/10 text-green-400">
                        done
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs mt-0.5 transition-colors ${
                      status !== "idle" ? "text-slate-500" : "text-slate-700"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="ml-[27px] flex items-center">
                  <div
                    className={`w-px h-4 transition-colors duration-300 ${
                      statuses[idx] === "done"
                        ? "bg-[#2e2e3e]"
                        : "bg-[#1a1a2a]"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Done state */}
      {done && (
        <div
          className="mt-4 rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
          }}
        >
          <span>✓</span>
          <span>Workflow completed — all steps executed successfully</span>
        </div>
      )}
    </div>
  );
}
