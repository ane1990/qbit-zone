"use client";

import { useState, useRef } from "react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Logical Multi-Qubit Entanglement Breakthrough",
    source: "Nature Physics",
    date: "March 6, 2026",
    excerpt:
      "Researchers demonstrate logical multi-qubit entanglement with dual-rail superconducting qubits, achieving 98.1% process fidelity at 13% erasure rate.",
    url: "https://www.nature.com/articles/s41567-026-03211-9",
  },
  {
    title: "JVG Algorithm Threatens Current Encryption",
    source: "AQTI Research",
    date: "March 2, 2026",
    excerpt:
      "New hybrid quantum algorithm requires only 5,000 qubits to break RSA encryption, accelerating post-quantum migration timeline significantly.",
    url: "https://finance.yahoo.com/news/cybersecurity-apocalypse-2026-algorithm-according-130000288.html",
  },
  {
    title: "QuSynth: AI Optimizes 144-Qubit Quantum Codes",
    source: "Quantum Zeitgeist",
    date: "March 21, 2026",
    excerpt:
      "University of Toronto develops AI-driven technique reducing two-qubit gate counts by 2.5x while maintaining shallow circuit depth for error correction.",
    url: "https://quantumzeitgeist.com/quantum-codes-ai-optimisation/",
  },
  {
    title: "Cluster States for Measurement-Based Quantum Computing",
    source: "Nature Physics",
    date: "March 11, 2026",
    excerpt:
      "Zuchongzhi 3.1 processor achieves scalable preparation of 105-qubit cluster states, enabling robust measurement-based quantum computation.",
    url: "https://www.nature.com/articles/s41567-026-03179-6",
  },
  {
    title: "Rigetti Breaks Size Barrier in Quantum Optimization",
    source: "Rigetti Computing",
    date: "March 17, 2026",
    excerpt:
      "New SCMF-QAOA algorithm enables solving 252-variable optimization problems on current NISQ hardware, applied to drug design scenarios.",
    url: "https://medium.com/rigetti/breaking-the-size-barrier-in-quantum-optimization-f2cce976f286",
  },
  {
    title: "Snowflake: Distributed Streaming Decoder",
    source: "Quantum Journal",
    date: "March 20, 2026",
    excerpt:
      "New decoding algorithm achieves faster-than-linear scaling for fault-tolerant quantum computing with local, distributed processing cells.",
    url: "https://quantum-journal.org/papers/q-2026-03-20-2033/",
  },
  {
    title: "Qubit-Efficient MaxCut Algorithm Achieves 10^76 Solution Space",
    source: "npj Quantum Information",
    date: "February 16, 2026",
    excerpt:
      "Variational algorithm requires only O(log N) qubits to tackle NP-hard optimization problems, reducing hardware requirements exponentially.",
    url: "https://www.nature.com/articles/s41534-026-01186-2",
  },
  {
    title: "Top 15 Quantum Computing Breakthroughs of 2026",
    source: "YouTube",
    date: "March 15, 2026",
    excerpt:
      "Comprehensive overview of the most significant advances in quantum computing hardware, algorithms, and applications expected this year.",
    url: "https://www.youtube.com/watch?v=8JRJxsvJdRs",
  },
];

export default function NewsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const doubledItems = [...newsItems, ...newsItems];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-5 animate-scroll scrollbar-hide"
        style={{ width: "max-content" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {doubledItems.map((item, index) => (
          <a
            key={`${item.title}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[380px] glass card-accent rounded-2xl p-6 group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full">
                {item.source}
              </span>
              <span className="text-xs text-neutral-600">{item.date}</span>
            </div>
            <h3 className="text-base font-semibold mb-2 group-hover:text-orange-400 transition-colors leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-500 line-clamp-3 leading-relaxed">{item.excerpt}</p>
            <div className="mt-4 flex items-center gap-1 text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Read more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
      {/* Edge fades using new background color */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
    </div>
  );
}
