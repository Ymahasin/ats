export const wordsToIgnore = new Set([
  "about",
  "an",
  "at",
  "age",
  "as",
  "description",
  "the",
  "each",
  "a",
  "ca",
  "with",
  "of",
  "also",
  "that",
  "with",
  "in",
  "they",
  "don't",
  "like",
  "all",
  "to",
  "and",
  "or",
  "is",
  "are",
  "were",
  "was",
  "be",
  "been",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "shall",
  "should",
  "may",
  "might",
  "must",
  "am",
  "is",
  "get",
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "we",
  "they",
  "not",
  "just",
  "only",
  "come",
  "go",
  "where",
  "by",
  "but",
  "every",
  "any",
  "some",
  "if",
  "ie",
  "eg",
  "etc",
  "new",
  "old",
  "on",
  "this",
  "what",
  "who",
  "which",
  "your",
  "you're",
  "youll",
  "you'll",
  "our",
  "for",
  "work",
  "them",
  "from",
  "looking",
  "look",
  "and/or",
  "across",
  "use",
  "citizenship",
  "citizen",
  "visa",
  "please",
  "salary",
  "into",
  "life",
  "more",
  "paid",
  "benefits",
  "well",
  "business",
  "how",
  "no",
  "now",
  "how",
  "job",
  "people",
  "their",
  "than",
  "other",
  "time",
  "together",
  "build",
  "company",
  "why",
]);

export const titles = new Set([
  "front-end developer",
  "front end developer",
  "frontend developer",
  "front-end developer",

  "front-end software developer",
  "front end software developer",
  "frontend software developer",
  "front-end software developer",

  "front end engineer",
  "frontend engineer",
  "front-end engineer",

  "front end software engineer",
  "frontend software engineer",
  "front-end software engineer",

  "back-end software developer",
  "back end software developer",
  "backend software developer",

  "back-end developer",
  "back end developer",
  "backend developer",

  "back end engineer",
  "back-end engineer",
  "backend engineer",

  "back end software engineer",
  "back-end software engineer",
  "backend software engineer",

  "fullstack software engineer",
  "full-stack software engineer",
  "full stack software engineer",

  "full stack software developer",
  "fullstack software developer",
  "full-stack software developer",

  "full stack developer",
  "fullstack developer",
  "full-stack developer",

  "full-stack engineer",
  "full stack engineer",
  "fullstack engineer",
]);

export const techWords = new Set([
  "cloud computing",
  "adobe",
  "ai",
  "ml",
  "photoshop",
  "analytics",
  "a11y",
  "testing",
  "automation",
  "agile",
  "scrum",
  "kanban",
  "jira",
  "trello",
  "test",
  "accessibility",
  "coding",
  "programming",
  "software",
  "typescript",
  "javascript",
  "react",
  "vue",
  "angular",
  "node",
  "node.js",
  "nodejs",
  "express",
  "express.js",
  "expressjs",
  "mongodb",
  "postgresql",
  "postgres",
  "mysql",
  "docker",
  "kubernetes",
  "aws",
  "go",
  "ruby",
  "java",
  "python",
  "c++",
  "c#",
  "c",
  "php",
  "swift",
  "kotlin",
  "android",
  "ios",
  "oracle",
  "linux",
  "windows",
  "unix",
  "google",
  "cloud",
  "azure",
  "gcp",
  "firebase",
  "nosql",
  "sql",
  "mysql",
  "serverless",
  "server",
  "server-side",
  "graphql",
  "rest",
  "api",
  "apis",
  "crud",
  "microservices",
  "sass",
  "css",
  "html",
  "git",
  "github",
  "gitlab",
  "bitbucket",
  "engineer",
  "front end",
  "frontend",
  "front-end",
  "back end",
  "backend",
  "back-end",
  "full stack",
  "fullstack",
  "full-stack",
  "front-end developement",
  "front end developement",
  "frontend developement",
  "front-end developement",
  "back-end developement",
  "back end developement",
  "backend developement",
  "back-end developement",
  "webpack",
  "bundler",
  "observability",
  "systems",
  "ui",
  "ux",
  "ui/ux",
  "data",
  "application",
  "applications",
  "database",
  "databases",
  "engineering",
]);

export const actionWords = new Set([
  "drives",
  "dives",
  "driven",
  "drive",
  "enthusiastic",
  "enthusiasm",
  "enable",
  "enables",
  "enabling",
  "encourage",
  "deliver",
  "delivering",
  "delivers",
  "cut",
  "create",
  "innovate",
]);

export const achievementWords = new Set([
  "spearheaded",
  "spearhead",
  "slashed",
  "enabled",
  "delivered",
  "streamlined",
]);

export const qualities_or_traitWords = new Set([
  "openness",
  "conscientiousness",
  "leadership",
  "professionalism",
  "professional",
  "willing",
  "willingness",
  "flexibility",
  "flexible",
  "eager",
  "reliable",
  "inspired",
  "inspire",
  "creative",
  "creativity",
  "motivated",
  "ambitious",
  "ambition",
  "passionate",
  "mentored",
  "mentor",
]);

export const seniorityWords = new Set([
  "intern",
  "internship",
  "senior",
  "junior",
  "midlevel",
  "mid-level",
  "entry-level",
  "entry level",
  "entry",
  "intermediate",
  "intermediate-level",
  "experienced",
  "experience",
  "experiences",
  "expert",
  "managed",
  "manage",
  "manager",
  "management",
]);

export const educationWords = new Set([
  "bachelor",
  "bachelors",
  "bachelor's",
  "masters",
  "master's",
  "master",
  "phd",
  "bs",
  "ms",
  "B.S.",
  "M.S.",
]);

export const positiveRankReplies = [
  "Send It! It doesn't get any better than this!",
  "You are a perfect match! Send it!",
  "This is a great match. Apply with confidence!",
  "You are a perfect match! Apply now!",
  "Lookin good. We say go for it!",
];

export const neutralRankReplies = [
  "This is a decent match. You may want to make some changes.",
  "You could apply, but we recommend some tweaking first.",
  "Okay, this is close but let's improve it a bit. We have some ideas!",
  "Great start, let's make some changes to make it perfect.",
  "This is heading in the right direction. Let's modify your resume a bit before you apply.",
];

export const negativeRankReplies = [
  "This isn't a great match right now. You may want to make some changes.",
  "Perhaps we should look at other opportunities",
  "Let's see what else is out there.",
  "We don't think this would be a great match.",
  "It's not you...its them. Let's keep looking.",
];
