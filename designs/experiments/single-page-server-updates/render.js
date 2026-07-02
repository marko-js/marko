const S = "designs/experiments/single-page-server-updates";
const input = {
  product: JSON.parse(process.env.PRODUCT),
  related: JSON.parse(process.env.RELATED),
};

async function main() {
  const template = require(require("path").resolve(S, process.env.TEMPLATE)).default;
  if (process.env.PERSISTED === "1") input.$global = { persisted: true };
  let out = "";
  for await (const chunk of template.render(input)) out += chunk;
  console.log(out);
}
main().catch((e) => { console.error(e); process.exit(1); });
