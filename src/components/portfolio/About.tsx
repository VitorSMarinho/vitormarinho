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
          <p className="text-foreground/80 leading-relaxed text-lg mb-4">
            Engenheiro de Dados com experiência real em pipelines ETL/ELT escaláveis, arquitetura Lakehouse
            (Medallion) e processamento distribuído com PySpark e Databricks. Domínio de SQL avançado, Python,
            Azure Data Factory e AWS (S3, Redshift, Glue), com atuação em migração de workloads para cloud,
            automação de CI/CD (Azure DevOps, GitHub Actions) e monitoramento proativo com Azure Monitor e Log
            Analytics.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg mb-4">
            Em paralelo, fundei a <span className="text-primary font-medium">Agient Brasil</span>, onde uso
            essa mesma base técnica para construir produtos completos, do frontend ao banco de dados, com
            agentes de IA como parceiros de desenvolvimento. Hoje tenho 4 produtos meus em produção e um
            cliente pagante real usando no dia a dia o que construí.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Meu perfil é orientado a resultado. Seja destravando um pipeline crítico em produção ou tirando um
            produto do papel sozinho, a entrega é sempre a mesma: solução no ar, estável e alinhada ao que o
            negócio realmente precisa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
