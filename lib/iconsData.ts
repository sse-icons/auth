export const categoriesData = [
  "OAuth",
  "OIDC",
  "WebAuthn",
  "Email",
  "Credentials",
] as const;

export const iconsData: IconDataType[] = [
  {
    id: "school-42-dark",
    name: "School 42 Dark",
    path: "icons/42-school-dark.svg",
    categories: ["OAuth"],
    keywords: ["42", "school", "dark", "oauth"],
    url: "https://www.42.fr/en/",
  },
  {
    id: "school-42-light",
    name: "School 42 Light",
    path: "icons/42-school-light.svg",
    categories: ["OAuth"],
    keywords: ["42", "school", "light", "oauth"],
    url: "https://www.42.fr/en/",
  },
  {
    id: "apple-dark",
    name: "Apple Dark",
    path: "icons/apple-dark.svg",
    categories: ["OAuth"],
    keywords: ["apple", "dark", "oauth"],
    url: "https://www.apple.com/",
  },
  {
    id: "apple-light",
    name: "Apple Light",
    path: "icons/apple-light.svg",
    categories: ["OAuth"],
    keywords: ["apple", "light", "oauth"],
    url: "https://www.apple.com/",
  },
  {
    id: "auth0",
    name: "Auth0",
    path: "icons/auth0.svg",
    categories: ["OAuth"],
    keywords: ["auth0", "oauth"],
    url: "https://auth0.com/",
  },
  {
    id: "asgardeo",
    name: "Asgardeo",
    path: "icons/asgardeo.svg",
    categories: ["OAuth"],
    keywords: ["asgardeo", "oauth"],
    url: "https://www.asgardeo.io/",
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    path: "icons/github-dark.svg",
    categories: ["OAuth"],
    keywords: ["github", "dark", "oauth"],
    url: "https://github.com/",
  },
  {
    id: "github-light",
    name: "GitHub Light",
    path: "icons/github-light.svg",
    categories: ["OAuth"],
    keywords: ["github", "light", "oauth"],
    url: "https://github.com/",
  },
  {
    id: "npm",
    name: "NPM",
    path: "icons/npm.svg",
    categories: ["OAuth"],
    keywords: ["npm", "oauth"],
    url: "https://www.npmjs.com/",
  },
  {
    id: "pnpm-dark",
    name: "Pnpm Dark",
    path: "icons/pnpm-dark.svg",
    categories: ["OAuth"],
    keywords: ["pnpm", "dark", "oauth"],
    url: "https://pnpm.io/",
  },
  {
    id: "pnpm-light",
    name: "Pnpm Light",
    path: "icons/pnpm-light.svg",
    categories: ["OAuth"],
    keywords: ["pnpm", "light", "oauth"],
    url: "https://pnpm.io/",
  },
];

export type Category = (typeof categoriesData)[number];

export interface IconDataType {
  id: string;
  name: string;
  path: string;
  categories: Category[];
  keywords: string[];
  url: string;
}
