# @marko/run cheat sheet (file-based routing)

Routes live under `src/routes/`. Only `+`-prefixed files are routable. Dev server: `marko-run dev`.

## Files

| File | Role |
|---|---|
| `+page.marko` | the page served at this directory's path (GET) |
| `+layout.marko` | wraps all nested pages: render page with `<${input.content}/>` |
| `+handler.js` | HTTP handlers: `export const GET = Run.GET((context, next) => ...)` — verb names MUST be UPPERCASE; `Run` is a global, no import |
| `+middleware.js` | `export default Run.ALL((context, next) => ...)` — runs before handlers, all methods, root→leaf |
| `+404.marko` / `+500.marko` | root of `src/routes/` only |

## Paths

- `src/routes/about/+page.marko` → `/about`
- `src/routes/products/$id/+page.marko` → `/products/:id` (param `id`)
- `$$rest` dir → catch-all; `_name` dir → no URL segment (grouping)
- Flat form: `products.$id+page.marko` ≡ `products/$id/+page.marko`
- Relative imports from a route file: one `../` per directory after `src/`. From `src/routes/+page.marko` use `../x.js` for `src/x.js`; from `src/routes/a/+page.marko` use `../../x.js`; from `src/routes/a/$b/+handler.js` use `../../../x.js`. Count the directories — off-by-one here is the top import error.

## Request data

- In handlers/middleware: the `context` argument.
- In `.marko` pages/layouts: the same object is **`$global`** (NOT `input` — page input is empty).

```marko
/* src/routes/products/$id/+page.marko */
<h1>Product ${$global.params.id}</h1>
<p>query q = ${$global.url.searchParams.get("q")}</p>
<p>from handler: ${$global.data.title}</p>
```

Context/`$global` properties: `request` (WHATWG Request), `url` (URL), `params`, `meta`, `data`, `platform`. Methods: `context.render(template, input)`, `context.redirect(path, status)` (301/302/303/307/308 only), `context.back()`, `context.fetch(url)`.

## Handler contract

```js
/* src/routes/guestbook/+handler.js */
import { addEntry } from "../../store.js";

export const GET = Run.GET((context, next) => {
  return next({ title: "Guestbook" });   // next() renders the page; data -> $global.data
});

export const POST = Run.POST(async (context) => {
  const form = await context.request.formData();
  const msg = String(form.get("message") || "").trim();
  if (msg) addEntry(msg);
  return context.redirect("/guestbook", 303);   // POST-redirect-GET
});
```

- `Run.GET`/`Run.POST`/… wrap the handler (and skip it for other methods); `Run.ALL` runs for every method. Legacy plain exports (`export function GET(context, next) {}`) still work but new code uses `Run.*`.
- Validate/coerce inputs with an options object: `Run.GET({ params: (p) => ({ id: Number(p.id) }) }, handler)`.
- Return a `Response` → sent as-is (page does not render).
- Return nothing → framework calls `next()` for you (page renders).
- If you call `next()` yourself, RETURN its result.
- JSON APIs: `return new Response(JSON.stringify(obj), { status: 200, headers: { "content-type": "application/json" } })`.

## Middleware (auth/logging, written once for a subtree)

```js
/* src/routes/admin/+middleware.js */
export default Run.ALL((context, next) => {
  if (context.url.searchParams.get("key") !== "letmein") {
    return new Response("unauthorized", { status: 401 });
  }
  return next();
});
```

## Layout

```marko
/* src/routes/+layout.marko */
<header><nav><a href="/">Home</a> <a href="/about">About</a></nav></header>
<main><${input.content}/></main>
```

Typed links: `<a href=Run.href("/products/$id", { params: { id } })>` (checked against your routes).

Plain `<form method="post">` + a POST handler + redirect = zero-JS forms that just work.
