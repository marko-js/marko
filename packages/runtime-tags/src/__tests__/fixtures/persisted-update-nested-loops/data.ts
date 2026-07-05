// Module values: render-once by contract (the nav tree and region list
// never refresh), but branch content reading $global-derived values must
// still refresh on navigation -- through every nesting level.
export function getNav() {
  return [
    {
      title: "Start",
      pages: [
        { slug: "intro", title: "Intro" },
        { slug: "setup", title: "Setup" },
      ],
    },
    {
      title: "Guides",
      pages: [
        { slug: "routing", title: "Routing" },
        { slug: "data", title: "Data" },
      ],
    },
  ];
}

export const REGIONS = ["na", "eu", "apac"];
