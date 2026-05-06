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
            Engenheiro de Dados com experiência em construção de pipelines ETL/ELT escaláveis, arquitetura
            Lakehouse (Medallion) e processamento distribuído com PySpark e Databricks. Experiência com SQL
            avançado, Python, Azure Data Factory e AWS (S3, Redshift, Glue). Atuação em projetos reais de
            migração de workloads para cloud, automação de fluxos com CI/CD via Azure DevOps e GitHub Actions,
            e monitoramento proativo de pipelines com Azure Monitor e Log Analytics. Perfil orientado a
            resultados, com visão de negócio para traduzir necessidades dos stakeholders em soluções de dados
            estratégicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
