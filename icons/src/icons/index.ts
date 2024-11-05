import path from "path";
import camelcase from "camelcase";
import { IconDefinition } from "../../scripts/_types";
import { glob } from "../../scripts/glob";

export const icons: IconDefinition[] = [
  {
    id: "ci",
    name: "Circum Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../../svg/ci/*.svg"),
        formatter: (name) => `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  {
    id: "fa5",
    name: "Font Awesome 5",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../../svg/fa5/+(brands|solid)/*.svg"
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(__dirname, "../../../svg/fa5/regular/*.svg"),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  {
    id: "fa6",
    name: "Font Awesome 6",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../../svg/fa6/+(brands|solid)/*.svg"
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(__dirname, "../../../svg/fa6/regular/*.svg"),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  {
    id: "go",
    name: "Github Octicons icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../../svg/go/*.svg"),
        formatter: (name) => `Go${name}`,
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  {
    id: "io",
    name: "Ionicons 7",
    contents: [
      {
        files: path.resolve(__dirname, "../../../svg/io/*.svg"),
        formatter: (name) => `Io${name}`,
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  {
    id: "md",
    name: "Material Design icons",
    contents: [
      {
        files: async () => {
          const normal = await glob(
            path.resolve(
              __dirname,
              "../../icons/material-design-icons/src/*/*/materialicons/24px.svg"
            )
          );

          const twotone = await glob(
            path.resolve(
              __dirname,
              "../../icons/material-design-icons/src/*/*/materialiconstwotone/24px.svg"
            )
          );
          return [
            ...normal,
            ...twotone.filter(
              (file) => !normal.includes(file.replace("twotone/", "/"))
            ),
          ];
        },
        formatter: (name, file) =>
          `Md${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true }
          )}`,
        processWithSVGO: true,
      },
      {
        files: path.resolve(
          __dirname,
          "../../sse-icons/material-design-icons/src/*/*/materialiconsoutlined/24px.svg"
        ),
        formatter: (name, file) =>
          `MdOutline${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true }
          )}`,
        processWithSVGO: true,
      },
    ],
    projectUrl: "http://google.github.io/material-design-icons/",
    license: "Apache License Version 2.0",
    licenseUrl:
      "https://github.com/google/material-design-icons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "material-design-icons",
      remoteDir: "src/",
      url: "https://github.com/google/material-design-icons.git",
      branch: "master",
      hash: "9beae745bb758f3ad56654fb377ea5cf62be4915",
    },
  },
  {
    id: "ti",
    name: "Typicons",
    contents: [
      {
        files: path.resolve(__dirname, "../../../svg/ti/*.svg"),
        formatter: (name) => `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
      },
    ],
    projectUrl: "https://github.com/sse-auth/icons",
    license: "MIT",
    licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE",
  },
  // {
  //   id: "lu",
  //   name: "Lucide",
  //   contents: [
  //     {
  //       files: path.resolve(
  //         path.dirname(require.resolve("lucide-static")),
  //         "../icons/*.svg"
  //       ),
  //       formatter: (name) => `Lu${name}`,
  //     },
  //   ],
  //   projectUrl: "https://lucide.dev/",
  //   license: "ISC",
  //   licenseUrl: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
  // },
];
