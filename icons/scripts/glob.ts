import rawGlob from "glob-promise";

export function glob(pattern: string) {
  return rawGlob(pattern.replace(/\\/g, "/"));
}
