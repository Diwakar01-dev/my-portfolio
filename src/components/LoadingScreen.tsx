import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-secondary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute h-full w-full rounded-full border-4 border-primary/20" />
        <span className="absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-t-primary" />
        <span className="text-2xl font-bold text-primary">DK</span>
      </div>
      <motion.p
        className="mt-6 text-sm font-medium tracking-[0.3em] text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}
