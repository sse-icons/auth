import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { iconsData, type IconDataJSONType } from "../iconsData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const svgDir = path.join(__dirname, "../../");

async function buildJson() {
    const icons: { [key: string]: IconDataJSONType } = {};
    for (const item of iconsData) {
        const fileContent = await fs.readFileSync(path.join(svgDir, item.path), "utf-8");
        icons[item.id] = {
            id: item.id,
            name: item.name,
            path: `https://raw.githubusercontent.com/sse-icons/auth/main/${item.path}`,
            body: fileContent,
            version: item.version,
            author: item.author,
            categories: item.categories,
            keywords: item.keywords,
            url: item.url,
        }
    }
    const jsonOutput = { icons };
    fs.writeFileSync(path.join(__dirname, '../../json/icons.json'), JSON.stringify(jsonOutput, null, 2));
    console.log('icons.json has been generated successfully.');
}

async function buildJsonArray() {
    const icons: IconDataJSONType[] = [];  // Change from object to array
    for (const item of iconsData) {
        const fileContent = await fs.readFileSync(path.join(svgDir, item.path), "utf-8");
        icons.push({
            id: item.id,
            name: item.name,
            path: `https://raw.githubusercontent.com/sse-icons/auth/main/${item.path}`,
            body: fileContent,
            version: item.version,
            author: item.author,
            categories: item.categories,
            keywords: item.keywords,
            url: item.url,
        });
    }
    const jsonOutput = { icons };  // This remains the same
    fs.writeFileSync(path.join(__dirname, '../../json/icons-array.json'), JSON.stringify(jsonOutput, null, 2));
    console.log('icons.json has been generated successfully.');
}


buildJson().catch((error) => {
    console.error("Error building JSON:", error);
});

buildJsonArray().catch((error) => {
    console.error("Error building JSON:", error);
});