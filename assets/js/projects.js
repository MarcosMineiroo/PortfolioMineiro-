/* Dados dos projetos: o conteúdo da janela de detalhes de cada card.
   Para editar um projeto, altere o texto aqui. */
window.PROJECTS = [
  {
    "id": "jornadas-push-inapp",
    "cat": "crm",
    "catLabel": "CRM",
    "tag": "Pmweb · 2026",
    "img": "projeto-jornadas-push-inapp.jpg",
    "title": "Jornadas, push e in-app para grandes marcas",
    "short": "Jornadas e mensagens personalizadas no app, com QA em cada disparo.",
    "lead": "Na Pmweb, criei e personalizei jornadas, campanhas, mensagens in-app e push para clientes da agência, usando Airship e Salesforce Marketing Cloud.",
    "challenge": "Grandes marcas precisam falar com milhões de clientes no canal certo, na hora certa e sem erro, porque qualquer falha em um disparo aparece para muita gente ao mesmo tempo.",
    "actions": [
      "Criei e personalizei jornadas e campanhas no Airship e no Salesforce Marketing Cloud.",
      "Configurei mensagens push e in-app de acordo com cada briefing.",
      "Usei dados do Data Cloud para segmentar o público de cada comunicação.",
      "Segui um checklist de QA antes de cada disparo.",
      "Trabalhei em rotina ágil, com entregas contínuas para vários clientes."
    ],
    "flow": [
      [
        "uil-database",
        "Dados",
        "Data Cloud"
      ],
      [
        "uil-filter",
        "Segmentação",
        "Público certo"
      ],
      [
        "uil-sitemap",
        "Jornada",
        "Regras e tempos"
      ],
      [
        "uil-bell",
        "Push e in-app",
        "Mensagem no app"
      ],
      [
        "uil-check-circle",
        "QA",
        "Checklist antes do envio"
      ]
    ],
    "stack": [
      "Airship",
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "MobilePush",
      "Data Cloud",
      "Agile"
    ],
    "results": [
      [
        "uil-shield-check",
        "Disparos revisados",
        "Checklist de QA em todas as entregas"
      ],
      [
        "uil-users-alt",
        "Personalização em escala",
        "Mensagens segmentadas por público"
      ],
      [
        "uil-sync",
        "Rotina ágil",
        "Entregas contínuas para várias marcas"
      ]
    ],
    "fallback": null
  },
  {
    "id": "email-whatsapp",
    "cat": "crm",
    "catLabel": "CRM",
    "tag": "Pmweb · 2026",
    "img": "projeto-email-whatsapp.jpg",
    "title": "E-mail e WhatsApp em jornada",
    "short": "Do briefing no Notion ao disparo no SFMC, com controle no Jira.",
    "lead": "Executei demandas de Salesforce Marketing Cloud para uma conta de mídia: disparos pontuais de e-mail e mensagens de WhatsApp dentro de jornadas.",
    "challenge": "As demandas chegavam como briefings no Notion e precisavam virar comunicações prontas no SFMC, com tudo registrado para o time acompanhar o andamento.",
    "actions": [
      "Recebi e interpretei os briefings de cada demanda no Notion.",
      "Montei os disparos de e-mail e as mensagens de WhatsApp em jornada no SFMC.",
      "Registrei cada entrega em uma issue no Jira e na tabela de controle.",
      "Validei cada comunicação antes de enviar para o QA."
    ],
    "flow": [
      [
        "uil-notes",
        "Briefing",
        "Card no Notion"
      ],
      [
        "uil-envelope",
        "E-mail",
        "Content Builder"
      ],
      [
        "uil-whatsapp",
        "WhatsApp",
        "Mensagem em jornada"
      ],
      [
        "uil-clipboard-notes",
        "Controle",
        "Issue no Jira"
      ]
    ],
    "stack": [
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "Email Studio",
      "WhatsApp",
      "Notion",
      "Jira"
    ],
    "results": [
      [
        "uil-layers",
        "Canais integrados",
        "E-mail e WhatsApp na mesma jornada"
      ],
      [
        "uil-clipboard-notes",
        "Tudo rastreável",
        "Cada demanda registrada no Jira"
      ]
    ],
    "fallback": null
  },
  {
    "id": "jornadas-multicanal",
    "cat": "crm",
    "catLabel": "CRM",
    "tag": "Equatorial · 2025",
    "img": "projeto-jornadas-multicanal.jpg",
    "title": "Jornadas multicanal e e-mails personalizados",
    "short": "Jornadas no Journey Builder e e-mails em AMPscript integrados ao SAP.",
    "lead": "Na Equatorial, construí jornadas personalizadas e campanhas multicanal no Salesforce Marketing Cloud, integradas aos sistemas da empresa.",
    "challenge": "Os dados de clientes estavam em sistemas diferentes, como o SAP e o Data Cloud. Era preciso juntar essas informações para mandar a mensagem certa para cada cliente.",
    "actions": [
      "Criei jornadas personalizadas e campanhas multicanal no Journey Builder.",
      "Construí e-mails personalizados com AMPscript e HTML responsivo.",
      "Automatizei a entrada de dados com Automation Studio e SFTP.",
      "Integrei o SFMC com SAP, Salesforce CRM e Data Cloud.",
      "Testei softwares e APIs e registrei as atividades no Azure DevOps."
    ],
    "flow": [
      [
        "uil-server",
        "SAP e Data Cloud",
        "Origem dos dados"
      ],
      [
        "uil-cloud-upload",
        "SFTP",
        "Automation Studio"
      ],
      [
        "uil-sitemap",
        "Journey Builder",
        "Regras da jornada"
      ],
      [
        "uil-envelope",
        "E-mail",
        "AMPscript e HTML"
      ]
    ],
    "stack": [
      "Salesforce Marketing Cloud",
      "Journey Builder",
      "Automation Studio",
      "AMPscript",
      "HTML",
      "SAP",
      "Data Cloud",
      "Azure DevOps"
    ],
    "results": [
      [
        "uil-link",
        "Dados conectados",
        "SAP, CRM e Data Cloud alimentando as jornadas"
      ],
      [
        "uil-user-check",
        "Mensagem sob medida",
        "Conteúdo dinâmico para cada cliente"
      ]
    ],
    "fallback": null
  },
  {
    "id": "notion-jira-ia",
    "cat": "dados-ia crm",
    "catLabel": "IA + CRM",
    "tag": "Automação · 2026",
    "img": "",
    "title": "Automação Notion → Jira com IA",
    "short": "Um agente que cria a issue no Jira com só três informações.",
    "lead": "Criei um agente de IA que abre a issue no Jira com os campos padrão da conta e já preenche a tabela de controle.",
    "challenge": "Cada demanda nova exigia o mesmo trabalho manual: copiar dados do Notion, criar a issue no Jira com vários campos fixos e depois atualizar uma planilha de controle. Isso tomava tempo e abria espaço para erro.",
    "actions": [
      "Mapeei os campos padrão que toda issue da conta precisa ter.",
      "Estruturei o agente para receber só três entradas: link do card no Notion, tipo da demanda e nome da issue.",
      "Fiz o agente criar a issue e preencher a tabela de controle automaticamente."
    ],
    "flow": [
      [
        "uil-notes",
        "Card no Notion",
        "Link, tipo e nome"
      ],
      [
        "uil-robot",
        "Agente de IA",
        "Monta os campos"
      ],
      [
        "uil-clipboard-notes",
        "Issue no Jira",
        "Campos padrão"
      ],
      [
        "uil-table",
        "Tabela de controle",
        "Preenchida sozinha"
      ]
    ],
    "stack": [
      "IA generativa",
      "Prompt engineering",
      "Notion",
      "Jira"
    ],
    "results": [
      [
        "uil-stopwatch",
        "Menos trabalho manual",
        "De vários campos para três entradas"
      ],
      [
        "uil-shield-check",
        "Menos erro de cadastro",
        "Campos sempre no padrão da conta"
      ]
    ],
    "fallback": [
      "work__banner--ia",
      "uil-robot"
    ]
  },
  {
    "id": "validacao-preqa",
    "cat": "dados-ia crm",
    "catLabel": "IA + CRM",
    "tag": "Automação · 2026",
    "img": "projeto-validacao-preqa.jpg",
    "title": "Validação pré-QA de campanhas com IA",
    "short": "IA que confere as demandas de SFMC antes de irem para o QA.",
    "lead": "Criei um prompt estruturado que monta e confere as demandas de SFMC a partir do briefing, antes de elas seguirem para o QA.",
    "challenge": "Quando um erro só aparece no QA, a demanda volta, alguém refaz e a entrega atrasa. A ideia foi encontrar essas inconsistências antes.",
    "actions": [
      "Defini o que precisa ser checado em cada tipo de demanda (WhatsApp em jornada e e-mails pontuais).",
      "Escrevi um prompt estruturado que compara a construção com o briefing.",
      "Usei a IA para apontar o que está diferente antes de enviar para o QA."
    ],
    "flow": [
      [
        "uil-notes",
        "Briefing",
        "O que foi pedido"
      ],
      [
        "uil-robot",
        "IA confere",
        "Construção x briefing"
      ],
      [
        "uil-exclamation-triangle",
        "Alertas",
        "O que ajustar"
      ],
      [
        "uil-check-circle",
        "QA",
        "Chega mais redondo"
      ]
    ],
    "stack": [
      "Prompt engineering",
      "IA generativa",
      "Salesforce Marketing Cloud",
      "QA"
    ],
    "results": [
      [
        "uil-redo",
        "Menos retrabalho",
        "Erros pegos antes do QA"
      ],
      [
        "uil-bolt",
        "Entrega mais rápida",
        "Menos idas e voltas"
      ]
    ],
    "fallback": null
  },
  {
    "id": "ocr-google-cloud",
    "cat": "dados-ia",
    "catLabel": "IA",
    "tag": "Equatorial · 2025",
    "img": "projeto-ocr-google-cloud.jpg",
    "title": "Treinamento de modelo de OCR no Google Cloud",
    "short": "IA que lê documentos sozinha, treinada com um dataset curado.",
    "lead": "Fui responsável pela frente técnica de treinamento de IA no Google Cloud para a leitura automática de documentos (OCR).",
    "challenge": "Documentos que a leitura automática não entendia travavam o atendimento e o backoffice. Para o modelo acertar mais, ele precisava de dados de treino melhores.",
    "actions": [
      "Estruturei, fiz a curadoria e classifiquei o dataset usado no treinamento.",
      "Identifiquei padrões de erro do modelo e propus melhorias.",
      "Mapeei em quais pontos da jornada os documentos falhavam.",
      "Analisei o impacto dessas falhas no atendimento e no backoffice."
    ],
    "flow": [
      [
        "uil-file-alt",
        "Documentos",
        "PDFs e imagens"
      ],
      [
        "uil-layer-group",
        "Dataset",
        "Curadoria e classes"
      ],
      [
        "uil-processor",
        "Treinamento",
        "Google Cloud"
      ],
      [
        "uil-file-check-alt",
        "Leitura automática",
        "Dados extraídos"
      ]
    ],
    "stack": [
      "Google Cloud",
      "OCR",
      "Curadoria de dados",
      "Análise de erros"
    ],
    "results": [
      [
        "uil-search",
        "Falhas mapeadas",
        "Onde e por que os documentos falhavam"
      ],
      [
        "uil-chart-line",
        "Modelo melhor treinado",
        "Dataset organizado e classificado"
      ]
    ],
    "fallback": null
  },
  {
    "id": "data-lake-snowflake",
    "cat": "dados-ia",
    "catLabel": "Dados",
    "tag": "Equatorial · 2025",
    "img": "",
    "title": "Análises de clientes em Data Lake e Snowflake",
    "short": "SQL sobre SAP, Data Lake e Snowflake para entender clientes.",
    "lead": "Fiz consultas SQL em SAP, Data Lakes e Snowflake para analisar clientes, consumo e faturamento.",
    "challenge": "Os dados da companhia estavam espalhados entre sistemas e camadas diferentes. Transformar isso em análise confiável exigia conhecer bem a arquitetura e a governança dos dados.",
    "actions": [
      "Escrevi consultas SQL em SAP, Data Lakes e Snowflake.",
      "Analisei dados de clientes, consumo e faturamento.",
      "Trabalhei com arquitetura Data Lake e Lakehouse e pipelines ETL/ELT.",
      "Segui as regras de governança de dados da empresa."
    ],
    "flow": [
      [
        "uil-server",
        "Fontes",
        "SAP e sistemas"
      ],
      [
        "uil-database",
        "Data Lake",
        "Dados brutos"
      ],
      [
        "uil-snowflake",
        "Snowflake",
        "Consultas SQL"
      ],
      [
        "uil-chart-bar",
        "Análises",
        "Clientes e consumo"
      ]
    ],
    "stack": [
      "SQL",
      "Snowflake",
      "Data Lake",
      "Lakehouse",
      "ETL/ELT",
      "SAP"
    ],
    "results": [
      [
        "uil-eye",
        "Visão de clientes",
        "Consumo e faturamento analisados"
      ],
      [
        "uil-shield-check",
        "Dados governados",
        "Análises dentro das regras da empresa"
      ]
    ],
    "fallback": [
      "work__banner--dados",
      "uil-database"
    ]
  },
  {
    "id": "powerbi",
    "cat": "dados-ia",
    "catLabel": "Dados",
    "tag": "2024 – 2025",
    "img": "projeto-powerbi.jpg",
    "title": "Dashboards executivos em Power BI",
    "short": "Do protótipo no Figma ao dashboard pronto para decisão.",
    "lead": "Criei dashboards executivos e análises estratégicas em Power BI para apoiar decisões.",
    "challenge": "Quem decide precisa ver o que importa em poucos segundos. Um bom dashboard começa pelo desenho da tela, não pelo gráfico.",
    "actions": [
      "Prototipei a interface dos dashboards no Figma.",
      "Tratei e modelei os dados com linguagem M.",
      "Criei as medidas e indicadores com DAX.",
      "Montei a versão final no Power BI."
    ],
    "flow": [
      [
        "uil-pen",
        "Protótipo",
        "Figma"
      ],
      [
        "uil-database",
        "Modelagem",
        "Linguagem M"
      ],
      [
        "uil-calculator",
        "Indicadores",
        "DAX"
      ],
      [
        "uil-chart-pie-alt",
        "Dashboard",
        "Power BI"
      ]
    ],
    "stack": [
      "Power BI",
      "DAX",
      "Linguagem M",
      "Figma",
      "SQL"
    ],
    "results": [
      [
        "uil-eye",
        "Leitura rápida",
        "Indicadores principais em uma tela"
      ],
      [
        "uil-lightbulb-alt",
        "Decisões apoiadas",
        "Dados prontos para quem decide"
      ]
    ],
    "fallback": null
  },
  {
    "id": "base-conhecimento",
    "cat": "dados-ia",
    "catLabel": "Dados",
    "tag": "DrSuporti · 2022 – 2023",
    "img": "projeto-base-conhecimento.jpg",
    "title": "Base de conhecimento de suporte",
    "short": "Guias de solução que o próprio cliente consulta.",
    "lead": "Ajudei a desenvolver um dataset de guias de solução para problemas recorrentes, que o cliente pode acessar sozinho.",
    "challenge": "Muitos chamados eram sobre os mesmos problemas, e o time técnico gastava tempo repetindo respostas em vez de cuidar dos casos complexos.",
    "actions": [
      "Levantei os problemas que mais se repetiam nos chamados.",
      "Ajudei a escrever e organizar os guias de solução.",
      "Estruturei o conteúdo para o cliente encontrar a resposta sozinho."
    ],
    "flow": [
      [
        "uil-comment-alt-exclamation",
        "Problema recorrente",
        "Chamados repetidos"
      ],
      [
        "uil-book-open",
        "Guia de solução",
        "Passo a passo"
      ],
      [
        "uil-search",
        "Autoatendimento",
        "Cliente resolve"
      ],
      [
        "uil-users-alt",
        "Time livre",
        "Foco no complexo"
      ]
    ],
    "stack": [
      "Estruturação de dados",
      "Autoatendimento",
      "Suporte técnico"
    ],
    "results": [
      [
        "uil-arrow-down",
        "Menos chamados",
        "Clientes resolvendo sozinhos"
      ],
      [
        "uil-wrench",
        "Time focado",
        "Técnicos livres para casos complexos"
      ]
    ],
    "fallback": null
  },
  {
    "id": "ageufma",
    "cat": "academico",
    "catLabel": "Acadêmico",
    "tag": "AGEUFMA · 2024 – 2025",
    "img": "projeto-ageufma.jpg",
    "title": "Páginas institucionais da AGEUFMA",
    "short": "Criação e manutenção das páginas da agência da UFMA.",
    "lead": "Criei, atualizei e mantive as páginas institucionais da AGEUFMA, a agência de inovação da UFMA.",
    "challenge": "A agência precisava de páginas atualizadas e organizadas para divulgar inovação, pesquisa e pós-graduação para a comunidade.",
    "actions": [
      "Criei páginas novas em HTML, CSS e JavaScript.",
      "Atualizei e mantive as páginas institucionais existentes.",
      "Organizei dados e mantive o ambiente de consulta acadêmica."
    ],
    "flow": [
      [
        "uil-brackets-curly",
        "Código",
        "HTML, CSS e JS"
      ],
      [
        "uil-desktop",
        "Páginas",
        "Site institucional"
      ],
      [
        "uil-sync",
        "Manutenção",
        "Conteúdo atualizado"
      ],
      [
        "uil-users-alt",
        "Comunidade",
        "Acesso à informação"
      ]
    ],
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "results": [
      [
        "uil-globe",
        "Presença digital",
        "Páginas da agência no ar e atualizadas"
      ],
      [
        "uil-folder-open",
        "Dados organizados",
        "Ambiente de consulta mantido"
      ]
    ],
    "fallback": null
  },
  {
    "id": "tcc-lakehouse",
    "cat": "academico dados-ia",
    "catLabel": "TCC",
    "tag": "UFMA · 2026",
    "img": "projeto-tcc-lakehouse.jpg",
    "title": "Data Lakehouse para rastrear jornadas de comunicação",
    "short": "Meu TCC: dados do SFMC organizados em camadas no Google Cloud.",
    "lead": "Meu TCC aplica os princípios da arquitetura Data Lakehouse em pequena escala, com um estudo de caso sobre rastreabilidade em jornadas de comunicação digital. Defendido em julho de 2026, com orientação do Prof. Mário Meireles.",
    "challenge": "Os dados de engajamento das jornadas no Salesforce Marketing Cloud não eram fáceis de rastrear depois do envio. O estudo usou o segmento B2B do Maranhão de uma grande distribuidora de energia.",
    "actions": [
      "Levei os dados de engajamento do SFMC para o Cloud Storage.",
      "Usei o Cloud Run para converter os arquivos CSV para o BigQuery.",
      "Organizei os dados em camadas Bronze, Prata e Ouro (arquitetura Medallion).",
      "Criei dashboards no Looker Studio para acompanhar as jornadas.",
      "Discuti governança, linhagem dos dados e LGPD no trabalho escrito."
    ],
    "flow": [
      [
        "uil-envelope-send",
        "SFMC",
        "Dados de engajamento"
      ],
      [
        "uil-cloud-upload",
        "Cloud Storage",
        "Camada Bronze"
      ],
      [
        "uil-exchange",
        "Cloud Run",
        "CSV para BigQuery"
      ],
      [
        "uil-database",
        "BigQuery",
        "Prata e Ouro"
      ],
      [
        "uil-chart-line",
        "Looker Studio",
        "Dashboards"
      ]
    ],
    "stack": [
      "Google Cloud",
      "Cloud Storage",
      "Cloud Run",
      "BigQuery",
      "Looker Studio",
      "Salesforce Marketing Cloud",
      "Arquitetura Medallion"
    ],
    "results": [
      [
        "uil-search-alt",
        "Rastreabilidade",
        "Cada interação acompanhada de ponta a ponta"
      ],
      [
        "uil-layer-group",
        "Dados em camadas",
        "Bruto, tratado e pronto para análise"
      ],
      [
        "uil-graduation-cap",
        "TCC defendido",
        "Julho de 2026"
      ]
    ],
    "fallback": null
  },
  {
    "id": "integralab",
    "cat": "academico",
    "catLabel": "Acadêmico",
    "tag": "UFMA · 2025 – 2026",
    "img": "projeto-integralab.jpg",
    "title": "IntegraLAB — software registrado no INPI",
    "short": "Coautor de uma plataforma da UFMA registrada no INPI.",
    "lead": "Sou coautor da IntegraLAB, plataforma que integra os laboratórios de pesquisa da UFMA, desenvolvida com professor e colegas do curso.",
    "challenge": "Os laboratórios de pesquisa da universidade precisavam de um lugar único para integrar suas informações.",
    "actions": [
      "Participei do desenvolvimento da plataforma como coautor.",
      "Trabalhei com Java, JavaScript e SQL.",
      "O programa foi registrado no INPI em nome da UFMA (processo BR512026006099-0)."
    ],
    "flow": [
      [
        "uil-flask",
        "Laboratórios",
        "Pesquisa da UFMA"
      ],
      [
        "uil-brackets-curly",
        "Plataforma",
        "Java, JavaScript e SQL"
      ],
      [
        "uil-link",
        "Integração",
        "Informação em um lugar"
      ],
      [
        "uil-award",
        "Registro INPI",
        "Em nome da UFMA"
      ]
    ],
    "stack": [
      "Java",
      "JavaScript",
      "SQL",
      "Registro INPI"
    ],
    "results": [
      [
        "uil-award",
        "Software registrado",
        "Certificado do INPI, processo BR512026006099-0"
      ],
      [
        "uil-users-alt",
        "Trabalho em equipe",
        "Desenvolvido com professor e colegas"
      ]
    ],
    "fallback": null
  }
];
