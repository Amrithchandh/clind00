export const siteData = {
  brand: {
    name: "CLARIVENS",
    subtitle: "IT SOLUTIONS LLP",
    tagline: "Custom Software Built for the Way Your Business Actually Works",
    mission: "Clarivens IT Solutions LLP builds easy-to-use web applications, internal dashboards, and digital tools that help businesses replace paperwork and save daily working hours.",
    descriptor: "CUSTOM SOFTWARE & PRACTICAL DIGITAL TOOLS",
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
    eyebrow: "SIMPLE SOFTWARE & PORTALS FOR BUSINESSES",
    headlineLine1: "CUSTOM SOFTWARE BUILT FOR THE WAY",
    headlineLine2: "YOUR BUSINESS ACTUALLY WORKS.",
    description: "Clarivens IT Solutions LLP builds easy-to-use web applications, internal dashboards, and digital tools that help businesses replace paperwork and save daily working hours.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "See Our Solutions",
    trustBadges: [
      { title: "No Complicated Tech Jargon", desc: "We speak plain English, not confusing code" },
      { title: "100% Owned by You", desc: "You own your software and data with zero vendor lock-in" },
      { title: "Direct Support From Day One", desc: "Speak directly with the team who built your tool" }
    ]
  },
  services: {
    eyebrow: "WHAT WE DO",
    headline: "SIMPLE DIGITAL TOOLS TO REPLACE MESSY PAPERWORK.",
    description: "We don't build bloated software full of buttons you don't need. We build 3 practical everyday solutions designed around how your team actually works.",
    list: [
      {
        id: "custom-web-apps",
        title: "Custom Web Applications",
        tagline: "Simple software tailored to your specific daily operations.",
        desc: "Instead of forcing your staff to learn complicated off-the-shelf software, we build clean web tools designed around how you already run your business—accessible securely on any computer, tablet, or phone.",
        benefits: [
          "Accessible anywhere on phone, tablet, or PC",
          "Clean layout with zero confusing clutter",
          "Secure logins so staff only see what they need",
          "Easy to learn in just 10 minutes"
        ],
        outcome: "Software that actually fits your workflow"
      },
      {
        id: "staff-client-portals",
        title: "Staff & Client Portals",
        tagline: "Clean digital dashboards for attendance, records, and team management.",
        desc: "Give your team a single private website to track staff attendance, maintain client records, assign jobs, and review requests without digging through messy file cabinets or shared drives.",
        benefits: [
          "One private link for all your daily records",
          "Quick attendance and shift tracking",
          "1-click PDF and Excel report downloads",
          "Search any client or record in seconds"
        ],
        outcome: "Replaces lost paperwork and Excel chaos"
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        tagline: "Connect your daily tasks so your team stops doing repetitive manual entry.",
        desc: "Stop wasting hours retyping client details or copy-pasting numbers between spreadsheets and billing apps. We connect your daily tasks so information moves automatically with zero mistakes.",
        benefits: [
          "Automatic SMS & WhatsApp status updates",
          "Instant invoice and receipt generation",
          "Stops double-entry between different tools",
          "Automated reminders for unpaid bills and deadlines"
        ],
        outcome: "Saves your team hours every single day"
      }
    ]
  },
  prioritySectors: {
    eyebrow: "WHO WE HELP",
    headline: "PRACTICAL SOLUTIONS FOR GROWING BUSINESSES.",
    description: "We help institutions, workshops, and business owners replace manual chaos with reliable, everyday software.",
    sectors: [
      {
        id: "schools-colleges",
        title: "Schools & Colleges",
        subtitle: "Student records, staff attendance, and simple administrative tools.",
        capabilities: [
          { title: "Student & Staff Records", desc: "A clean directory of student profiles, parent contacts, and staff details." },
          { title: "Daily Attendance Tracking", desc: "Fast roll-call and biometric device tracking with zero lost sheets." },
          { title: "Fee & Payment Records", desc: "Clear tracking of paid and pending fees with automated reminder notices." },
          { title: "Instant Reports", desc: "Generate printable student reports and attendance summaries in 1 click." }
        ],
        tags: ["Student Profiles", "Staff Attendance", "Fee Records", "Printable Reports"]
      },
      {
        id: "workshops-service-centers",
        title: "Workshops & Service Centers",
        subtitle: "Digital job cards, billing, and work-in-progress tracking.",
        capabilities: [
          { title: "Digital Job Cards", desc: "Service technicians record notes and inspection checklists right on tablets." },
          { title: "Work-in-Progress Board", desc: "A visual screen showing every job status, assigned technician, and pickup time." },
          { title: "Parts & Labor Tracking", desc: "Log parts used on each vehicle so invoices calculate automatically." },
          { title: "Automatic Customer SMS", desc: "Notify customers automatically when their vehicle or machine is ready for pickup." }
        ],
        tags: ["Digital Job Cards", "Live Status Board", "Parts & Billing", "Customer SMS Alerts"]
      },
      {
        id: "growing-businesses",
        title: "Growing Businesses",
        subtitle: "Custom internal tools to replace messy spreadsheets.",
        capabilities: [
          { title: "All-in-One Dashboard", desc: "See daily orders, customer inquiries, and staff tasks on one organized screen." },
          { title: "Centralized Customer Files", desc: "Never lose a client quote, history note, or contact number again." },
          { title: "Team Task Management", desc: "Assign work to your team and see what's done without constant follow-up calls." },
          { title: "1-Click PDF Invoicing", desc: "Create and email clean invoices and receipts without manual formatting." }
        ],
        tags: ["Daily Dashboard", "Customer History", "Team Tasks", "1-Click Invoicing"]
      }
    ]
  },
  caseStudies: [
    {
      id: "attendance-suite",
      client: "Educational Institution (500+ Staff)",
      industry: "Schools & Colleges",
      title: "Campus Staff Attendance & Operations Portal",
      summary: "We built a simple web portal connecting directly to campus attendance devices, replacing unorganized paper registers and manual spreadsheet calculations with instant verification and one-click monthly payroll summaries.",
      challenge: "The institution's administrative team spent 3 to 4 days at the end of every month collecting paper registers from four campus buildings, manually cross-checking attendance cards and resolving calculation disputes.",
      architecture: [
        "Automatic check-in syncing from on-site devices with zero manual punch-card entry",
        "Simple staff portal where department heads can review and approve leave requests in seconds",
        "Automated alerts that notify administrators only when an attendance item needs manual review",
        "One-click monthly summaries exportable to Excel or PDF for payroll processing"
      ],
      metrics: [
        { value: "90%", label: "Less Time on Monthly Attendance", detail: "Down from 4 days of manual work to under an hour" },
        { value: "500+", label: "Daily Active Staff Members", detail: "Tracked across multiple campus buildings" },
        { value: "100%", label: "Elimination of Lost Records", detail: "Every attendance record safely stored online" },
        { value: "Zero", label: "Payroll Disputes", detail: "Transparent attendance records agreed upon by staff" }
      ],
      techStack: ["Web Portal", "Attendance Sync", "Excel/PDF Export"],
      badge: "Real-World Project"
    },
    {
      id: "automobile-dispatch",
      client: "Multi-Bay Vehicle Service Center",
      industry: "Workshops & Service Centers",
      title: "Automotive Service & Bay Dispatch System",
      summary: "A practical tablet-friendly workshop system that replaces paper job cards and whiteboard schedules with real-time bay allocation, parts tracking, and automatic customer pickup notifications.",
      challenge: "Service advisors were constantly running between the reception desk and the garage floor to check vehicle repair status, leading to bay congestion, lost paper job cards, and frustrated customers waiting for phone updates.",
      architecture: [
        "Visual workshop board showing active bay status, assigned mechanics, and expected completion times",
        "Tablet-friendly checklist for mechanics to document inspection items quickly",
        "Live parts tracking linked directly to the parts room to prevent billing errors",
        "Automatic customer notifications sent via SMS when vehicle service milestones are completed"
      ],
      metrics: [
        { value: "35%", label: "Faster Vehicle Turnaround", detail: "Average service time reduced by over an hour per car" },
        { value: "100%", label: "Paperless Job Cards", detail: "Over 450 monthly paper work orders fully digitized" },
        { value: "Zero", label: "Lost Job Cards", detail: "Complete digital history from vehicle intake to handover" },
        { value: "18%", label: "Increase in Daily Capacity", detail: "Better bay scheduling opened up additional slots" }
      ],
      techStack: ["Tablet App", "Visual Board", "SMS Notifications"],
      badge: "Real-World Project"
    }
  ],
  process: {
    eyebrow: "HOW WE WORK",
    headline: "A SIMPLE 3-STEP COLLABORATION.",
    description: "Building software doesn't need to be intimidating. We work with you in 3 straightforward human steps.",
    phases: [
      {
        step: "01",
        title: "Tell Us What's Slowing You Down",
        summary: "We sit down for a friendly conversation to understand your current daily operations, identify where your team is losing time, and map out a simple solution.",
        deliverables: ["Clear understanding of your workflow", "Plain-English project scope", "No obligation or pushy sales pitch"]
      },
      {
        step: "02",
        title: "We Build a Working Preview",
        summary: "We create a real working prototype early. You and your team get to click around, test the screens, and make adjustments until it feels completely right.",
        deliverables: ["Real clickable working prototype", "Friendly progress updates", "Refinements based on your feedback"]
      },
      {
        step: "03",
        title: "Launch & Support",
        summary: "We set everything up, help import your existing spreadsheets or paperwork, show your team how to use it, and stay available whenever you need help.",
        deliverables: ["Smooth setup & data migration", "Hands-on staff training", "100% full software ownership"]
      }
    ]
  },
  about: {
    eyebrow: "ABOUT US",
    headline: "DEPENDABLE SOFTWARE WITHOUT THE HEADACHE.",
    copy: "Clarivens IT Solutions LLP is an independent IT consultancy based in Kerala, India. We design dependable, straightforward digital systems and custom web tools that help businesses replace paperwork and save daily working hours. Our mission is to deliver practical, easy-to-use software without unnecessary costs, subscription traps, or technical complexity.",
    stats: [
      { value: "100%", label: "Owned by You" },
      { value: "Direct", label: "Developer Access" },
      { value: "Simple", label: "No Tech Jargon" },
      { value: "Zero", label: "Monthly Per-Seat Fees" }
    ],
    principles: [
      {
        title: "No Complicated Tech Jargon",
        text: "We explain everything in clear, everyday terms so you always understand what is being built."
      },
      {
        title: "Direct Support From Day One",
        text: "You communicate directly with the developers building your software—no middlemen or confusing ticket queues."
      },
      {
        title: "100% Owned by You",
        text: "You own your software, code, and business data completely. No recurring monthly per-user fees or vendor lock-in."
      }
    ]
  },
  ctaSection: {
    eyebrow: "GET IN TOUCH",
    headline: "READY TO REPLACE PAPERWORK AND SPREADSHEETS?",
    description: "Tell us what's slowing your team down. We'll listen, share practical ideas, and provide a clear quote—free of charge and without any pressure.",
    buttonText: "Get in Touch"
  }
};
