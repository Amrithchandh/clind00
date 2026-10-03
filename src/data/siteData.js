export const siteData = {
  brand: {
    name: "CLARIVENS",
    subtitle: "IT SOLUTION",
    tagline: "Technology for simpler work",
    mission: "Practical technology. Simpler workflows. Easier operations.",
    descriptor: "TECHNOLOGY IMPLEMENTATION COMPANY",
    email: "contact@clarivens.com",
    phone: "+1 (800) 555-CLARI",
    location: "Global Technology Delivery",
  },
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#attendance-solution" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "TECHNOLOGY FOR SIMPLER WORK",
    headlineLine1: "MAKE WORK EASIER",
    headlineLine2: "WITH TECHNOLOGY.",
    description: "Clarivens IT Solution helps organizations simplify workflows, implement practical technology, and build better ways of working.",
    ctaPrimary: "Explore Solutions",
    ctaSecondary: "Talk to Us",
  },
  theProblem: {
    eyebrow: "THE PROBLEM",
    headline: "TECHNOLOGY SHOULD SIMPLIFY WORK, NOT ADD COMPLEXITY.",
    description: "Organizations often deal with manual processes, disconnected information, repetitive tasks and inefficient workflows.",
    frictionPoints: [
      {
        id: "manual-work",
        label: "INPUT PROCESS",
        title: "Manual work",
        desc: "Repetitive manual data entry, human error loops, and spreadsheet fatigue.",
        delay: "High Latency"
      },
      {
        id: "disconnected-info",
        label: "DATA SILOS",
        title: "Disconnected information",
        desc: "Siloed applications that do not communicate, causing data fragmentation.",
        delay: "Information Gap"
      },
      {
        id: "repeated-effort",
        label: "REDUNDANCY",
        title: "Repeated effort",
        desc: "Redundant status checks, copy-pasting between systems, duplicated validation.",
        delay: "Time Drain"
      },
      {
        id: "operational-friction",
        label: "BOTTLENECK",
        title: "Operational friction",
        desc: "Slow decisions caused by lack of real-time visibility and paper-based protocols.",
        delay: "Process Stalled"
      }
    ],
    outcomes: [
      { id: "p1", title: "Connected process", status: "READY", detail: "End-to-end integration across teams" },
      { id: "p2", title: "Clear information", status: "SYNCED", detail: "Single source of verified operational truth" },
      { id: "p3", title: "Fewer unnecessary steps", status: "OPTIMIZED", detail: "Removal of redundant approvals and bottlenecks" },
      { id: "p4", title: "Easier operation", status: "ACTIVE", detail: "Intuitive interfaces for everyday staff" }
    ]
  },
  approach: {
    eyebrow: "THE CLARIVENS APPROACH",
    headline: "FROM OPERATIONAL CHALLENGES TO PRACTICAL TECHNOLOGY.",
    pillars: [
      {
        step: "1",
        title: "Understand",
        description: "We examine the operation, not just the brief.",
        details: "Before recommending software, we analyze how your teams actually work, where time is lost, and what bottlenecks slow down daily progress.",
        deliverable: "Operational Context Mapping"
      },
      {
        step: "2",
        title: "Implement",
        description: "We apply the technology that the work actually needs.",
        details: "We build pragmatic, modular software tailored to your specific infrastructure, avoiding bloated enterprise features that hinder adoption.",
        deliverable: "Targeted Software Deployment"
      },
      {
        step: "3",
        title: "Simplify",
        description: "We remove friction and create a clearer way forward.",
        details: "Workflows become intuitive, feedback loops become instant, and your staff spend time advancing goals rather than navigating complex tooling.",
        deliverable: "Streamlined Operational Continuity"
      }
    ]
  },
  prioritySectors: {
    eyebrow: "PRIORITY SECTORS",
    headline: "TECHNOLOGY BUILT AROUND THE WAY YOUR INDUSTRY WORKS.",
    sectors: [
      {
        id: "institutions",
        title: "INSTITUTIONS",
        subtitle: "Digital solutions that simplify institutional operations.",
        matrix: [
          { name: "ATTENDANCE", desc: "Automated biometric, RFID & digital roll call tracking" },
          { name: "ADMINISTRATION", desc: "Unified staff records, department workflows & approvals", active: true },
          { name: "RECORDS", desc: "Centralized archival and instant student/faculty search" },
          { name: "OPERATIONS", desc: "Campus logistics, asset allocation & resource booking" },
          { name: "SYSTEMS", desc: "Secure cloud infrastructure & ERP synchronization", active: true },
          { name: "LEARNING", desc: "Integrated curriculum tracking & student progress logs" }
        ],
        tags: [
          "Attendance management",
          "Administrative workflows",
          "Institutional systems",
          "Education technology"
        ]
      },
      {
        id: "automobile",
        title: "AUTOMOBILE",
        subtitle: "Technology that supports efficient automotive operations.",
        code: "CV / 024",
        flowStages: [
          { step: "1", label: "Request", status: "Logged via mobile/kiosk" },
          { step: "2", label: "Inspection", status: "Digital checklist verification" },
          { step: "3", label: "Assignment", status: "Bay & technician dispatch", active: true },
          { step: "4", label: "Service", status: "Live telemetry & parts tracking" },
          { step: "5", label: "Complete", status: "Automated billing & customer handover" }
        ],
        tags: [
          "Workflow management",
          "Service operations",
          "Operational systems",
          "Process improvement"
        ]
      }
    ],
    beyondBanner: {
      eyebrow: "BEYOND PRIORITY SECTORS",
      text: "We also work with organizations across other industries where technology can simplify processes and solve operational challenges.",
      industries: ["Healthcare", "Supply Chain & Logistics", "Manufacturing", "Professional Services", "Financial Services"]
    }
  },
  featuredSolution: {
    eyebrow: "FEATURED SOLUTION",
    headline: "ATTENDANCE, MADE SIMPLER.",
    description: "A practical digital approach to managing attendance and reducing repetitive administrative work.",
    cta: "Explore Solution",
    initialData: [
      { id: "ST-0142", name: "Adisa M.", role: "Staff", status: "PRESENT", time: "08:06", department: "Admin" },
      { id: "ST-0143", name: "Karan V.", role: "Engineering", status: "PRESENT", time: "08:11", department: "Systems" },
      { id: "ST-0144", name: "Mira S.", role: "Operations", status: "ABSENT", time: "—", department: "Logistics" },
      { id: "ST-0145", name: "Daniel A.", role: "Research", status: "PRESENT", time: "08:14", department: "Education" },
      { id: "ST-0146", name: "Elena R.", role: "Management", status: "PRESENT", time: "08:22", department: "Executive" },
      { id: "ST-0147", name: "Tariq K.", role: "Faculty", status: "ABSENT", time: "—", department: "Academic" }
    ]
  },
  workflowTransformation: {
    eyebrow: "WORKFLOW TRANSFORMATION",
    headline: "TECHNOLOGY THAT REMOVES UNNECESSARY STEPS.",
    centerTag: "4 STEPS → ONE FLOW",
    comparison: [
      {
        step: "1",
        before: "Manual entry",
        beforeDetail: "Paper logs & repeated spreadsheet input taking hours weekly",
        after: "Digital workflow",
        afterDetail: "Instant capture via modern web/mobile interfaces"
      },
      {
        step: "2",
        before: "Separate records",
        beforeDetail: "Siloed documents scattered across desks and desktop folders",
        after: "Centralized information",
        afterDetail: "Single synchronized cloud repository with role-based access"
      },
      {
        step: "3",
        before: "Repeated checking",
        beforeDetail: "Manual reconciliations to detect missed updates and duplicates",
        after: "Simpler management",
        afterDetail: "Automated validation rules and instant exception alerts"
      },
      {
        step: "4",
        before: "Delayed information",
        beforeDetail: "End-of-month reporting lag preventing timely operational decisions",
        after: "Faster visibility",
        afterDetail: "Real-time telemetry and executive dashboards on demand"
      }
    ]
  },
  services: {
    eyebrow: "SERVICES",
    headline: "BEYOND INDIVIDUAL SOLUTIONS.",
    description: "Technology tailored to the way organizations actually work.",
    list: [
      {
        id: "software-dev",
        title: "Software Development",
        desc: "Custom applications built to resolve specific operational bottlenecks with clean, maintainable architecture.",
        tech: ["React", "Node.js", "Python", "REST/GraphQL", "PostgreSQL"],
        outcome: "Scalable enterprise tools"
      },
      {
        id: "web-solutions",
        title: "Web Solutions",
        desc: "High-performance responsive web portals and management interfaces designed for effortless day-to-day operation.",
        tech: ["Modern React", "Tailwind CSS", "Vite", "Cloudflare", "API Gateway"],
        outcome: "Sub-second loading times"
      },
      {
        id: "ui-ux",
        title: "UI/UX Design",
        desc: "Clean, human-centered interfaces that eliminate operator confusion, reduce training time, and encourage adoption.",
        tech: ["Design Systems", "Figma", "User Journey Audits", "Accessibility WCAG"],
        outcome: "Minimal cognitive load"
      },
      {
        id: "digital-workflows",
        title: "Digital Workflow Solutions",
        desc: "End-to-end digitization of paper forms, manual approvals, and recurring administrative sequences.",
        tech: ["Event-Driven Pipelines", "Automated Validation", "Webhooks", "Audit Logs"],
        outcome: "90% faster turnaround"
      },
      {
        id: "automation",
        title: "Automation",
        desc: "Elimination of repetitive chores through smart batch processing, scheduled jobs, and system sync hooks.",
        tech: ["Task Orchestration", "Data Sync", "Automated Triggers", "Error Recovery"],
        outcome: "Zero duplicate entry"
      },
      {
        id: "implementation",
        title: "Technology Implementation",
        desc: "Hands-on rollout, data migration, and infrastructure setup to ensure smooth transition without operational downtime.",
        tech: ["Cloud Deployment", "Legacy Migration", "Team Onboarding", "SLA Monitoring"],
        outcome: "Zero downtime rollout"
      },
      {
        id: "custom-solutions",
        title: "Customized Technology Solutions",
        desc: "Specialized adaptations for unique institutional or industrial constraints where off-the-shelf software falls short.",
        tech: ["Proprietary Integrations", "IoT/Hardware Bridges", "Custom Reporting"],
        outcome: "Exact operational fit"
      }
    ]
  },
  howWeWork: {
    eyebrow: "HOW WE WORK",
    headline: "A CLEAR, PRACTICAL ENGAGEMENT FROM CONTEXT TO CONTINUITY.",
    phases: [
      {
        step: "1",
        title: "Understand",
        summary: "Learn the context, operation and points of friction.",
        deliverables: ["Process mapping", "Operator interviews", "Friction point audit"]
      },
      {
        step: "2",
        title: "Define",
        summary: "Shape a practical, relevant technology response.",
        deliverables: ["Architecture specification", "Interface wireframes", "Milestone timeline"]
      },
      {
        step: "3",
        title: "Develop",
        summary: "Build and implement with clarity and discipline.",
        deliverables: ["Modular code sprints", "Continuous client demos", "Rigorous QA testing"]
      },
      {
        step: "4",
        title: "Support",
        summary: "Maintain continuity as the organization moves forward.",
        deliverables: ["Team enablement", "SLA maintenance", "Iterative optimizations"]
      }
    ]
  },
  about: {
    eyebrow: "ABOUT CLARIVENS",
    headline: "TECHNOLOGY WITH A PRACTICAL PURPOSE.",
    copy: "Clarivens IT Solution works at the intersection of technology and everyday operations. We understand organizational challenges, implement practical digital solutions, and simplify the workflows behind them.",
    stats: [
      { value: "99.8%", label: "System Availability" },
      { value: "65%", label: "Average Manual Time Saved" },
      { value: "48h", label: "Initial Architecture Sprint" },
      { value: "100%", label: "Dedicated Operational Fit" }
    ],
    principles: [
      { title: "Pragmatism Over Novelty", text: "We do not push unnecessary trends; we deploy what solves the operational challenge reliably." },
      { title: "Deep Operational Context", text: "We understand that software only succeeds if the human team on the ground loves using it." },
      { title: "Built for Longevity", text: "Clean, documented, maintainable codebases that your company retains full sovereignty over." }
    ]
  },
  ctaSection: {
    eyebrow: "START A CONVERSATION",
    headline: "HAVE A WORKFLOW THAT COULD WORK BETTER?",
    description: "Tell us what you are trying to simplify. We'll explore how technology can help.",
    buttonText: "START A CONVERSATION"
  }
};
