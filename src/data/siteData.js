export const siteData = {
  brand: {
    name: "CLARIVENS",
    subtitle: "IT SOLUTION",
    tagline: "Custom Web Applications & Operational Systems",
    mission: "We design and build custom web applications, internal tools, and automated data pipelines that eliminate manual spreadsheet dependencies and streamline organizational workflows.",
    descriptor: "CUSTOM SOFTWARE & DIGITAL SYSTEMS AGENCY",
    email: "contact@clarivens.com",
    phone: "+1 (800) 555-CLARI",
    location: "Global Technology Delivery",
  },
  navLinks: [
    { label: "Overview", href: "#hero" },
    { label: "Solutions", href: "#solutions" },
    { label: "Case Study", href: "#attendance-solution" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "CUSTOM SOFTWARE & WORKFLOW ENGINEERING",
    headlineLine1: "ENGINEERING TOOLS",
    headlineLine2: "THAT POWER OPERATIONS.",
    description: "Clarivens designs and builds tailored web applications, internal staff portals, and unified operational systems that replace spreadsheet friction with dependable, maintainable software.",
    ctaPrimary: "Explore Case Study",
    ctaSecondary: "Schedule Consultation",
  },
  theProblem: {
    eyebrow: "OPERATIONAL ANALYSIS",
    headline: "SOFTWARE SHOULD ELIMINATE REPETITION, NOT MULTIPLY IT.",
    description: "Growing teams struggle when critical operations rely on fragmented spreadsheets, manual handoffs, and unintegrated legacy systems.",
    frictionPoints: [
      {
        id: "manual-data",
        label: "Manual Entry",
        title: "Spreadsheet Fatigue & Disconnects",
        desc: "Team members spend hours re-entering data across multiple disconnected sheets and portals, increasing error rates.",
        delay: "Staff Bottleneck"
      },
      {
        id: "siloed-systems",
        label: "Data Silos",
        title: "Unintegrated Third-Party Tools",
        desc: "Critical operational records remain locked in separate applications with no single source of truth.",
        delay: "Siloed Records"
      },
      {
        id: "repeated-effort",
        label: "Redundancy",
        title: "Duplicated Verification Steps",
        desc: "Managers perform recurring manual audits and status checks that could be handled automatically.",
        delay: "Wasted Hours"
      },
      {
        id: "operational-friction",
        label: "Visibility",
        title: "Delayed Operational Insights",
        desc: "Leadership relies on weekly or monthly retrospective reports instead of live operational telemetry.",
        delay: "Lagging Metrics"
      }
    ],
    outcomes: [
      { id: "p1", title: "Unified Relational Data", status: "CENTRALIZED", detail: "Single source of truth with strict role-based access" },
      { id: "p2", title: "Automated Synchronization", status: "EVENT-DRIVEN", detail: "Background jobs replace repetitive manual copy-pasting" },
      { id: "p3", title: "Real-time Exception Alerts", status: "PROACTIVE", detail: "Instant notifications when records require review" },
      { id: "p4", title: "Intuitive Operator Portals", status: "STREAMLINED", detail: "Responsive interfaces designed for daily operational speed" }
    ]
  },
  approach: {
    eyebrow: "OUR DELIVERY MODEL",
    headline: "HOW WE DESIGN, BUILD, AND DEPLOY CUSTOM SOFTWARE.",
    pillars: [
      {
        step: "1",
        title: "Workflow Discovery",
        description: "We map operational dependencies directly with your operators.",
        details: "Before writing any code, we document your exact manual steps, identify edge cases, and define clear system requirements with your key stakeholders.",
        deliverable: "Architecture Spec & Data Model"
      },
      {
        step: "2",
        title: "Agile Engineering",
        description: "Iterative development with bi-weekly working demos.",
        details: "We build clean, test-driven applications using modern React, Node.js, and relational databases, shipping production-ready modules on a predictable schedule.",
        deliverable: "Production Code & CI/CD Pipeline"
      },
      {
        step: "3",
        title: "Deployment & Handover",
        description: "Smooth onboarding with complete documentation and training.",
        details: "We handle data migration, train administrative staff, and provide complete documentation so your internal team has complete confidence and control.",
        deliverable: "Deployment Docs & Team Enablement"
      }
    ]
  },
  prioritySectors: {
    eyebrow: "INDUSTRY EXPERTISE",
    headline: "TAILORED SOLUTIONS FOR OPERATIONALLY COMPLEX SECTORS.",
    sectors: [
      {
        id: "institutions",
        title: "Educational & Training Institutions",
        subtitle: "Custom portals that streamline student registration, staff tracking, and campus administration.",
        matrix: [
          { name: "ATTENDANCE", desc: "Automated timecard tracking, device synchronization & digital roll call rosters" },
          { name: "RECORDS", desc: "Centralized archival and instant staff/student directory search", active: true },
          { name: "APPROVALS", desc: "Digital submission and multi-tier approval workflows" },
          { name: "OPERATIONS", desc: "Campus logistics, room allocation & resource scheduling" },
          { name: "COMPLIANCE", desc: "Audit-ready reporting with exportable regulatory summaries", active: true },
          { name: "INTEGRATION", desc: "Bi-directional synchronization with existing billing or ERP tools" }
        ],
        tags: [
          "Staff & Student Records",
          "Digital Approvals",
          "Automated Attendance",
          "Compliance Reporting"
        ]
      },
      {
        id: "automobile",
        title: "Automotive & Service Centers",
        subtitle: "Digital dispatch and workflow management software for multi-bay service facilities.",
        flowStages: [
          { step: "1", label: "Intake", status: "Customer check-in & issue logging" },
          { step: "2", label: "Inspection", status: "Digital multi-point checklist" },
          { step: "3", label: "Bay Dispatch", status: "Technician & bay assignment", active: true },
          { step: "4", label: "Work in Progress", status: "Live parts & labor tracking" },
          { step: "5", label: "Handover", status: "Automated invoice & vehicle release" }
        ],
        tags: [
          "Bay Dispatching",
          "Digital Work Orders",
          "Parts & Labor Tracking",
          "Customer Status Updates"
        ]
      }
    ],
    beyondBanner: {
      eyebrow: "CROSS-INDUSTRY CAPABILITIES",
      text: "Our modular software architecture easily adapts to logistics, healthcare clinics, wholesale distributors, and professional services firms.",
      industries: ["Logistics & Warehousing", "Healthcare Clinics", "Wholesale Distribution", "Professional Services", "Commercial Facilities"]
    }
  },
  featuredSolution: {
    eyebrow: "PRODUCTION CASE STUDY",
    headline: "ENTERPRISE OPERATIONS & STAFF MANAGEMENT PORTAL",
    description: "Engineered for multi-facility operations managing 500+ on-site personnel with automated roll-call validation, supervisory approval pipelines, and exportable audit logs.",
    cta: "Review Similar Architecture",
    initialData: [
      { id: "ST-0142", name: "Adisa Mensah", role: "Site Coordinator", status: "PRESENT", time: "08:06 AM", department: "Operations" },
      { id: "ST-0143", name: "Karan Verma", role: "Systems Engineer", status: "PRESENT", time: "08:11 AM", department: "Infrastructure" },
      { id: "ST-0144", name: "Mira Solis", role: "Logistics Lead", status: "ABSENT", time: "—", department: "Supply Chain" },
      { id: "ST-0145", name: "Daniel Alves", role: "Training Specialist", status: "PRESENT", time: "08:14 AM", department: "Education" },
      { id: "ST-0146", name: "Elena Ramos", role: "Department Head", status: "PRESENT", time: "08:22 AM", department: "Executive" },
      { id: "ST-0147", name: "Tariq Khan", role: "Quality Inspector", status: "ABSENT", time: "—", department: "Compliance" }
    ]
  },
  workflowTransformation: {
    eyebrow: "PROCESS MODERNIZATION",
    headline: "REPLACING FRAGMENTED TOOLS WITH A UNIFIED APPLICATION.",
    centerTag: "SYSTEM CONSOLIDATION",
    comparison: [
      {
        step: "1",
        before: "Manual Spreadsheet Entries",
        beforeDetail: "Staff enter recurring updates into individual spreadsheets prone to formula errors.",
        after: "Structured Relational Database",
        afterDetail: "Validated input forms writing directly to a centralized, backed-up database."
      },
      {
        step: "2",
        before: "Isolated Department Files",
        beforeDetail: "Files scattered across local folders and cloud drives without version control.",
        after: "Centralized Document Repository",
        afterDetail: "Single repository with role-based permissions and complete audit histories."
      },
      {
        step: "3",
        before: "Manual Verification Checks",
        beforeDetail: "Supervisors spend hours cross-referencing records to identify missing entries.",
        after: "Automated Exception Rules",
        afterDetail: "System highlights anomalies automatically and flags records requiring manager action."
      },
      {
        step: "4",
        before: "Delayed Retrospective Reports",
        beforeDetail: "End-of-month reporting lag prevents timely interventions and cost adjustments.",
        after: "Live Operational Dashboards",
        afterDetail: "Real-time charts and exportable CSV/PDF summaries available on demand."
      }
    ]
  },
  services: {
    eyebrow: "TECHNICAL CAPABILITIES",
    headline: "END-TO-END SOFTWARE ENGINEERING SERVICES.",
    description: "From greenfield internal portals to API middleware, we architect dependable software tailored to how your business runs.",
    list: [
      {
        id: "custom-web-apps",
        title: "Custom Web Application Development",
        desc: "Full-stack web applications designed from the ground up to solve your unique operational bottlenecks with modern React, Node.js, and PostgreSQL.",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
        outcome: "Scalable enterprise web tools"
      },
      {
        id: "internal-tools",
        title: "Internal Tools & Operations Portals",
        desc: "Custom administrative dashboards and staff portals that centralize data intake, user access control, and daily task management.",
        tech: ["Role-Based Access", "REST/GraphQL APIs", "Data Grids", "Real-time Telemetry"],
        outcome: "Eliminates spreadsheet dependencies"
      },
      {
        id: "system-integration",
        title: "System & ERP Integrations",
        desc: "Bi-directional API connectors and data synchronization pipelines that bridge the gap between third-party SaaS tools and internal databases.",
        tech: ["Webhooks", "OAuth2", "Batch Sync", "Error Recovery Pipelines"],
        outcome: "Seamless automated data flow"
      },
      {
        id: "workflow-automation",
        title: "Workflow & Process Automation",
        desc: "Automated event-driven sequences that trigger notifications, validate forms, and update downstream systems without manual human intervention.",
        tech: ["Queue Workers", "Event Architecture", "Audit Logging", "Email/SMS Alerts"],
        outcome: "Accelerates daily cycle times"
      },
      {
        id: "ui-ux-design",
        title: "UI/UX & Design Systems",
        desc: "Ergonomic, accessible interface design built for high-throughput daily use by real staff, reducing onboarding time and operator errors.",
        tech: ["Figma Systems", "Component Libraries", "WCAG 2.1 AA", "Responsive UX"],
        outcome: "Fast, intuitive user adoption"
      },
      {
        id: "modernization",
        title: "Legacy System Modernization",
        desc: "Carefully refactoring brittle legacy applications or Excel-heavy workflows into modern, cloud-hosted web systems without operational disruption.",
        tech: ["Zero-Downtime Migration", "API Gateways", "Containerization", "Automated Testing"],
        outcome: "Durable, maintainable codebases"
      }
    ]
  },
  howWeWork: {
    eyebrow: "ENGAGEMENT LIFECYCLE",
    headline: "A STRUCTURED ROADMAP FROM DISCOVERY TO HANDOVER.",
    phases: [
      {
        step: "1",
        title: "Discovery & Architecture",
        summary: "We evaluate your current workflow, interview operators, and define data models and system architecture.",
        deliverables: ["Process mapping", "Architecture specification", "Database schema"]
      },
      {
        step: "2",
        title: "Milestone Sprints",
        summary: "We build modular features in two-week sprint cycles with continuous client staging access and demos.",
        deliverables: ["Working demo releases", "Bi-weekly sprint reviews", "Automated test suites"]
      },
      {
        step: "3",
        title: "Integration & Testing",
        summary: "We connect hardware, test edge cases, and run end-to-end user acceptance testing with your staff.",
        deliverables: ["Security review", "User acceptance testing", "Data migration scripts"]
      },
      {
        step: "4",
        title: "Production Handover",
        summary: "We deploy to production, train your team, and provide full source code ownership and documentation.",
        deliverables: ["100% IP transfer", "Deployment documentation", "Staff onboarding sessions"]
      }
    ]
  },
  about: {
    eyebrow: "ABOUT CLARIVENS",
    headline: "ENGINEERING SOFTWARE FOR COMPLEX OPERATIONS.",
    copy: "Clarivens is a custom software development partner for organizations with demanding operational workflows. We partner directly with operational directors and engineering leaders to replace friction with modern, reliable web applications.",
    stats: [
      { value: "100%", label: "Full IP & Source Ownership" },
      { value: "Direct", label: "Senior Engineer Access" },
      { value: "Custom", label: "Legacy Database Integrations" },
      { value: "2-Week", label: "Sprint Demo Cadence" }
    ],
    principles: [
      { title: "Production-Grade Architecture", text: "We engineer systems on proven enterprise foundations (React, Node.js, PostgreSQL) that your organization owns and operates without vendor lock-in." },
      { title: "Direct Operator Collaboration", text: "Great operational software is designed alongside the people who use it every single day, ensuring fast and frictionless adoption." },
      { title: "Complete Client Ownership", text: "You receive 100% of the source code, repository rights, and deployment documentation upon project completion." }
    ]
  },
  ctaSection: {
    eyebrow: "START A CONVERSATION",
    headline: "HAVE A WORKFLOW THAT COULD WORK BETTER?",
    description: "Tell us about your operational bottlenecks or custom software requirements. Our engineering team will review your scope and provide a practical implementation roadmap.",
    buttonText: "Schedule Architecture Consultation"
  }
};
