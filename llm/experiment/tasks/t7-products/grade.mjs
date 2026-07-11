export async function grade({ fetchRes, fetchText, check }) {
  const page2 = await fetchText("/products/2");
  check("page: product name", /Basalt Mug/.test(page2), page2.slice(0, 400));
  check("page: price format", /\$18/.test(page2));
  const missing = await fetchText("/products/999");
  check("page: not found text", /Product not found/.test(missing), missing.slice(0, 300));
  const api = await fetchRes("/api/products/2");
  check("api: 200", api.status === 200, String(api.status));
  check("api: json content-type", (api.headers.get("content-type") || "").includes("application/json"), api.headers.get("content-type"));
  try {
    const body = JSON.parse(api.text);
    check("api: body matches product", body && body.id === "2" && body.name === "Basalt Mug" && body.price === 18, api.text.slice(0, 200));
  } catch {
    check("api: body matches product", false, api.text.slice(0, 200));
  }
  const api404 = await fetchRes("/api/products/999");
  check("api: unknown id -> 404", api404.status === 404, String(api404.status));
  try {
    check("api: 404 body", JSON.parse(api404.text).error === "not found", api404.text.slice(0, 200));
  } catch {
    check("api: 404 body", false, api404.text.slice(0, 200));
  }
}
