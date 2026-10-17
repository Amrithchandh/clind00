export const siteData = {
  brand: {
    name: "CLARIVENS",
    subtitle: "IT SOLUTIONS",
    tagline: "Custom Web Applications & Operational Software",
    mission: "We design, engineer, and deploy custom web applications, internal operations portals, and automated data pipelines that eliminate manual bottlenecks and streamline organizational workflows.",
    descriptor: "CUSTOM SOFTWARE & DIGITAL SYSTEMS AGENCY",
    email: "info@clarivens.com",
    phone: "+91 88914 61561",
    phoneRaw: "+918891461561",
    location: "Kerala, India • Serving Clients Globally",
    linkedin: "https://www.linkedin.com/company/clarivens-it-solutions/",
    instagram: "https://www.instagram.com/clarivens.itsolutions",
  },
  navLinks: [
    { label: "Overview", href: "#hero" },
    { label: "Solutions", href: "#solutions" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "CUSTOM SOFTWARE & WORKFLOW ENGINEERING",
    headlineLine1: "ENGINEERING TOOLS",
    headlineLine2: "THAT POWER OPERATIONS.",
    description: "Clarivens IT Solutions designs and builds tailored web applications, internal staff portals, and unified operational systems that replace spreadsheet friction with dependable, maintainable software.",
    ctaPrimary: "Explore Case Studies",
    ctaSecondary: "Schedule Consultation",
  },
  prioritySectors: {
    eyebrow: "INDUSTRY SOLUTIONS",
    headline: "PURPOSE-BUILT FOR OPERATIONALLY INTENSIVE SECTORS.",
    description: "Generic off-the-shelf software forces businesses to distort their workflows. We engineer custom portals modeled precisely around your industry's operating procedures, hierarchy, and data models.",
    sectors: [
      {
        id: "institutions",
        title: "Educational & Training Institutions",
        subtitle: "Centralized portals that streamline student records, attendance tracking, and campus administration.",
        capabilities: [
          { title: "Attendance Automation", desc: "Digital roll-call rosters and biometric hardware synchronization" },
          { title: "Student & Staff Records", desc: "Centralized directory with role-based administrative permissions" },
          { title: "Approval Pipelines", desc: "Multi-tier leave requests, course approvals, and event scheduling" },
          { title: "Compliance & Audits", desc: "Automated attendance logs ready for regulatory submission" }
        ],
        tags: ["Staff & Student Directory", "Biometric Sync", "Digital Approvals", "Audit Reporting"]
      },
      {
        id: "automobile",
        title: "Automotive & Service Facilities",
        subtitle: "Digital dispatch and workflow management software for multi-bay service centers.",
        capabilities: [
          { title: "Intake & Digital Check-In", desc: "Rapid customer check-in with digital multi-point inspection checklists" },
          { title: "Bay Dispatching", desc: "Real-time technician assignment and bay occupancy scheduling" },
          { title: "Work in Progress Tracking", desc: "Live parts requisition, labor tracking, and technician notes" },
          { title: "Automated Invoicing", desc: "Seamless billing handover and instant SMS vehicle status updates" }
        ],
        tags: ["Bay Dispatching", "Digital Job Cards", "Parts & Labor Tracking", "Customer SMS Alerts"]
      },
      {
        id: "enterprise",
        title: "Logistics & Commercial Operations",
        subtitle: "Unified inventory tracking, order management, and ERP synchronization pipelines.",
        capabilities: [
          { title: "Warehouse Dispatch", desc: "Real-time stock movement, barcode scanning, and order packing logs" },
          { title: "Vendor Portals", desc: "Secure supplier invoice submission and purchase order reconciliation" },
          { title: "ERP Connectors", desc: "Automated two-way data sync between operational tools and finance systems" },
          { title: "Executive Dashboards", desc: "Live operational telemetry, exception alerts, and custom KPI reports" }
        ],
        tags: ["Warehouse Telemetry", "Vendor Reconciliation", "ERP Sync", "Executive KPIs"]
      }
    ]
  },
  caseStudies: [
    {
      id: "attendance-suite",
      client: "Enterprise Educational Campus",
      industry: "Education / Institutional",
      title: "Enterprise Workforce Tracking & Operations Management Suite",
      summary: "Custom-engineered for multi-facility operations managing 500+ on-site personnel across multiple campus buildings. Consolidates biometric terminal synchronization, roll-call verification, supervisory exception approvals, and compliance audit logs into a single authoritative web system.",
      challenge: "The campus relied on manual spreadsheets and disconnected hardware clocks across four separate facilities, causing hours of reconciliation lag every pay cycle and frequent reporting discrepancies.",
      architecture: [
        "Event-driven Node.js & PostgreSQL synchronization engine that ingests check-in events in real time",
        "Role-based staff portal with tiered permissions for Site Coordinators, Department Heads, and Compliance Officers",
        "Automated exception flagging when staff timecards require supervisory sign-offs",
        "One-click audit export generating regulatory compliance summaries in CSV and PDF"
      ],
      metrics: [
        { value: "85%", label: "Faster Payroll Reconciliation", detail: "Down from 3 days to under 2 hours per cycle" },
        { value: "500+", label: "Daily Active Personnel", detail: "Tracked seamlessly across 4 campus hubs" },
        { value: "100%", label: "Source Code Ownership", detail: "Full IP transfer with Dockerized deployment" },
        { value: "99.98%", label: "System Availability", detail: "Zero data loss across 12 synchronized terminals" }
      ],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      badge: "Production Deployment"
    },
    {
      id: "automobile-dispatch",
      client: "Multi-Bay Automotive Service Center",
      industry: "Automotive & Fleet",
      title: "Automotive Multi-Bay Service Dispatch & Workflow System",
      summary: "Comprehensive digital dispatch platform replacing paper job cards and manual whiteboards with real-time bay allocation, parts inventory clearance, and customer progress notifications.",
      challenge: "Service advisors spent significant time tracking down technicians on the shop floor to determine vehicle status, causing bay bottlenecks, customer delays, and untracked labor hours.",
      architecture: [
        "Live floorboard view displaying active bay assignments, technician availability, and estimated completion times",
        "Mobile-optimized technician checklist for rapid vehicle inspection and photo documentation",
        "Automated inventory reservation system linking work orders directly to parts room stock",
        "Customer notification trigger sending automated SMS updates at key milestones (intake, inspection, ready for pickup)"
      ],
      metrics: [
        { value: "35%", label: "Turnaround Acceleration", detail: "Average service cycle time reduced by over an hour" },
        { value: "100%", label: "Paperless Operations", detail: "Over 450 monthly paper work orders fully digitized" },
        { value: "18%", label: "Increase in Daily Throughput", detail: "Optimized bay scheduling unlocked additional daily slots" },
        { value: "Zero", label: "Lost Work Orders", detail: "Complete digital audit trail from intake to handover" }
      ],
      techStack: ["React", "Node.js / Express", "PostgreSQL", "WebSockets", "Tailwind CSS"],
      badge: "Production Deployment"
    }
  ],
  services: {
    eyebrow: "TECHNICAL CAPABILITIES",
    headline: "END-TO-END SOFTWARE ENGINEERING SERVICES.",
    description: "From custom internal portals to bi-directional API middleware, we architect dependable software tailored to how your business operates.",
    list: [
      {
        id: "custom-web-apps",
        title: "Custom Web Application Development",
        desc: "Full-stack web applications designed from the ground up to eliminate operational bottlenecks using modern React, Node.js, and PostgreSQL.",
        tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
        outcome: "Scalable enterprise web tools"
      },
      {
        id: "internal-tools",
        title: "Internal Tools & Operations Portals",
        desc: "Custom administrative dashboards and staff portals that centralize data intake, user access control, and daily task management.",
        tech: ["Role-Based Access", "REST/GraphQL APIs", "Data Grids", "Real-Time Telemetry"],
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
        desc: "Event-driven background processes that trigger notifications, validate forms, and update downstream systems without manual intervention.",
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
  process: {
    eyebrow: "OUR DELIVERY MODEL",
    headline: "A STRUCTURED ROADMAP FROM SCOPING TO HANDOVER.",
    description: "Predictable software delivery requires disciplined engineering. Every engagement follows a transparent 4-stage lifecycle with bi-weekly working demos and complete client IP ownership.",
    phases: [
      {
        step: "01",
        title: "Discovery & Technical Scoping",
        summary: "We interview operators, map existing manual workflows, and define clear system requirements, entity relations, and architecture specifications.",
        deliverables: ["Process mapping document", "Architecture specification", "Database schema blueprint"]
      },
      {
        step: "02",
        title: "Architecture & Interactive Prototype",
        summary: "We build responsive UI prototypes and finalize database models, giving your team early hands-on validation of critical workflows before writing core logic.",
        deliverables: ["Clickable Figma / React prototype", "API contracts", "Security & role model"]
      },
      {
        step: "03",
        title: "Milestone Sprints & CI/CD",
        summary: "We engineer features in structured two-week sprints, providing continuous client staging access, automated test suites, and transparent progress reviews.",
        deliverables: ["Bi-weekly working demos", "Staging environment access", "Automated test coverage"]
      },
      {
        step: "04",
        title: "Production Deployment & Handover",
        summary: "We manage production deployment, execute data migration, conduct staff enablement sessions, and transfer 100% of the repository and IP rights.",
        deliverables: ["Production deployment", "Complete source code & IP transfer", "Comprehensive documentation"]
      }
    ]
  },
  about: {
    eyebrow: "ABOUT CLARIVENS",
    headline: "ENGINEERING SOFTWARE FOR COMPLEX OPERATIONS.",
    copy: "Clarivens IT Solutions is a technology services firm dedicated to building dependable operational software for organizations with high-volume workflows. We partner directly with operational directors and engineering leaders to replace manual spreadsheets with modern, reliable web applications.",
    stats: [
      { value: "100%", label: "Client Code & IP Ownership" },
      { value: "Direct", label: "Senior Engineer Access" },
      { value: "2-Week", label: "Sprint Demo Cadence" },
      { value: "Zero", label: "Vendor Lock-in" }
    ],
    principles: [
      {
        title: "Production-Grade Architecture",
        text: "We engineer systems on proven enterprise foundations (React, Node.js, PostgreSQL, Docker) that your organization owns and operates with complete freedom."
      },
      {
        title: "Operator-Centered Design",
        text: "Great operational software is designed alongside the people who use it daily, ensuring intuitive adoption, rapid data entry, and minimal training overhead."
      },
      {
        title: "Complete Client Sovereignty",
        text: "You receive 100% of the source code, repository access, and deployment documentation upon project completion. No proprietary lock-ins or recurring license hostage fees."
      }
    ]
  },
  ctaSection: {
    eyebrow: "START A CONVERSATION",
    headline: "HAVE A WORKFLOW THAT COULD WORK BETTER?",
    description: "Tell us about your operational bottlenecks or custom software requirements. Our senior engineering team will review your scope and provide a practical implementation roadmap within 24 business hours.",
    buttonText: "Schedule Architecture Consultation"
  }
};
