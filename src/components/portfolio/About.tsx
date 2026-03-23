import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Sobre</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Resumo Profissional</h3>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-foreground/80 leading-relaxed text-lg">
            Engenheiro de Dados com atuação em ambientes cloud Azure, especializado na construção de 
            pipelines de dados escaláveis, arquiteturas Lakehouse (Medallion) e processamento distribuído 
            com PySpark. Experiência prática na migração de workloads do Azure Synapse para o Microsoft 
            Fabric, otimização de processos de ETL/ELT e modelagem de dados com Delta Lake. Atuação com 
            autonomia em projetos de ingestão, transformação e orquestração de dados, contribuindo 
            diretamente para a melhoria de performance, governança e confiabilidade de ambientes analíticos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
