import { motion } from "framer-motion";

const categories = [
  {
    name: "Linguagens",
    techs: ["Python", "PySpark", "SQL", "DAX"],
  },
  {
    name: "Cloud & Plataformas",
    techs: ["Azure", "Microsoft Fabric", "Databricks", "Azure Data Factory", "Azure Synapse"],
  },
  {
    name: "Processamento & Pipelines",
    techs: ["Python", "PySpark", "Delta Lake", "Data Factory", "Synapse Pipelines"],
  },
  {
    name: "Bancos de Dados",
    techs: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    name: "Arquitetura & Modelagem",
    techs: ["Medallion (Bronze/Silver/Gold)", "Delta Lake", "Star Schema"],
  },
  {
    name: "DevOps & Monitoramento",
    techs: ["Git", "Azure DevOps", "CI/CD"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Tecnologias & Ferramentas</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
