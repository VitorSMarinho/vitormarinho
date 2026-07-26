import { motion } from "framer-motion";
import { ArrowUpRight, Database, Workflow, Mail, Settings, FileSpreadsheet, Brain, ExternalLink, Rocket, Stethoscope, MapPin, ShieldCheck } from "lucide-react";

interface ProjectData {
  icon: typeof Workflow;
  title: string;
  context: string;
  problem?: string[];
  solution: string[];
  tags: string[];
  results: string[];
  color: string;
  demoUrl?: string;
}

const projects: ProjectData[] = [
  {
    icon: Brain,
    title: "ARIA — Plataforma de Inteligência de Dados e Agentes de IA para Saúde",
    context:
      "Desenvolvimento de uma plataforma de inteligência de dados e agentes de IA para centros oncológicos, simulando um cenário real de instituto de saúde brasileiro com múltiplas unidades, onde a fragmentação de dados clínicos, operacionais e financeiros impactava diretamente a tomada de decisão médica e a eficiência operacional.",
    problem: [
      "Dados distribuídos em silos e sistemas desconectados",
      "Ausência de indicadores em tempo real",
      "Dificuldade para auditoria clínica e operacional",
      "Baixa visibilidade sobre estoque e financeiro",
      "Dependência de processos manuais para tomada de decisão",
    ],
    solution: [
      "Arquitetura Medallion no Databricks (Bronze, Silver e Gold)",
      "Pipelines de ingestão e transformação com Python e PySpark",
      "Agentes de IA especializados (clínico, financeiro, operacional, estratégico e de estoque) com LangChain + CrewAI",
      "Camada de disponibilização via Supabase (PostgreSQL)",
      "API REST com FastAPI para consumo de dados em tempo real, publicada em produção no Render.com",
      "Integração com LLMs via Groq e Claude API para análises inteligentes",
      "Controle de acesso baseado em perfil de usuário e versionamento com Git/GitHub",
    ],
    tags: [
      "Databricks",
      "PySpark",
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "LangChain",
      "CrewAI",
      "Groq",
      "Claude API",
      "Medallion",
    ],
    results: [
      "Centralização de dados clínicos, financeiros e operacionais",
      "Disponibilização de insights inteligentes em tempo real",
      "Solução enterprise construída integralmente com stack 100% gratuita",
      "Agentes autônomos especializados por domínio de negócio",
      "Arquitetura escalável, auditável e replicável para outros setores",
      "Integração prática entre Engenharia de Dados e IA Generativa",
    ],
    color: "from-accent to-secondary",
    demoUrl: "https://clinical-wisdom-web.lovable.app",
  },
  {
    icon: Rocket,
    title: "Agient Brasil — Empresa de Automação e IA para Negócios",
    context:
      "Empresa que fundei em 2026 para levar automação e inteligência artificial a negócios locais, unindo experiência em engenharia de dados com construção de produtos ponta a ponta usando agentes de IA como parceiros de desenvolvimento.",
    problem: [
      "Pequenas e médias empresas sem acesso a automação sob medida",
      "Processos manuais consumindo tempo que devia ir para o crescimento do negócio",
      "Falta de indicadores para decisão",
    ],
    solution: [
      "Landing page e posicionamento de marca construídos com Next.js e Tailwind",
      "SEO técnico (sitemap, robots, JSON-LD) e domínio próprio (agient.com.br)",
      "Agente de IA para qualificação de leads via n8n + Groq + Supabase",
      "Metodologia de diagnóstico, construção e evolução por módulos (AGIENT Core)",
    ],
    tags: ["Next.js", "Tailwind", "n8n", "Groq", "Supabase", "SEO técnico"],
    results: [
      "Empresa no ar em produção, domínio próprio ativo",
      "Primeiro piloto pago fechado (Conexão Sutil)",
      "Agente de qualificação de leads em desenvolvimento",
    ],
    color: "from-primary to-accent",
    demoUrl: "https://agient.com.br",
  },
  {
    icon: Stethoscope,
    title: "Conexão Sutil — Site e Painel de Gestão para Clínica",
    context:
      "Primeiro piloto pago da Agient: site institucional e painel administrativo para uma clínica de terapias real, substituindo controle manual por uma ferramenta única de agenda, financeiro e gestão de terapeutas.",
    problem: [
      "Agenda e financeiro controlados em planilhas soltas",
      "Falta de histórico por sessão e por paciente",
      "Sem visão consolidada de faturamento mês a mês",
    ],
    solution: [
      "Site institucional com apresentação da clínica e dos terapeutas",
      "Painel administrativo com financeiro mês a mês e soft-delete de registros",
      "Ficha de paciente com memória por sessão para apoiar o terapeuta",
      "Fluxo de cancelamento de pedidos com baixa de estoque",
    ],
    tags: ["Next.js", "Supabase", "Painel administrativo"],
    results: [
      "No ar em produção, testado com o cliente real",
      "Financeiro mensal automatizado, sem planilha manual",
      "Base pronta para expandir com IA lendo o histórico de sessões",
    ],
    color: "from-accent to-primary",
    demoUrl: "https://conexao-sutil.vercel.app",
  },
  {
    icon: MapPin,
    title: "Lazer Livre — Marketplace de Espaços para Eventos",
    context:
      "Marketplace para conectar donos de espaços a quem procura um lugar para eventos, começando pela região de Taquaritinga, com o núcleo do produto construído e validado em produção.",
    problem: [
      "Busca por espaços para eventos fragmentada (grupos de WhatsApp, indicação boca a boca)",
      "Donos de espaço sem vitrine própria online",
      "Falta de dados de uso para decisão de precificação",
    ],
    solution: [
      "SPA em React/Vite com fluxo completo de busca e reserva",
      "Métricas de uso e soft-delete de anúncios",
      "Carrossel de espaços e integração com Supabase para dados e autenticação",
    ],
    tags: ["React", "Vite", "Supabase"],
    results: [
      "No ar em produção",
      "Núcleo validado com uso real",
      "Recebeu sócio (engenheiro de software sênior) para evoluir o produto",
    ],
    color: "from-secondary to-primary",
    demoUrl: "https://lazer-livre.vercel.app",
  },
  {
    icon: ShieldCheck,
    title: "VITRIX OS — Plataforma de Gestão para Empresa de Segurança",
    context:
      "Sistema de gestão operacional para minha própria empresa de segurança privada, cobrindo escalas de funcionários, financeiro e controle de acesso por perfil.",
    problem: [
      "Escalas e presença de funcionários controladas manualmente",
      "Pagamento de diárias sem rastreabilidade",
      "Falta de controle de acesso: qualquer pessoa via dado sensível (ex: PIX)",
    ],
    solution: [
      "Frontend React + backend FastAPI + MongoDB, deploy em Vercel, Render e Atlas",
      "RBAC completo por perfil (admin, coordenador, RH, financeiro)",
      "Controle de pagamento de diárias (pago/pendente) direto no dashboard",
      "Cadastro completo de funcionários com busca de CEP e certificações",
    ],
    tags: ["React", "FastAPI", "MongoDB", "RBAC"],
    results: [
      "No ar em produção, uso real na própria operação",
      "Controle de diárias e financeiro sem planilha",
      "Hardening de segurança aplicado (registro de admin travado, CORS restrito)",
    ],
    color: "from-primary to-secondary",
    demoUrl: "https://vitrixsecuritystaff.vercel.app",
  },
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

                {/* Demo link */}
                {project.demoUrl && (
                  <div className="mt-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Acessar demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
