import path from "path";
import camelcase from "camelcase";
import { IconDefinition } from "../../scripts/_types";
import { glob } from "../../scripts/glob";

export const icons: IconDefinition[] = [
  {
    id: "fa5",
    name: "Font Awesome 5",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/+(brands|solid)/*.svg"
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/regular/*.svg"
        ),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 LICENSE",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "fontawesome",
      remoteDir: "svg/fa5/",
      url: "https://github.com/sse-auth/icons.git",
      branch: "master",
      hash: "61a7c98f9566e68fd10ec1c88618cd9bdb2001ca",
    },
  },
];
