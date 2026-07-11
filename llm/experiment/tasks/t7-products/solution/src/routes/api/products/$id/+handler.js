import { getProduct } from "../../../../catalog.js";

export function GET(context) {
  const product = getProduct(context.params.id);
  if (!product) {
    return new Response(JSON.stringify({ error: "not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
  return new Response(JSON.stringify(product), {
    headers: { "content-type": "application/json" },
  });
}
