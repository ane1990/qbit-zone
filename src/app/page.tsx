import NewsSlider from "./components/NewsSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <StateOfTheArt />
      <div className="section-divider" />
      <Challenges />
      <div className="section-divider" />
      <Impact />
      <div className="section-divider" />
      <Possibilities />
      <div className="section-divider" />
      <NewsSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          <span className="text-lg font-bold text-white">
            qbit<span className="text-orange-400">.zone</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#state" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
            Research
          </a>
          <a href="#challenges" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
            Challenges
          </a>
          <a href="#impact" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
            Impact
          </a>
          <a href="#possibilities" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
            Possibilities
          </a>
          <a href="#news" className="text-sm text-neutral-400 hover:text-orange-400 transition-colors">
            News
          </a>
        </div>
        <div className="flex items-center gap-3">
{/*           <button className="hidden sm:block px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors">
            Get Access
          </button> */}
        </div>
      </div>
    </nav>
  );
}

const particlePositions = [
  { left: 5, top: 10, delay: 0.5, duration: 5 },
  { left: 15, top: 25, delay: 1.2, duration: 6 },
  { left: 25, top: 8, delay: 2.1, duration: 4.5 },
  { left: 35, top: 30, delay: 0.8, duration: 5.5 },
  { left: 45, top: 15, delay: 3.2, duration: 6.5 },
  { left: 55, top: 40, delay: 1.5, duration: 5 },
  { left: 65, top: 20, delay: 2.8, duration: 4.8 },
  { left: 75, top: 35, delay: 0.3, duration: 6.2 },
  { left: 85, top: 12, delay: 4.0, duration: 5.2 },
  { left: 10, top: 50, delay: 1.8, duration: 5.8 },
  { left: 20, top: 65, delay: 2.5, duration: 4.2 },
  { left: 30, top: 55, delay: 0.7, duration: 6.0 },
  { left: 40, top: 70, delay: 3.5, duration: 5.4 },
  { left: 50, top: 60, delay: 1.1, duration: 4.6 },
  { left: 60, top: 75, delay: 2.3, duration: 5.6 },
  { left: 70, top: 45, delay: 0.9, duration: 6.3 },
  { left: 80, top: 80, delay: 3.8, duration: 5.1 },
  { left: 90, top: 55, delay: 1.6, duration: 4.9 },
  { left: 95, top: 25, delay: 2.9, duration: 6.1 },
  { left: 8, top: 85, delay: 4.2, duration: 5.3 },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[160px] animate-pulse-glow"
        />
        <div
          className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[140px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[200px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-orange-500/20 bg-orange-500/5">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-sm text-orange-300/80 font-medium">The Quantum Revolution is Accelerating</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 animate-gradient bg-clip-text text-transparent">
            Quantum Computing
          </span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl text-neutral-200 font-semibold">
            for the Next Era
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          qbit.zone is pioneering the algorithms that will reshape cryptography,
          drug discovery, optimization, and artificial intelligence.
        </p>

{/*         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold text-lg text-white transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30">
            Join the Waitlist
          </button>
          <button className="px-8 py-4 rounded-xl font-semibold text-lg text-neutral-300 border border-white/10 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300">
            Explore Research
          </button>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function StateOfTheArt() {
  const milestones = [
    {
      stat: "1,000+",
      label: "Logical Qubits",
      desc: "Error-corrected qubits achieving fault tolerance",
    },
    {
      stat: "98.1%",
      label: "Gate Fidelity",
      desc: "Controlled-NOT gate process fidelity achieved",
    },
    {
      stat: "< 5,000",
      label: "Qubits for Breaking RSA",
      desc: "JVG Algorithm threatens current encryption",
    },
    {
      stat: "144",
      label: "Qubit Error Correction",
      desc: "AI-optimized quantum codes demonstrated",
    },
  ];

  return (
    <section id="state" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">Where We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">State of the Art Today</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Quantum computing has moved beyond theoretical promise. Real hardware is achieving
            milestones that were considered decades away just five years ago.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((item) => (
            <div key={item.label} className="glass card-accent rounded-2xl p-8 text-center group">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-3">
                {item.stat}
              </div>
              <div className="text-base font-semibold text-white mb-2">{item.label}</div>
              <div className="text-sm text-neutral-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Tech approach cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Superconducting Qubits</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Companies like Google and IBM are achieving quantum advantage with superconducting
              processors, demonstrating exponential speedup for specific problems.
            </p>
          </div>

          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Neutral Atoms</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Neutral atom quantum computers are scaling rapidly, with arrays of hundreds of
              qubits demonstrating logical operations and entanglement.
            </p>
          </div>

          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Photonic Systems</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Photonic quantum computing offers room-temperature operation and inherent
              entanglement, making them promising for quantum networking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  const challenges = [
    {
      title: "Error Correction",
      desc: "Quantum states are fragile. Current NISQ devices require sophisticated error correction codes to maintain coherence long enough for useful computations.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Scalability",
      desc: "Adding more qubits increases noise and control complexity. Solutions like modular architectures and topological qubits are being actively researched.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Quantum-Classical Integration",
      desc: "Hybrid algorithms require seamless communication between quantum processors and classical computers for optimal performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Software & Algorithms",
      desc: "Developing quantum-native algorithms that fully leverage quantum advantage requires rethinking classical computational approaches.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Workforce & Knowledge",
      desc: "The quantum workforce is still small. Training the next generation of quantum software engineers and algorithm designers is critical.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Infrastructure",
      desc: "Quantum computers require extreme conditions - millikelvin temperatures and electromagnetic isolation - making deployment challenging.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="challenges" className="py-28 px-4 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">The Hard Parts</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Problems We Are Solving</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Despite remarkable progress, significant challenges remain. Understanding these
            obstacles is crucial for realistic assessment of quantum timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge, i) => (
            <div key={challenge.title} className="glass card-accent rounded-2xl p-8 group">
              <div className={`w-11 h-11 rounded-xl ${i % 2 === 0 ? "bg-orange-500/10 border border-orange-500/20" : "bg-blue-500/10 border border-blue-500/20"} flex items-center justify-center mb-5`}>
                <span className={i % 2 === 0 ? "text-orange-400" : "text-blue-400"}>{challenge.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{challenge.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{challenge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">Global Transformation</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Impact on the World</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Quantum computing will reshape every industry that relies on computation, from
            healthcare to finance to national security.
          </p>
        </div>

        {/* Two main cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Security card */}
          <div className="glass rounded-2xl p-8 border-l-[3px] border-l-orange-500/60">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              Security & Cryptography Migration
            </h3>
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong className="text-orange-400">The Threat:</strong> Shor&apos;s algorithm can break RSA, ECC, and DH
                encryption. The JVG algorithm now requires only ~5,000 qubits to threaten current
                encryption standards.
              </p>
              <p>
                <strong className="text-orange-300">Timeline:</strong> Experts now estimate
                &quot;harvest now, decrypt later&quot; attacks are already occurring. Critical data
                encrypted today may be compromised within years.
              </p>
              <p>
                <strong className="text-blue-400">The Solution:</strong> Post-quantum cryptography (PQC)
                standards are being deployed. NIST has finalized ML-KEM, ML-DSA, and SLH-DSA
                algorithms for migration.
              </p>
            </div>
            <div className="mt-6 p-4 bg-orange-500/5 rounded-xl border border-orange-500/15">
              <p className="text-sm text-orange-300/80">
                <strong>Critical:</strong> Organizations must prioritize crypto-agility - the ability to
                replace cryptographic methods without rebuilding entire systems.
              </p>
            </div>
          </div>

          {/* Healthcare card */}
          <div className="glass rounded-2xl p-8 border-l-[3px] border-l-blue-500/60">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Drug Discovery & Healthcare
            </h3>
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong className="text-blue-400">Molecular Simulation:</strong> Quantum computers can
                simulate molecular interactions with perfect accuracy, enabling drug discovery
                without costly trial-and-error.
              </p>
              <p>
                <strong className="text-orange-400">Protein Folding:</strong> Google&apos;s AlphaFold
                combined with quantum optimization could unlock treatments for diseases like
                Alzheimer&apos;s and Parkinson&apos;s.
              </p>
              <p>
                <strong className="text-blue-300">Personalized Medicine:</strong> Quantum algorithms
                could optimize treatment plans by analyzing an individual&apos;s complete genomic
                data in hours instead of weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Three smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-2 text-white">Supply Chain Optimization</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Quantum annealing can solve traveling salesman problems at scale, revolutionizing
              logistics, manufacturing, and resource allocation.
            </p>
          </div>
          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-2 text-white">Financial Modeling</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Quantum Monte Carlo simulations could price derivatives and assess risk with
              unprecedented accuracy, transforming Wall Street.
            </p>
          </div>
          <div className="glass card-accent rounded-2xl p-6 group">
            <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-base font-semibold mb-2 text-white">Materials Science</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Design room-temperature superconductors, better batteries, and lightweight materials
              for aerospace through quantum simulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Possibilities() {
  const possibilities = [
    {
      title: "Quantum Machine Learning",
      desc: "Quantum neural networks could exponentially speed up training on specific data patterns, enabling AI that learns from data we can't process classically.",
      timeline: "5-10 years",
      accent: "orange" as const,
    },
    {
      title: "Quantum Internet",
      desc: "A network of quantum-connected computers enabling unhackable communication and distributed quantum computing across the globe.",
      timeline: "10-20 years",
      accent: "blue" as const,
    },
    {
      title: "Climate Modeling",
      desc: "Accurate quantum simulations of atmospheric chemistry could lead to breakthroughs in carbon capture and climate prediction.",
      timeline: "10-15 years",
      accent: "blue" as const,
    },
    {
      title: "Quantum Finance",
      desc: "Real-time portfolio optimization, arbitrage detection, and risk analysis that reacts to global markets faster than any human or classical computer.",
      timeline: "3-7 years",
      accent: "orange" as const,
    },
    {
      title: "Drug Design",
      desc: "Design drugs by simulating molecular interactions with perfect accuracy, eliminating years of trial-and-error in the lab.",
      timeline: "5-12 years",
      accent: "orange" as const,
    },
    {
      title: "Cryptography & Security",
      desc: "While threatening current encryption, quantum computing enables provably secure quantum key distribution and new cryptographic paradigms.",
      timeline: "Now - 5 years",
      accent: "blue" as const,
    },
  ];

  const accentStyles = {
    orange: {
      badge: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
      hover: "group-hover:text-orange-400",
    },
    blue: {
      badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      hover: "group-hover:text-blue-400",
    },
  };

  return (
    <section id="possibilities" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">What&apos;s Coming</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Possibilities Ahead</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            From breaking encryption to curing diseases, quantum computing opens doors we
            couldn&apos;t even imagine with classical computers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {possibilities.map((item) => (
            <div key={item.title} className="glass card-accent rounded-2xl p-6 group">
              <div className="flex items-center justify-between mb-5">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${accentStyles[item.accent].badge}`}>
                  {item.timeline}
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${accentStyles[item.accent].hover} transition-colors`}>
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-10 max-w-3xl mx-auto border-t border-orange-500/10">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build the Future?</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              qbit.zone is developing cutting-edge quantum algorithms. Join our waitlist to be
              among the first to access our platform.
            </p>
 {/*        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-orange-500/20">
                Get Early Access
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold text-neutral-300 border border-white/10 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300">
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">Stay Informed</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">Latest Quantum News</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Real-time curated news from the quantum computing frontier. Updated with the latest
            breakthroughs, research, and industry developments.
          </p>
        </div>
      </div>
      <NewsSlider />
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-20 pb-10 px-4 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-lg font-bold text-white">
                qbit<span className="text-orange-400">.zone</span>
              </span>
            </div>
            <p className="text-neutral-500 max-w-md text-sm leading-relaxed">
              Pioneering the future of quantum computing algorithms. We are building the tools
              that will transform industries and solve humanity&apos;s hardest problems.
            </p>
          </div>
{/*           <div>
            <h4 className="font-semibold text-sm text-neutral-300 mb-4 tracking-wide uppercase">Platform</h4>
            <ul className="space-y-3 text-neutral-500">
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Research</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">API</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-neutral-300 mb-4 tracking-wide uppercase">Company</h4>
            <ul className="space-y-3 text-neutral-500">
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div> */}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; 2026 qbit.zone. All rights reserved.
          </p>
{/*           <div className="flex gap-5">
            <a href="#" className="text-neutral-600 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
