const S = "designs/experiments/single-page-server-updates";
const input = {
  product: JSON.parse(process.env.PRODUCT),
  related: JSON.parse(process.env.RELATED),
};

async function main() {
  const template = require(S + "/" + process.env.TEMPLATE).default;
  let out = "";
  for await (const chunk of template.render(input)) out += chunk;
  console.log(out);
}
main().catch((e) => { console.error(e); process.exit(1); });
