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
    category: ["OAuth"],
    keywords: ["42", "school", "dark", "oauth"],
    url: "https://www.42.fr/en/",
  },
  {
    id: "school-42-light",
    name: "School 42 Light",
    path: "icons/42-school-light.svg",
    category: ["OAuth"],
    keywords: ["42", "school", "light", "oauth"],
    url: "https://www.42.fr/en/",
  },
  {
    id: "apple-dark",
    name: "Apple Dark",
    path: "icons/apple-dark.svg",
    category: ["OAuth"],
    keywords: ["apple", "dark", "oauth"],
    url: "https://www.apple.com/",
  },
  {
    id: "apple-light",
    name: "Apple Light",
    path: "icons/apple-light.svg",
    category: ["OAuth"],
    keywords: ["apple", "light", "oauth"],
    url: "https://www.apple.com/",
  },
  {
    id: "auth0",
    name: "Auth0",
    path: "icons/auth0.svg",
    category: ["OAuth"],
    keywords: ["auth0", "oauth"],
    url: "https://auth0.com/",
  },
  {
    id: "asgardeo",
    name: "Asgardeo",
    path: "icons/asgardeo.svg",
    category: ["OAuth"],
    keywords: ["asgardeo", "oauth"],
    url: "https://www.asgardeo.io/",
  },
];

export type Category = (typeof categoriesData)[number];

export interface IconDataType {
  id: string;
  name: string;
  path: string;
  category: Category[];
  keywords: string[];
  url: string;
}
