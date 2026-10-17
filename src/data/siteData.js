export const siteData = {
  brand: {
    name: "CLARIVENS",
    subtitle: "IT SOLUTIONS LLP",
    tagline: "Custom Software That Simplifies Everyday Business Operations",
    mission: "We design and develop custom software, practical web applications, and digital systems that replace messy manual paperwork and unorganized spreadsheets for growing businesses and institutions.",
    descriptor: "CUSTOM SOFTWARE & PRACTICAL DIGITAL SYSTEMS",
    email: "info@clarivens.com",
    phone: "+91 88914 61561",
    phoneRaw: "+918891461561",
    location: "Kerala, India • Serving Clients Worldwide",
    linkedin: "https://www.linkedin.com/company/clarivens-it-solutions/",
    instagram: "https://www.instagram.com/clarivens.itsolutions",
  },
  navLinks: [
    { label: "Overview", href: "#hero" },
    { label: "What We Do", href: "#services" },
    { label: "Who We Help", href: "#solutions" },
    { label: "Our Work", href: "#case-studies" },
    { label: "How We Work", href: "#process" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "PRACTICAL BUSINESS SOFTWARE & AUTOMATION",
    headlineLine1: "SOFTWARE THAT FITS",
    headlineLine2: "HOW YOUR BUSINESS ACTUALLY RUNS.",
    description: "We build tailored web applications and internal portals that replace messy paperwork and confusing spreadsheets. From schools and automotive centers to logistics firms and local businesses, we give your team tools that are simple, fast, and easy to use.",
    ctaPrimary: "Discuss Your Project",
    ctaSecondary: "View Our Work",
    trustBadges: [
      { title: "Tailored to Your Workflow", desc: "Shaped around your team, not the other way around" },
      { title: "Direct Communication", desc: "Speak directly with the developers building your system" },
      { title: "100% Software Ownership", desc: "You own your software and data with zero vendor lock-in" }
    ]
  },
  services: {
    eyebrow: "WHAT WE DO",
    headline: "SIMPLE, RELIABLE SOFTWARE FOR EVERYDAY OPERATIONS.",
    description: "We focus on solving real operational problems with straightforward digital tools that your staff will actually enjoy using.",
    list: [
      {
        id: "custom-web-apps",
        title: "Custom Web Applications",
        tagline: "Software designed around how your team actually works.",
        desc: "Instead of forcing your staff to fit into rigid off-the-shelf software, we build custom web platforms tailored to your exact daily processes—accessible securely from any computer, tablet, or phone.",
        benefits: ["Accessible anywhere on desktop or mobile", "No unnecessary confusing features", "Secure user logins with role permissions", "Designed for fast, easy staff onboarding"],
        outcome: "A system built specifically for your business"
      },
      {
        id: "internal-tools",
        title: "Internal Dashboards & Staff Portals",
        tagline: "Clean, private portals for attendance, records, and daily tasks.",
        desc: "Bring all your internal operations into one organized screen. Track staff attendance, review pending supervisor approvals, look up customer records, and generate reports without searching through scattered desktop files.",
        benefits: ["Live staff attendance & roll-call rosters", "Multi-tier approval workflows for managers", "Instant search across all records and files", "One-click export to PDF and Excel spreadsheets"],
        outcome: "Eliminates spreadsheet confusion"
      },
      {
        id: "workflow-automation",
        title: "Workflow & Data Automation",
        tagline: "Connect your tools so you stop entering the same data twice.",
        desc: "Stop wasting hours retyping the same information between forms, spreadsheets, and billing tools. We set up automated background flows that sync records, send instant alerts, and update invoices automatically.",
        benefits: ["Automatic email & SMS notifications", "Eliminates double data entry mistakes", "Seamless connection with your existing tools", "Faster turnaround times for your customers"],
        outcome: "Saves hours of repetitive manual work"
      },
      {
        id: "modernization",
        title: "Modernizing Outdated Systems",
        tagline: "Upgrading old software without breaking your daily operations.",
        desc: "If your operations still rely on fragile Excel sheets, paper registers, or aging desktop software, we safely migrate your records into modern, secure web systems with zero downtime or disruption to your customers.",
        benefits: ["Safe, complete data migration", "Hands-on staff training and guidance", "Automatic cloud backups and security", "Zero disruption to your daily operations"],
        outcome: "Reliable, modern tools you can depend on"
      }
    ]
  },
  prioritySectors: {
    eyebrow: "WHO WE HELP",
    headline: "PRACTICAL SOLUTIONS FOR GROWING ORGANIZATIONS.",
    description: "Whether you run a school, a busy service center, a warehouse, or a growing business, we design tools that match your exact operating routines.",
    sectors: [
      {
        id: "institutions",
        title: "Educational & Training Institutions",
        subtitle: "Centralized campus portals for student records, staff attendance, and administration.",
        capabilities: [
          { title: "Staff & Student Attendance", desc: "Digital roll-call rosters and integration with biometric attendance devices" },
          { title: "Centralized Records", desc: "Searchable directory for student profiles, academic history, and contact details" },
          { title: "Approvals & Requests", desc: "Simple digital forms for leave applications, permission slips, and event scheduling" },
          { title: "Reports & Compliance", desc: "Instant summaries ready for management meetings and regulatory audits" }
        ],
        tags: ["Student Records", "Staff Attendance", "Leave Approvals", "Compliance Reports"]
      },
      {
        id: "automobile",
        title: "Automotive & Service Centers",
        subtitle: "Digital workshop management for job cards, service tracking, and customer billing.",
        capabilities: [
          { title: "Customer Check-in & Intake", desc: "Quick digital vehicle intake with multi-point inspection checklists on tablets" },
          { title: "Bay & Mechanic Dispatch", desc: "Clear visual board showing which technician is working on which car" },
          { title: "Parts & Labor Tracking", desc: "Live tracking of parts used and labor time spent on every repair job" },
          { title: "Automated Customer Updates", desc: "Send automated SMS or WhatsApp updates to vehicle owners when cars are ready" }
        ],
        tags: ["Digital Job Cards", "Bay Dispatching", "Parts Tracking", "Customer SMS Alerts"]
      },
      {
        id: "logistics",
        title: "Logistics & Warehousing",
        subtitle: "Clear inventory tracking, dispatch management, and supplier coordination.",
        capabilities: [
          { title: "Stock & Dispatch Tracking", desc: "Track incoming and outgoing items in real time with simple barcode logging" },
          { title: "Vendor & Supplier Portals", desc: "Simple online submission for supplier invoices and purchase orders" },
          { title: "Order Packing Logs", desc: "Step-by-step digital packing verification to eliminate shipping errors" },
          { title: "Low-Stock Alerts", desc: "Automatic alerts so your purchasing team reorders before items run out" }
        ],
        tags: ["Inventory Tracking", "Dispatch Orders", "Supplier Invoices", "Low-Stock Alerts"]
      },
      {
        id: "enterprise",
        title: "Small & Medium Businesses",
        subtitle: "Centralized operational tools that bring order to your daily business.",
        capabilities: [
          { title: "Custom Admin Dashboards", desc: "One clean dashboard showing daily sales, customer orders, and staff activity" },
          { title: "Role-Based Staff Access", desc: "Give employees access to exactly what they need while keeping finances private" },
          { title: "Automated Follow-ups", desc: "Reminders for pending customer invoices, quotes, and contract renewals" },
          { title: "One-Click PDF Reports", desc: "Generate clean, branded invoices, receipts, and monthly business summaries" }
        ],
        tags: ["Admin Dashboards", "Staff Permissions", "Invoice Reminders", "PDF Reports"]
      }
    ]
  },
  caseStudies: [
    {
      id: "attendance-suite",
      client: "Educational Institution (500+ Staff)",
      industry: "Education / Campus Operations",
      title: "Campus Staff Attendance & Operations Portal",
      summary: "We built a centralized web portal connecting directly to campus attendance devices, replacing unorganized paper registers and manual spreadsheet calculations with instant verification and one-click monthly payroll summaries.",
      challenge: "The institution's administrative team spent 3 to 4 days at the end of every month collecting paper registers from four separate campus buildings, manually cross-checking attendance cards and resolving calculation disputes.",
      architecture: [
        "Automatic synchronization with on-site attendance devices for instant check-in verification",
        "Role-based staff portal where department heads can review and approve leave requests in seconds",
        "Automated exception flagging that alerts supervisors only when attendance needs manual review",
        "One-click monthly summaries exportable to Excel or PDF for immediate payroll processing"
      ],
      metrics: [
        { value: "90%", label: "Less Time on Monthly Attendance", detail: "Down from 4 days of manual work to under an hour" },
        { value: "500+", label: "Daily Active Staff Members", detail: "Tracked across multiple campus buildings" },
        { value: "100%", label: "Elimination of Lost Records", detail: "Every attendance punch safely archived digitally" },
        { value: "Zero", label: "Payroll Disputes", detail: "Transparent attendance records agreed upon by staff" }
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      badge: "Real-World Project"
    },
    {
      id: "automobile-dispatch",
      client: "Multi-Bay Vehicle Service Center",
      industry: "Automotive & Garage Management",
      title: "Automotive Multi-Bay Service Dispatch System",
      summary: "A practical tablet-friendly workshop system that replaces paper job cards and whiteboard schedules with real-time bay allocation, parts tracking, and automatic customer pickup notifications.",
      challenge: "Service advisors were constantly running between the reception desk and the garage floor to check vehicle repair status, leading to bay congestion, lost paper job cards, and frustrated customers waiting for phone updates.",
      architecture: [
        "Visual workshop board showing active bay status, assigned mechanics, and expected completion times",
        "Tablet-friendly checklist for mechanics to document multi-point inspection items quickly",
        "Live parts tracking linked directly to the parts inventory room",
        "Automatic customer notifications sent via SMS when vehicle service milestones are completed"
      ],
      metrics: [
        { value: "35%", label: "Faster Vehicle Turnaround", detail: "Average service time reduced by over an hour per car" },
        { value: "100%", label: "Paperless Job Cards", detail: "Over 450 monthly paper work orders fully digitized" },
        { value: "Zero", label: "Lost Job Cards", detail: "Complete digital history from vehicle intake to handover" },
        { value: "18%", label: "Increase in Daily Capacity", detail: "Better bay scheduling opened up additional slots" }
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      badge: "Real-World Project"
    }
  ],
  process: {
    eyebrow: "HOW WE WORK",
    headline: "A SIMPLE, TRANSPARENT 3-STEP PROCESS.",
    description: "We believe building software shouldn't be confusing or stressful. We keep you informed at every step with clear milestones, working demos, and plain-English communication.",
    phases: [
      {
        step: "01",
        title: "Listen & Plan",
        summary: "We sit down with you to understand your current daily operations, identify where your team is losing time, and map out a practical, easy-to-use software solution.",
        deliverables: ["Understanding your exact workflow", "Clear, transparent project scope", "Simple visual layout plan"]
      },
      {
        step: "02",
        title: "Build & Review",
        summary: "We build your software in clear stages and share working previews early. You get to click around and test the system so we can adjust things based on your team's feedback.",
        deliverables: ["Working prototype to test", "Regular progress updates", "Adjustments based on your feedback"]
      },
      {
        step: "03",
        title: "Launch & Support",
        summary: "We handle the full setup, help migrate your existing spreadsheets or paperwork, train your staff until everyone feels confident, and provide full ownership of your software.",
        deliverables: ["Smooth system launch", "Hands-on staff training", "100% full software ownership"]
      }
    ]
  },
  about: {
    eyebrow: "ABOUT CLARIVENS IT SOLUTIONS LLP",
    headline: "PRACTICAL TECHNOLOGY BUILT BY PEOPLE WHO CARE.",
    copy: "Clarivens IT Solutions LLP is an independent software development firm based in Kerala, India, serving growing businesses and institutions worldwide. We partner directly with business owners, school administrators, and operations managers who are tired of dealing with rigid off-the-shelf software or confusing spreadsheets that don't fit their needs. We don't speak in heavy technical jargon or push bloated subscriptions—instead, we listen carefully, build clean tools, and deliver reliable software that saves your team hours of frustration every single week.",
    stats: [
      { value: "100%", label: "Software Ownership" },
      { value: "Direct", label: "Access to Developers" },
      { value: "Simple", label: "Plain-English Updates" },
      { value: "Zero", label: "Ongoing Vendor Lock-in" }
    ],
    principles: [
      {
        title: "Tailored to Your Real Workflow",
        text: "We design every screen and feature to match how your team actually works in the real world, making daily data entry fast and natural."
      },
      {
        title: "Direct Communication, No Middlemen",
        text: "You speak directly with the engineers building your software. No confusing technical talk, no endless ticket queues—just quick, helpful answers."
      },
      {
        title: "Full Ownership of Your Software",
        text: "You own 100% of your software, data, and code. No recurring per-user fees, no hostage licenses, and no vendor lock-in."
      }
    ]
  },
  ctaSection: {
    eyebrow: "START A CONVERSATION",
    headline: "HAVE A WORKFLOW THAT COULD WORK BETTER?",
    description: "Tell us about what's slowing your team down or what tool you would like to build. We'll listen, share practical ideas, and provide a clear estimate—free of charge and without any pressure.",
    buttonText: "Discuss Your Project"
  }
};
