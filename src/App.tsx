import { motion } from "framer-motion";
import canitLogo from "@/assets/canit-logo.jpeg";
import {
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Download,
  ExternalLink,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────── */

type LinkItem = {
  label: string;
  sub?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const links: LinkItem[] = [
  {
    label: "Visit our Website",
    sub: "canit.in",
    href: "https://canit.in",
    icon: Globe,
    color: "#64B5F6",
  },
  {
    label: "LinkedIn",
    sub: "@canitsol",
    href: "https://www.linkedin.com/company/canitsol/",
    icon: Linkedin,
    color: "#0A66C2",
  },
  {
    label: "Instagram",
    sub: "@canitsol",
    href: "https://www.instagram.com/canitsol/",
    icon: Instagram,
    color: "#E4405F",
  },
  {
    label: "Facebook",
    sub: "/canitsol",
    href: "https://www.facebook.com/canitsol",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    label: "X (Twitter)",
    sub: "@canitsol",
    href: "https://twitter.com/canitsol",
    icon: Twitter,
    color: "#1DA1F2",
  },
];

const values = ["Creativity", "Transparency", "Results", "Empowerment"];

/* ── Animations ────────────────────────────────────────── */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ── App ───────────────────────────────────────────────── */

export default function App() {
  return (
    <main
      className="relative min-h-dvh w-full overflow-hidden bg-[#0A1931]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px] animate-float"
          style={{
            background:
              "radial-gradient(circle, #64B5F6 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 top-1/3 h-[350px] w-[350px] rounded-full opacity-15 blur-[90px] animate-float-delayed"
          style={{
            background:
              "radial-gradient(circle, #E63946 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-[80px] animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, #64B5F6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-md px-5 py-6 sm:py-10">
        {/* Cream card */}
        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="overflow-hidden rounded-t-[28px] bg-[#F5F0E6] px-6 pt-8 pb-7 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3,
                }}
                className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-6px_rgba(10,25,49,0.3)] ring-2 ring-[#0A1931]/8"
              >
                <img
                  src={canitLogo}
                  alt="canit Solutions logo"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </motion.div>
              <div>
                <h1 className="text-[32px] font-extrabold leading-[0.95] tracking-tight text-[#0A1931]">
                  canit
                  <br />
                  Solutions
                </h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-2.5 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-[#0A1931] to-[#64B5F6]"
                />
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 text-[13px] font-medium leading-relaxed text-[#0A1931]/65"
          >
            Official link hub — connect with us across the web.
          </motion.p>

          {/* Links */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-col gap-3"
          >
            {links.map((item) => (
              <SocialLink key={item.label} item={item} />
            ))}

            {/* Brochure section */}
            <BrochureSection />
          </motion.div>
        </motion.section>

        {/* Values strip */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="rounded-b-[28px] bg-gradient-to-br from-[#1457C7] to-[#0d3d94] px-6 py-6 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-base font-bold tracking-wide text-white/95">
            Our Values
          </h2>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
                className="rounded-full bg-white/95 px-4 py-1.5 text-[13px] font-semibold text-[#0A1931] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              >
                {v}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-8 pb-6 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="text-[11px] font-medium tracking-[0.15em] text-white/40">
            © {new Date().getFullYear()} ·{" "}
            <span className="text-white/65">canit Solutions</span>
          </p>
        </motion.footer>
      </div>
    </main>
  );
}

/* ── Components ────────────────────────────────────────── */

function SocialLink({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      className="group flex items-center gap-3.5 rounded-2xl border border-[#0A1931]/8 bg-white px-4 py-3.5 transition-all duration-300 hover:border-transparent hover:shadow-[0_12px_32px_-8px_rgba(10,25,49,0.2)]"
      id={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: item.color }}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="flex flex-1 flex-col text-left">
        <span className="text-[15px] font-bold leading-tight text-[#0A1931]">
          {item.label}
        </span>
        {item.sub && (
          <span className="mt-0.5 text-xs font-medium text-[#0A1931]/50">
            {item.sub}
          </span>
        )}
      </span>
      <ChevronRight className="h-4.5 w-4.5 text-[#0A1931]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0A1931]/60" />
    </motion.a>
  );
}

function BrochureSection() {
  const pdfUrl = "/assets/canit-event-brochure.pdf";

  return (
    <motion.div variants={fadeUp} className="mt-2 flex flex-col gap-2.5">
      {/* Divider */}
      <div className="flex items-center gap-3 py-1">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0A1931]/12" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A1931]/45">
          Company Brochure
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#0A1931]/12" />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <motion.a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E63946] bg-white px-4 py-3.5 text-[#E63946] transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:shadow-[0_12px_32px_-8px_rgba(230,57,70,0.5)]"
          id="btn-view-brochure"
        >
          <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-12" />
          <span className="text-sm font-bold">View PDF</span>
        </motion.a>

        <motion.a
          href={pdfUrl}
          download="canit-Solutions-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center justify-center gap-2 rounded-2xl bg-[#E63946] px-4 py-3.5 text-white transition-all duration-300 hover:bg-[#c92e3b] hover:shadow-[0_12px_32px_-8px_rgba(230,57,70,0.6)]"
          id="btn-download-brochure"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          <span className="text-sm font-bold">Download</span>
        </motion.a>
      </div>

      <p className="text-center text-[11px] font-medium text-[#0A1931]/45">
        View in browser or save offline for later.
      </p>
    </motion.div>
  );
}
