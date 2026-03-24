import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      {/* Animated orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px]"
        animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "50%", right: "30%" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Taquaritinga, São Paulo</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vitor <span className="gradient-text">Marinho</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Engenheiro de Dados
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {["Azure", "Microsoft Fabric", "Databricks", "PySpark", "ETL/ELT"].map((tag) => (
            <span
              key={tag}
              className="glass px-3 py-1 rounded-full text-sm text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="glass border-0 rounded-full hover:bg-primary/20 transition-colors"
            asChild
          >
            <a href="https://github.com/vitormarinho" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="glass border-0 rounded-full hover:bg-primary/20 transition-colors"
            asChild
          >
            <a href="https://linkedin.com/in/vitormarinho" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="glass border-0 rounded-full hover:bg-primary/20 transition-colors"
            asChild
          >
            <a href="mailto:vitor@email.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
