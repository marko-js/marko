# Render `{"$global":{"persisted":true,"docTitle":"Home","docPath":"/","serializedGlobals":{"docTitle":true,"docPath":true}}}`
```html
<button>
  0
</button>
<meta
  content="Home overview"
  name="description"
/>
<p>
  Home
</p>
<output />
```

# Update
```js
document.querySelector("output").textContent = [
document.querySelector("title").textContent,
document.querySelector("meta[name=description]").getAttribute("content"),
document.querySelector("link[rel=canonical]").getAttribute("href"),
  ].join(" | ");
```
```html
<button>
  0
</button>
<meta
  content="Home overview"
  name="description"
/>
<p>
  Home
</p>
<output>
  App — Home | Home overview | https://example.test/
</output>
```
## Change
```
INSERT: output::text("App — Home | Home overview | https://example.test/")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<meta
  content="Home overview"
  name="description"
/>
<p>
  Home
</p>
<output>
  App — Home | Home overview | https://example.test/
</output>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"$global":{"persisted":true,"docTitle":"Detail","docPath":"/detail","serializedGlobals":{"docTitle":true,"docPath":true}}}`
```html
<button>
  1
</button>
<meta
  content="Detail overview"
  name="description"
/>
<p>
  Detail
</p>
<output>
  App — Home | Home overview | https://example.test/
</output>
```
## Change
```
UPDATE: meta[content] "Home overview" => "Detail overview"
UPDATE: p::text "Home" => "Detail"
```

# Update
```js
document.querySelector("output").textContent = [
document.querySelector("title").textContent,
document.querySelector("meta[name=description]").getAttribute("content"),
document.querySelector("link[rel=canonical]").getAttribute("href"),
  ].join(" | ");
```
```html
<button>
  1
</button>
<meta
  content="Detail overview"
  name="description"
/>
<p>
  Detail
</p>
<output>
  App — Detail | Detail overview | https://example.test/detail
</output>
```
## Change
```
REMOVE: output::text("App — Home | Home overview | https://example.test/")
INSERT: output::text("App — Detail | Detail overview | https://example.test/detail")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<meta
  content="Detail overview"
  name="description"
/>
<p>
  Detail
</p>
<output>
  App — Detail | Detail overview | https://example.test/detail
</output>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"docTitle":"Archive","docPath":"/archive","serializedGlobals":{"docTitle":true,"docPath":true}}}`
```html
<button>
  2
</button>
<meta
  content="Archive overview"
  name="description"
/>
<p>
  Archive
</p>
<output>
  App — Detail | Detail overview | https://example.test/detail
</output>
```
## Change
```
UPDATE: meta[content] "Detail overview" => "Archive overview"
UPDATE: p::text "Detail" => "Archive"
```

# Update
```js
document.querySelector("output").textContent = [
document.querySelector("title").textContent,
document.querySelector("meta[name=description]").getAttribute("content"),
document.querySelector("link[rel=canonical]").getAttribute("href"),
  ].join(" | ");
```
```html
<button>
  2
</button>
<meta
  content="Archive overview"
  name="description"
/>
<p>
  Archive
</p>
<output>
  App — Archive | Archive overview | https://example.test/archive
</output>
```
## Change
```
REMOVE: output::text("App — Detail | Detail overview | https://example.test/detail")
INSERT: output::text("App — Archive | Archive overview | https://example.test/archive")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<meta
  content="Archive overview"
  name="description"
/>
<p>
  Archive
</p>
<output>
  App — Archive | Archive overview | https://example.test/archive
</output>
```
## Change
```
UPDATE: button::text "2" => "3"
```
