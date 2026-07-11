# @marko/run cheat sheet (file-based routing)

Routes live under `src/routes/`. Only `+`-prefixed files are routable. Dev server: `marko-run dev`.

## Files

| File | Role |
|---|---|
| `+page.marko` | the page served at this directory's path (GET) |
| `+layout.marko` | wraps all nested pages: render page with `<${input.content}/>` |
| `+handler.js` | HTTP handlers: `export function GET/POST/PUT/DELETE(context, next) {}` — names MUST be UPPERCASE |

## Paths

- `src/routes/about/+page.marko` → `/about`
- `src/routes/products/$id/+page.marko` → `/products/:id` (param `id`)
- `$$rest` dir → catch-all; `_name` dir → no URL segment (grouping)
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

Context/`$global` properties: `request` (WHATWG Request), `url` (URL), `params`, `meta`, `data`, `platform`. Methods: `context.redirect(path, status)` (301/302/303/307/308 only).

## Handler contract

```js
/* src/routes/guestbook/+handler.js */
import { addEntry } from "../../store.js";

export function GET(context, next) {
  return next({ title: "Guestbook" });   // next() renders the page; data -> $global.data
}

export async function POST(context) {
  const form = await context.request.formData();
  const msg = String(form.get("message") || "").trim();
  if (msg) addEntry(msg);
  return context.redirect("/guestbook", 303);   // POST-redirect-GET
}
```

- Return a `Response` → sent as-is (page does not render).
- Return nothing → framework calls `next()` for you (page renders).
- If you call `next()` yourself, RETURN its result.
- JSON APIs: `return new Response(JSON.stringify(obj), { status: 200, headers: { "content-type": "application/json" } })`.

## Layout

```marko
/* src/routes/+layout.marko */
<header><nav><a href="/">Home</a> <a href="/about">About</a></nav></header>
<main><${input.content}/></main>
```

Plain `<form method="post">` + a POST handler + redirect = zero-JS forms that just work.
