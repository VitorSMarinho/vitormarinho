import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Contato</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar?</h3>
          <p className="text-muted-foreground mb-10 text-lg">
            Estou aberto a novas oportunidades e colaborações em projetos de dados.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="glass border-0 rounded-full px-6 gap-2 hover:bg-primary/20" variant="outline" asChild>
            <a href="mailto:vtechdata.solutions@outlook.com.br">
              <Mail className="w-4 h-4" /> E-mail
            </a>
          </Button>
          <Button className="glass border-0 rounded-full px-6 gap-2 hover:bg-primary/20" variant="outline" asChild>
            <a href="https://www.linkedin.com/in/vitor-marinho/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </Button>
          <Button className="glass border-0 rounded-full px-6 gap-2 hover:bg-primary/20" variant="outline" asChild>
            <a href="https://github.com/VitorSMarinho" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </Button>
          <Button className="glass border-0 rounded-full px-6 gap-2 hover:bg-primary/20" variant="outline" asChild>
            <a href="https://wa.me/5516997384472" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Vitor Marinho. Todos os direitos reservados.</p>
      </div>
    </section>
  );
};

export default Contact;
