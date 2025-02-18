import type { KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: ["app/routeTree.gen.ts"],
  entry: ["app/*.tsx"],
};

export default config;
