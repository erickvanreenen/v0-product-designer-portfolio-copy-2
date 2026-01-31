export type ProjectTag = 
  | "E-commerce" 
  | "Omnichannel" 
  | "App" 
  | "Redesign" 
  | "UX Strategy" 
  | "Leadership"
  | "EdTech";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: ProjectTag[];
  role: string;
  team: string;
  timeline: string;
  tools: string[];
  thumbnail: string;
  outcomes: string[];
  summary: string;
  context: string;
  goals: string[];
  research: string;
  insights: string[];
  iaFlows: string;
  designExploration: string;
  finalUI: string;
  testing: string;
  outcome: string;
  learnings: string[];
  images: {
    src: string;
    caption: string;
    wide?: boolean;
  }[];
  externalLink?: string;
}

export const projects: Project[] = [
  {
    slug: "faithful-to-nature",
    title: "Faithful to Nature",
    subtitle: "E-commerce website redesign for South Africa's leading eco-friendly retailer",
    tags: ["E-commerce", "Redesign", "UX Strategy", "Omnichannel"],
    role: "Lead UX/UI Designer",
    team: "Product Owner, Project Manager, 3 Developers",
    timeline: "September 2024 - Present",
    tools: ["Figma", "Miro", "Jira", "Adobe Creative Suite"],
    thumbnail: "/images/ftn-thumbnail.jpg",
    outcomes: [
      "Complete website redesign in progress",
      "Improved information architecture",
      "Enhanced mobile experience",
      "Streamlined checkout flow"
    ],
    summary: "Leading the complete UX/UI redesign of Faithful to Nature's e-commerce platform, focusing on creating a seamless omnichannel experience that reflects the brand's commitment to sustainability.",
    context: "Faithful to Nature is South Africa's leading online retailer for eco-friendly and organic products. The existing website needed a comprehensive redesign to improve user experience, increase conversions, and better communicate the brand's values.",
    goals: [
      "Improve product discovery and navigation",
      "Reduce cart abandonment rate",
      "Create a cohesive brand experience across desktop and mobile",
      "Enhance accessibility and inclusivity"
    ],
    research: "Conducted extensive qualitative and quantitative research including user interviews, analytics review, competitor analysis, and usability testing of the existing platform. Identified key pain points in the user journey.",
    insights: [
      "Users struggled to find products due to complex category structure",
      "Mobile experience was significantly underperforming desktop",
      "Trust indicators were not prominently displayed",
      "Checkout process had unnecessary friction points"
    ],
    iaFlows: "Restructured the information architecture based on card sorting exercises and tree testing. Created user flows that prioritize the most common user tasks while maintaining discoverability of the full product range.",
    designExploration: "Explored multiple design directions that balanced the brand's organic, natural aesthetic with modern e-commerce best practices. Conducted preference testing with users to validate direction.",
    finalUI: "Developed a clean, nature-inspired design system with improved typography, sustainable color palette, and clear visual hierarchy. Mobile-first approach ensuring excellent experience across all devices.",
    testing: "Ongoing usability testing throughout the design process with iterative improvements based on user feedback. A/B testing planned for post-launch optimization.",
    outcome: "Project currently in development with positive stakeholder feedback. Early user testing shows significant improvements in task completion rates and user satisfaction.",
    learnings: [
      "Importance of balancing business goals with user needs",
      "Value of continuous stakeholder communication",
      "Benefits of mobile-first design approach"
    ],
    images: [
      { src: "/images/ftn-research.jpg", caption: "User research synthesis and affinity mapping" },
      { src: "/images/ftn-wireframes.jpg", caption: "Low-fidelity wireframes exploring navigation patterns", wide: true },
      { src: "/images/ftn-ui.jpg", caption: "Final UI design for homepage and product pages", wide: true }
    ]
  },
  {
    slug: "yumease",
    title: "YumEase",
    subtitle: "Mobile app design from inception to launch",
    tags: ["App", "UX Strategy"],
    role: "Sole UX Designer",
    team: "2 Developers, Product Manager, QA Tester",
    timeline: "July 2023 - August 2024",
    tools: ["Figma", "Miro", "Jira"],
    thumbnail: "/images/yumease-thumbnail.jpg",
    outcomes: [
      "Successfully launched app",
      "4.5 star average rating",
      "Reduced onboarding drop-off by 40%",
      "Positive user feedback on ease of use"
    ],
    summary: "As the sole UX Designer, I shaped the entire user experience of YumEase from concept to launch, working within a cross-functional team to deliver an intuitive and delightful mobile app.",
    context: "YumEase needed a user-centered approach to design a new mobile app in a competitive market. As the only designer on the team, I was responsible for all aspects of the user experience.",
    goals: [
      "Create an intuitive onboarding experience",
      "Design a simple and efficient core user flow",
      "Establish a cohesive visual design system",
      "Ensure accessibility across the app"
    ],
    research: "Conducted user interviews, competitive analysis, and created personas to understand user needs and behaviors. Used findings to inform all design decisions throughout the project.",
    insights: [
      "Users valued simplicity over feature richness",
      "Quick access to core functionality was essential",
      "Social proof significantly influenced user trust",
      "Clear progress indicators reduced anxiety"
    ],
    iaFlows: "Designed information architecture that prioritized the most common user tasks. Created detailed user flows and journey maps to ensure a smooth experience from first open to regular use.",
    designExploration: "Explored multiple visual directions and interaction patterns. Conducted rapid prototyping and testing cycles to validate concepts before development.",
    finalUI: "Delivered a clean, modern design system with consistent components, clear typography, and an approachable color palette that reflected the app's friendly personality.",
    testing: "Iterative usability testing throughout development with both internal and external users. Quick feedback loops allowed for rapid improvements.",
    outcome: "App launched successfully with positive user reception. Achieved 4.5 star rating with users specifically praising the intuitive design and ease of use.",
    learnings: [
      "Importance of close collaboration with developers",
      "Value of early and frequent user testing",
      "Benefits of design system documentation"
    ],
    images: [
      { src: "/images/yumease-personas.jpg", caption: "User personas developed from research" },
      { src: "/images/yumease-flows.jpg", caption: "User flow mapping for core functionality", wide: true },
      { src: "/images/yumease-screens.jpg", caption: "Final app screens showing key features", wide: true }
    ]
  },
  {
    slug: "ucook",
    title: "UCOOK",
    subtitle: "Omnichannel UX optimization for meal kit delivery",
    tags: ["E-commerce", "Omnichannel", "UX Strategy"],
    role: "UX/UI Designer",
    team: "Product Team, Frontend & Backend Developers",
    timeline: "September 2024 - Present",
    tools: ["Figma", "Miro", "Jira", "Google Analytics"],
    thumbnail: "/images/ucook-thumbnail.jpg",
    outcomes: [
      "Improved user journey consistency",
      "Enhanced mobile conversion rate",
      "Streamlined subscription management"
    ],
    summary: "Contributing to the continuous improvement of UCOOK's e-commerce platform, focusing on creating seamless experiences across desktop and mobile for their meal kit delivery service.",
    context: "UCOOK is a leading meal kit delivery service in South Africa. My role involves optimizing the user experience across their omnichannel platform while balancing multiple brand priorities.",
    goals: [
      "Improve subscription conversion funnel",
      "Enhance meal selection experience",
      "Optimize mobile checkout flow",
      "Maintain brand consistency across touchpoints"
    ],
    research: "Conducted heuristic evaluations, analyzed user behavior data, and performed competitive analysis to identify optimization opportunities within the existing platform.",
    insights: [
      "Users wanted more flexibility in subscription options",
      "Recipe browsing was a key engagement driver",
      "Mobile users had different needs than desktop users",
      "Clear delivery information reduced support queries"
    ],
    iaFlows: "Mapped existing user journeys and identified friction points. Proposed improvements to information architecture that maintained familiarity while addressing pain points.",
    designExploration: "Created design iterations focused on conversion optimization while maintaining brand integrity. Tested concepts with users before implementation.",
    finalUI: "Delivered refined UI components that improved clarity and usability while working within the existing design system constraints.",
    testing: "Ongoing A/B testing and user feedback collection to validate design decisions and measure impact on key metrics.",
    outcome: "Continuous improvements showing positive trends in user engagement and conversion metrics.",
    learnings: [
      "Balancing optimization with existing design systems",
      "Importance of data-informed design decisions",
      "Value of cross-brand design thinking"
    ],
    images: [
      { src: "/images/ucook-analysis.jpg", caption: "UX audit and opportunity mapping" },
      { src: "/images/ucook-mobile.jpg", caption: "Mobile optimization designs", wide: true }
    ]
  },
  {
    slug: "uni4-online",
    title: "UNi4 Online Aggregator",
    subtitle: "Multi-brand education platform consolidation",
    tags: ["EdTech", "UX Strategy", "Leadership"],
    role: "Visual Team Lead & UX Designer",
    team: "Junior Designers, Learning Designers, Project Manager",
    timeline: "May 2021 - August 2024",
    tools: ["Figma", "Miro", "Articulate 360", "Adobe Creative Suite"],
    thumbnail: "/images/uni4-thumbnail.jpg",
    outcomes: [
      "Increased team productivity significantly",
      "Met all KPIs consistently",
      "Improved designer collaboration",
      "Successful aggregator platform design"
    ],
    summary: "Led the visual design team while designing the UX for a new aggregator website that consolidates multiple education brands onto a single platform.",
    context: "UNi4 Online faced challenges with designers working in isolation, leading to inconsistent outputs and difficulty meeting KPIs. Additionally, there was a need to consolidate multiple education brands onto one platform.",
    goals: [
      "Streamline design team workflows",
      "Improve team collaboration and morale",
      "Design unified aggregator platform",
      "Create consistent brand experiences"
    ],
    research: "Analyzed existing workflows, conducted team interviews, and studied competitor education platforms to inform both team process improvements and platform design.",
    insights: [
      "Designers needed clearer project visibility",
      "Regular check-ins improved team morale",
      "Users needed seamless navigation between brands",
      "Content consistency was crucial for trust"
    ],
    iaFlows: "Designed information architecture that allowed users to navigate between brands while maintaining clear context. Created unified design patterns that worked across all brands.",
    designExploration: "Explored approaches that balanced individual brand identities with platform consistency. Tested concepts with stakeholders and end users.",
    finalUI: "Delivered a cohesive design system that maintained brand distinction while providing a unified user experience across the aggregator platform.",
    testing: "User testing with students and internal stakeholders to validate navigation patterns and content organization.",
    outcome: "Team productivity increased significantly, KPIs were consistently met, and the aggregator platform received positive feedback from stakeholders.",
    learnings: [
      "Leadership requires balancing individual needs with team goals",
      "Process improvements can dramatically impact output quality",
      "Design systems need flexibility for multi-brand contexts"
    ],
    images: [
      { src: "/images/uni4-kanban.jpg", caption: "Kanban workflow implementation for design team" },
      { src: "/images/uni4-aggregator.jpg", caption: "Aggregator platform design exploration", wide: true }
    ]
  },
  {
    slug: "edtech-interactive-learning",
    title: "EdTech Interactive Learning Experience",
    subtitle: "Designing an intuitive, interactive online learning experience using Articulate Rise",
    tags: ["EdTech", "UX Strategy"],
    role: "Learning Experience Designer",
    team: "Solo Project",
    timeline: "2024",
    tools: ["Articulate Rise", "Figma", "Miro"],
    thumbnail: "/images/edtech-thumbnail.jpg",
    outcomes: [
      "Created engaging interactive learning modules",
      "Improved learner engagement through multimedia content",
      "Delivered accessible, responsive learning experience",
      "Streamlined knowledge retention through interactive assessments"
    ],
    summary: "Designed and developed an interactive online learning experience using Articulate Rise, focusing on creating an intuitive, engaging, and accessible educational journey for learners.",
    context: "This project showcases my EdTech capabilities, demonstrating how UX principles can be applied to educational content design. The goal was to create an interactive learning experience that engages users while effectively communicating complex information.",
    goals: [
      "Create an engaging and intuitive learning flow",
      "Apply instructional design principles to content structure",
      "Ensure accessibility across devices and user needs",
      "Balance visual engagement with educational effectiveness"
    ],
    research: "Applied learning science principles and UX research methodologies to understand how users best absorb and retain information in digital learning environments.",
    insights: [
      "Chunked content improves comprehension and reduces cognitive load",
      "Interactive elements increase engagement and retention",
      "Clear navigation and progress indicators reduce learner anxiety",
      "Multimedia variety caters to different learning styles"
    ],
    iaFlows: "Structured the learning experience with clear progression, logical content grouping, and intuitive navigation that guides learners through the material at their own pace.",
    designExploration: "Explored various content presentation methods and interactive elements to find the optimal balance between engagement and educational effectiveness.",
    finalUI: "Delivered a polished, responsive learning experience with clean typography, thoughtful use of imagery, and interactive assessments that reinforce key concepts.",
    testing: "Conducted user testing with sample learners to validate the learning flow, content clarity, and interaction patterns.",
    outcome: "Successfully created an interactive learning experience that demonstrates the intersection of UX design and educational content development.",
    learnings: [
      "Instructional design and UX design share many common principles",
      "Interactivity should serve the learning objective, not distract from it",
      "Accessibility is crucial in educational content"
    ],
    images: [
      { src: "/images/edtech-structure.jpg", caption: "Learning experience structure and flow" },
      { src: "/images/edtech-interactions.jpg", caption: "Interactive elements and assessments", wide: true }
    ],
    externalLink: "https://rise.articulate.com/share/XCDWEAquTje11b1vjAzKZahmZziR0gaj#/lessons/rMXP5z-dQk-xwn-pu5qgWJAxQpOXijVW"
  },
  {
    slug: "pet-heaven",
    title: "Pet Heaven",
    subtitle: "E-commerce UX improvements for pet supplies retailer",
    tags: ["E-commerce", "Omnichannel"],
    role: "UX/UI Designer",
    team: "Product Team, Developers",
    timeline: "September 2024 - Present",
    tools: ["Figma", "Miro", "Jira"],
    thumbnail: "/images/pet-heaven-thumbnail.jpg",
    outcomes: [
      "Improved product discovery",
      "Enhanced pet profile features",
      "Streamlined repeat ordering"
    ],
    summary: "Contributing UX/UI design improvements to Pet Heaven's e-commerce platform, focusing on features that support pet owners in their recurring purchase needs.",
    context: "Pet Heaven is part of the Silvertree Brands portfolio. My role involves improving the user experience while coordinating design efforts across multiple brands.",
    goals: [
      "Simplify repeat purchase flows",
      "Improve product recommendations",
      "Enhance mobile shopping experience"
    ],
    research: "Analyzed user behavior patterns, particularly around repeat purchases and subscription products, to identify optimization opportunities.",
    insights: [
      "Pet owners have predictable recurring needs",
      "Product recommendations based on pet profiles increased engagement",
      "Quick reorder functionality was highly valued"
    ],
    iaFlows: "Mapped purchase journeys for repeat customers and designed streamlined flows that reduced friction for common tasks.",
    designExploration: "Explored features that leverage pet profile data to personalize the shopping experience while maintaining simplicity.",
    finalUI: "Delivered UI improvements that enhanced the core shopping experience while introducing pet-centric personalization features.",
    testing: "Usability testing focused on repeat purchase scenarios and pet profile features.",
    outcome: "Ongoing improvements showing positive engagement with new features.",
    learnings: [
      "Personalization adds value when based on real user needs",
      "Simplifying recurring tasks builds loyalty"
    ],
    images: [
      { src: "/images/pet-heaven-profiles.jpg", caption: "Pet profile feature design" },
      { src: "/images/pet-heaven-reorder.jpg", caption: "Quick reorder flow optimization", wide: true }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllTags(): ProjectTag[] {
  const tags = new Set<ProjectTag>();
  projects.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags);
}
