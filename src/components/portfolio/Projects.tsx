import { motion } from "framer-motion";
import { ArrowUpRight, Database, Workflow, Mail, Settings, FileSpreadsheet } from "lucide-react";

interface ProjectData {
  icon: typeof Workflow;
  title: string;
  context: string;
  problem?: string[];
  solution: string[];
  tags: string[];
  results: string[];
  color: string;
}

const projects: ProjectData[] = [
  {
    icon: Workflow,
    title: "Migração de Dados: Synapse → Microsoft Fabric",
    context:
      "Ambiente analítico apresentava limitações de performance e alto tempo de resposta em execuções críticas, impactando o consumo de dados pelas áreas de negócio.",
    problem: [
      "Lentidão em pipelines e consultas",
      "Baixa eficiência no processamento de dados",
      "Limitações de escalabilidade no ambiente Synapse",
    ],
    solution: [
      "Migração gradual (micro → macro) de workloads do Azure Synapse para Microsoft Fabric",
      "Reestruturação da arquitetura no padrão Medallion (Bronze, Silver, Gold)",
      "Implementação de pipelines com PySpark e Data Factory",
      "Definição de governança de acesso (RBAC) por área e nível de senioridade",
      "Validação controlada por domínio de negócio antes da entrada em produção",
    ],
    tags: ["Microsoft Fabric", "Azure Synapse", "PySpark", "Data Factory", "Delta Lake", "RBAC"],
    results: [
      "Redução significativa no tempo de execução dos pipelines",
      "Melhoria de performance no consumo de dados",
      "Aumento da confiabilidade do ambiente produtivo",
      "Estrutura escalável e padronizada",
      "Validação de integridade dos dados pós-migração com testes de regressão e documentação técnica",
    ],
    color: "from-primary to-secondary",
  },
  {
    icon: Mail,
    title: "Automação de Ingestão de Dados via E-mail",
    context:
      "Processo manual de recebimento de arquivos via e-mail, gerando atrasos e riscos operacionais.",
    problem: [
      "Dependência de processos manuais",
      "Risco de erro humano",
      "Baixa rastreabilidade dos dados",
    ],
    solution: [
      "Automação da ingestão utilizando Azure Logic Apps para captura de anexos",
      "Armazenamento automático em Data Lake (Storage)",
      "Ingestão em camada raw, transformação e padronização (Silver)",
      "Arquitetura orientada a baixo custo e alta confiabilidade",
    ],
    tags: ["Azure Logic Apps", "Data Lake", "Data Factory", "PySpark"],
    results: [
      "Eliminação de processos manuais",
      "Redução de erros operacionais",
      "Disponibilização automatizada diária dos dados",
      "Maior rastreabilidade e confiabilidade",
    ],
    color: "from-accent to-primary",
  },
  {
    icon: Settings,
    title: "Sustentação e Otimização de Pipelines de Dados",
    context:
      "Ambiente com múltiplos pipelines e alta dependência entre áreas de negócio.",
    solution: [
      "Monitoramento contínuo de pipelines",
      "Identificação e correção de falhas",
      "Otimização de performance",
      "Suporte técnico às áreas envolvidas",
      "Monitoramento via Azure Monitor e Log Analytics com alertas automatizados para rastreabilidade",
    ],
    tags: ["Data Factory", "PySpark", "Delta Lake", "Monitoring"],
    results: [
      "Maior estabilidade dos processos",
      "Redução de falhas em produção",
      "Aumento da eficiência operacional",
    ],
    color: "from-secondary to-accent",
  },
  {
    icon: FileSpreadsheet,
    title: "Estruturação de Dados a partir de Planilhas Excel",
    context:
      "Dados descentralizados em planilhas Excel, manipulados manualmente por diferentes áreas.",
    problem: [
      "Falta de padronização",
      "Alto risco de inconsistência",
      "Baixa confiabilidade dos dados",
    ],
    solution: [
      "Desenvolvimento de pipelines para ingestão de arquivos Excel",
      "Utilização do Databricks como plataforma principal de engenharia de dados",
      "Desenvolvimento de pipelines e transformações com PySpark no Databricks",
      "Estruturação em camadas: Raw, HMZ (tratamento) e VWs (consumo)",
      "Padronização de nomenclaturas e governança",
      "Integração com fluxo analítico até BI",
      "Gestão de entregas via Azure DevOps (Boards/Sprints)",
    ],
    tags: ["Excel", "Databricks", "Data Factory", "PySpark", "SQL", "Azure DevOps"],
    results: [
      "Centralização e padronização dos dados",
      "Redução de erros manuais",
      "Aumento da confiabilidade das informações",
      "Disponibilização estruturada para BI",
    ],
    color: "from-primary to-accent",
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

                {/* Contexto */}
                <p className="text-foreground/65 text-sm leading-relaxed mb-4">{project.context}</p>

                {/* Problema */}
                {project.problem && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-2">Problema</p>
                    <ul className="space-y-1">
                      {project.problem.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-foreground/60 text-sm">
                          <span className="w-1 h-1 rounded-full bg-destructive/60 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solução */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-2">Solução</p>
                  <ul className="space-y-1">
                    {project.solution.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground/65 text-sm">
                        <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resultados */}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-2">Resultado</p>
                  <ul className="space-y-1">
                    {project.results.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground/65 text-sm">
                        <span className="w-1 h-1 rounded-full bg-secondary/80 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
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
