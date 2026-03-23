import { motion } from "framer-motion";
import { ArrowUpRight, Database, Workflow } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "Migração Synapse → Microsoft Fabric",
    description:
      "Transição completa de pipelines, notebooks e camadas de dados do Azure Synapse Analytics para o Microsoft Fabric, reestruturando a arquitetura de ingestão e transformação com foco em performance e redução de custo operacional.",
    tags: ["Microsoft Fabric", "Synapse", "PySpark", "Delta Lake", "Data Factory"],
    color: "from-primary to-secondary",
  },
  {
    icon: Database,
    title: "Arquitetura Lakehouse em Databricks",
    description:
      "Implementação de arquitetura Medallion (Bronze → Silver → Gold) em Databricks com Delta Lake, incluindo rotinas de qualidade de dados, controle de schema evolution e otimização de consultas analíticas para consumo via Power BI.",
    tags: ["Databricks", "Delta Lake", "PySpark", "Medallion", "Power BI"],
    color: "from-accent to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Portfólio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Projetos em Destaque</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Hover glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                    <project.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-foreground/65 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
