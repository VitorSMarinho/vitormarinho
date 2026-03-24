import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Engenheiro de Dados",
    company: "Empresa Atual",
    period: "2023 — Presente",
    items: [
      "Construção de pipelines end-to-end utilizando PySpark e Azure Data Factory para processamento de dados estruturados e não estruturados em arquitetura Medallion (Bronze → Silver → Gold).",
      "Atuação na migração de workloads do Azure Synapse Analytics para Microsoft Fabric, incluindo reestruturação de pipelines, notebooks e camadas de dados com foco em performance e escalabilidade.",
      "Desenvolvimento e manutenção de Lakehouses no Databricks e Microsoft Fabric, utilizando Delta Lake para versionamento, controle de schema e otimização de consultas.",
      "Implementação de rotinas de qualidade de dados e monitoramento de pipelines, com alertas automatizados para garantir integridade e rastreabilidade.",
      "Automação de ingestão de dados utilizando Azure Logic Apps e Data Lake, reduzindo processos manuais.",
      "Criação de views e tabelas otimizadas para consumo em BI (Power BI), garantindo confiabilidade e atualização dos dados.",
      "Suporte e otimização contínua de pipelines em ambiente produtivo, garantindo estabilidade e eficiência operacional.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Trajetória</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Experiência Profissional</h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl" />

              <div className="flex items-start gap-4 mb-6">
                <div className="glass p-3 rounded-xl">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-primary/80">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-foreground/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
