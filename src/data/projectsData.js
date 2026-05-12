/**
 * Centralized projects data source.
 * Each project follows a reusable case-study schema so new projects can be
 * added without touching any UI code.
 *
 * Schema:
 * {
 *   id: number,
 *   title: string,
 *   tagline: string,           // short one-liner under the title
 *   description: string,       // card description
 *   image: string,             // hero / card cover
 *   gallery: string[],         // multiple screenshots for modal carousel
 *   category: string,
 *   featured: boolean,
 *   year: string,
 *   role: string,
 *   duration: string,
 *   technologies: string[],
 *   overview: string,          // long-form summary in modal
 *   problem: string,           // problem statement
 *   challenges: string[],      // bullet list
 *   solution: string,          // architecture / approach paragraph
 *   features: string[],        // bullet list
 *   results: { label: string, value: string }[],
 *   links: { demo?: string, github?: string }
 * }
 */

const projectsData = [
  {
    id: 1,
    title: 'Bluu Health',
    tagline: 'HIPAA-Compliant EHR Platform with AI Clinical Tools',
    description:
      'A secure healthcare platform for managing appointments, billing, and claims — supercharged with AI summaries of patient history and past visits.',
    image: '/images/bluuhealth.png',
    gallery: [
      '/images/bluu/bluu-2.png',
      '/images/bluu/bluu-3.png',
      '/images/bluu/bluu-4.png',
    ],
    category: 'Healthcare',
    featured: true,
    year: '2024',
    role: 'Senior Full-Stack Engineer',
    duration: '12+ months',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'GCP', 'Tailwind', 'AI / LLMs'],
    overview:
      'Bluu Health is a HIPAA-compliant Electronic Health Record (EHR) platform that streamlines clinical operations for private practices and small clinics. It centralizes scheduling, billing, claims, and patient charts in a single, modern interface, and layers AI on top to dramatically reduce administrative overhead for practitioners.',
    problem:
      'Independent practitioners were spending hours each day stitching together legacy EHR tools, billing software, and manual note-taking. The lack of an integrated, modern, HIPAA-compliant solution led to clinician burnout, billing errors, and slow claim reimbursements.',
    challenges: [
      'Designing a HIPAA-compliant architecture covering data encryption at rest and in transit, audit logging, and strict role-based access control.',
      'Generating accurate clinical summaries with LLMs while preventing hallucinations on safety-critical patient data.',
      'Integrating with multiple third-party clearinghouses for real-time eligibility checks and claim submissions.',
      'Maintaining sub-second UX responsiveness on large patient timelines (years of visit history).',
    ],
    solution:
      'Built on a modular React front-end backed by Node.js services on GCP. PHI is encrypted with envelope encryption via KMS and isolated in tenant-scoped MongoDB collections. AI summaries are produced via a guarded retrieval pipeline that grounds outputs in the patient record and flags low-confidence segments for clinician review before saving back to the chart.',
    features: [
      'Smart scheduling with conflict detection and automated patient reminders',
      'AI-generated visit summaries grounded in the patient record',
      'Integrated billing, superbills, and electronic claim submission',
      'Role-based access control with full audit logging for HIPAA',
      'Realtime eligibility verification with major insurance clearinghouses',
      'Document upload, e-signatures, and secure messaging',
    ],
    results: [
      { label: 'Reduction in charting time', value: '~60%' },
      { label: 'Faster claim turnaround', value: '3x' },
      { label: 'Active practices onboarded', value: '50+' },
    ],
    links: {
      demo: 'https://bluuhealth.com/',
      github: null,
    },
  },
  {
    id: 2,
    title: 'Customized ERP',
    tagline: 'End-to-End ERP for a Textile Manufacturer',
    description:
      'An ERP that automates stock management, invoicing, and accounting with advanced double-entry bookkeeping and a rich reporting suite.',
    image: '/images/pos.png',
    gallery: ['/images/mj/mj-1.png', '/images/mj/mj-2.png', '/images/mj/mj-3.png', '/images/mj/mj-4.png'],
    category: 'Business / ERP',
    featured: false,
    year: '2023',
    role: 'Lead Engineer',
    duration: '9 months',
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'MySQL', 'Redis', 'Bootstrap'],
    overview:
      'A fully custom ERP for a textile manufacturer that replaced an aging mix of spreadsheets and disconnected tools. The platform handles the full operational cycle — from raw material intake to invoicing — and gives finance a real-time, double-entry view of the business.',
    problem:
      'Operations were fragmented across Excel sheets and standalone POS tools, causing inventory drift, delayed invoices, and unreliable financial reports. Leadership had no real-time view into margins or stock health.',
    challenges: [
      'Modeling complex textile inventory (bolts, lots, conversions, batches) with full traceability.',
      'Implementing a strict double-entry accounting engine usable by non-accountant staff.',
      'Handling high-volume invoicing with print-ready templates and tax compliance.',
      'Rolling out to a non-technical workforce without disrupting daily operations.',
    ],
    solution:
      'Nuxt.js SSR front-end with a modular Laravel API backed by MySQL and Redis caching for hot lookups. Built a transaction-safe accounting core with reversible journal entries, period locking, and a reporting layer that powers P&L, trial balance, stock valuation, and customer aging.',
    features: [
      'Multi-warehouse stock with batch and lot tracking',
      'Double-entry accounting with period close and audit trail',
      'Customer & supplier ledgers with aging reports',
      'POS-style invoicing with print and tax templates',
      'Role-based permissions across departments',
      'Granular reporting: P&L, trial balance, stock valuation',
    ],
    results: [
      { label: 'Manual data entry reduced', value: '~70%' },
      { label: 'Monthly close time', value: 'Days → hours' },
      { label: 'Inventory accuracy', value: '99%+' },
    ],
    links: {
      demo: 'https://software.mjfabric.com/',
      github: null,
    },
  },
  {
    id: 3,
    title: 'Idenfo Direct',
    tagline: 'AML & KYC Onboarding for Regulated Industries',
    description:
      'A FinTech platform enabling seamless onboarding while fighting financial crime through automated AML and KYC services.',
    image: '/images/idenfodirect.png',
    gallery: ['/images/idenfodirect.png', '/images/idenfo.png', '/images/idenfodirect.png'],
    category: 'FinTech',
    featured: true,
    year: '2023',
    role: 'Senior Full-Stack Engineer',
    duration: '18+ months',
    technologies: ['Python', 'Nest.js', 'Vue.js', 'MongoDB', 'AWS', 'Kafka', 'Redis'],
    overview:
      'Idenfo Direct is a SaaS compliance suite that lets banks, exchanges, and fintechs onboard customers in minutes while meeting strict AML and KYC requirements across multiple jurisdictions.',
    problem:
      'Compliance teams were juggling manual ID checks, sanctions screening, and risk scoring across multiple disconnected vendors. The result: slow onboarding, high drop-off, and inconsistent audit trails.',
    challenges: [
      'Orchestrating multiple external vendors (ID verification, biometrics, sanctions lists) behind a single, resilient API.',
      'Designing a configurable, jurisdiction-aware risk scoring engine.',
      'Processing high-volume event streams in real time without losing audit fidelity.',
      'Building a UI that compliance officers, business teams, and end-customers all enjoy using.',
    ],
    solution:
      'A Nest.js gateway exposes a unified onboarding API while Python workers consume Kafka topics to run risk scoring, sanctions screening, and document checks. MongoDB stores case files; Redis caches hot rule sets. The Vue.js admin and customer flows are fully white-labelable per tenant.',
    features: [
      'Configurable KYC and AML workflows per jurisdiction',
      'Real-time sanctions, PEP, and adverse-media screening',
      'Document and biometric verification via vendor orchestration',
      'Risk scoring engine with full audit trail',
      'Multi-tenant white-label customer portal',
      'Webhooks and APIs for downstream integrations',
    ],
    results: [
      { label: 'Avg. onboarding time', value: '~3 mins' },
      { label: 'Compliance ops effort', value: '−65%' },
      { label: 'Enterprise clients', value: '20+' },
    ],
    links: {
      demo: 'https://www.idenfodirect.com/',
      github: null,
    },
  },
  {
    id: 4,
    title: 'Oliv',
    tagline: 'AI-Powered Early-Career Hiring Platform',
    description:
      'A platform connecting students and employers, with AI tools that supercharge resumes and surface the right internships and graduate jobs.',
    image: '/images/oliv.png',
    gallery: ['/images/oliv.png', '/images/oliv.png', '/images/oliv.png'],
    category: 'HR Tech',
    featured: false,
    year: '2024',
    role: 'Full-Stack Engineer',
    duration: '8 months',
    technologies: ['Next.js', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Elasticsearch'],
    overview:
      'Oliv helps early-career talent land their first internships and graduate jobs while giving employers a smarter pipeline of candidates. The product blends classic search with AI to make matching feel intuitive on both sides.',
    problem:
      'Generic job boards are noisy and inefficient for early-career hiring. Students struggle to translate their experience into strong resumes, while employers waste hours screening underqualified applicants.',
    challenges: [
      'Building a relevance-tuned candidate / job search experience on top of Elasticsearch.',
      'Designing AI resume tooling that improves quality without sounding generic.',
      'Modelling employer pipelines, stages, and collaborative reviews.',
      'Keeping latency low across a global user base on a small infra footprint.',
    ],
    solution:
      'Next.js front-end with a Node.js API for transactional flows and a Python service for AI features and ranking. Elasticsearch powers fast, faceted candidate and job search; MongoDB stores user, application, and pipeline data; AWS provides the runtime and managed services.',
    features: [
      'AI resume builder and rewrite suggestions',
      'Smart job and candidate matching',
      'Employer pipelines with stages and collaborative reviews',
      'Faceted search with saved searches and alerts',
      'Application tracking with status timelines',
      'Analytics dashboards for employers',
    ],
    results: [
      { label: 'Match quality (employer NPS)', value: '+40%' },
      { label: 'Application completion rate', value: '2x' },
      { label: 'Active student users', value: '10k+' },
    ],
    links: {
      demo: 'https://oliv.com/',
      github: null,
    },
  },
];

export default projectsData;
