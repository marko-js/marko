import type { CmsPage } from "./pages";
import { getShape } from "./shape";

const blockTypes = [
  "hero",
  "card-grid",
  "rich-text",
  "promo-banner",
  "carousel",
  "faq",
];

/** Each variant turns a page (or the page set) into an entry template plus the runtime input it renders with. */
export interface Variant {
  name: string;
  description: string;
  /** Groups pages that share one compiled entry. */
  key(page: CmsPage): string;
  /** Files (relative to the entry's directory) for the entry of the group `page` belongs to. */
  files(page: CmsPage): Record<string, string>;
  input(page: CmsPage): Record<string, unknown>;
}

const document = (body: string) => `<!doctype html>
<html>
<head><title>\${input.title}</title></head>
<body>
${body}
</body>
</html>
`;

const blockImports = (load?: string) =>
  blockTypes
    .map(
      (type) =>
        `import ${toIdentifier(type)} from "<app>/tags/${type}.marko"${load ? ` with { load: "${load}" }` : ""};`,
    )
    .join("\n") + "\n";

const viewsConst = `<const/views={ ${blockTypes.map((type) => `"${type}": ${toIdentifier(type)}`).join(", ")} }/>\n`;

const generic = (name: string, load?: string): Variant => ({
  name,
  description: load
    ? "today: `<${views[type]} ...props>` over lazy (`load: render`) block templates"
    : "today, eager: `<${views[type]} ...props>` with every block template in the bundle",
  key: () => name,
  files: () => ({
    "page.marko":
      blockImports(load) +
      document(`${viewsConst}<for|section| of=input.sections>
  <\${views[section.type]} ...section.props/>
</for>`),
  }),
  input: (page) => ({ title: page.title, sections: page.sections }),
});

const dispatch = (body: (type: string) => string) =>
  blockTypes
    .map(
      (type) => `  <-if=(section.type === "${type}")>
    ${body(type)}
  </-if>`,
    )
    .join("\n");

export const variants: Variant[] = [
  generic("generic-lazy", "render"),
  generic("generic-eager"),
  {
    name: "shape",
    description:
      "JIT per shape (works today): comptime unrolls the section list into known runtime tags; content stays runtime input",
    key: (page) => `shape:${JSON.stringify(getShape(page))}`,
    files: (page) => ({
      "shape.json": JSON.stringify(getShape(page)),
      "page.marko":
        `comptime import shape from "./shape.json";\n` +
        document(`<-for|section, i| of=shape.sections>
${dispatch((type) => `<${type} ...input.sections[i].props/>`)}
</-for>`),
    }),
    input: (page) => ({ title: page.title, sections: page.sections }),
  },
  {
    name: "baked",
    description:
      "JIT per page: comptime expands every block (`<-hero ...props/>`) with its full content baked in",
    key: (page) => `page:${page.slug}`,
    files: (page) => ({
      "page.json": JSON.stringify(page),
      "page.marko":
        `comptime import page from "./page.json";\n` +
        document(`<-for|section| of=page.sections>
${dispatch((type) => `<-${type} ...section.props/>`)}
</-for>`),
    }),
    input: (page) => ({ title: page.title }),
  },
];

function toIdentifier(type: string) {
  return type.replace(/(^|-)(\w)/g, (_, _dash, c: string) => c.toUpperCase());
}
