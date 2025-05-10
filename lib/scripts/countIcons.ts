import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { iconsData } from "../iconsData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsDir = path.join(__dirname, "../../icons");
const files = fs.readdirSync(iconsDir);
const fileCount = files.length;
const jsonCount = iconsData.length

console.log(`Total number of files in the 'icons/' directory: ${fileCount}`);
console.log(`Build icons are: ${jsonCount}`)
