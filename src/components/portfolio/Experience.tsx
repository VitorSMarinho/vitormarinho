import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Engenheiro de Dados",
    company: "UPBI Data Analytics",
    period: "2023 — Presente",
    items: [
      "Construção e orquestração de pipelines ETL/ELT escaláveis com PySpark, SQL e Azure Data Factory, realizando ingestão de dados de múltiplas fontes (SAP, SharePoint, Excel) nas camadas Bronze, Silver e Gold (Medallion Architecture) no Databricks.",
      "Atuação em projeto de Big Data com processamento distribuído, garantindo qualidade, rastreabilidade e performance dos dados em escala para suporte a decisões de negócio.",
      "Participação direta na migração completa de workloads Synapse → Microsoft Fabric, com foco em governança, segurança, performance e validação de integridade pós-migração.",
      "Monitoramento proativo e resolução de incidentes em pipelines com Azure Monitor e Log Analytics, configurando alertas para garantir continuidade operacional.",
      "Automação de fluxos operacionais com Logic Apps integrados a pipelines de CI/CD via Azure DevOps e GitHub Actions, reduzindo intervenções manuais.",
      "Colaboração com arquitetos, engenheiros e stakeholders para levantamento de requisitos e definição de soluções alinhadas à visão de negócio.",
      "Aplicação de práticas de governança de dados, controle de acessos (RBAC) e padronização de ambientes e documentação técnica.",
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
