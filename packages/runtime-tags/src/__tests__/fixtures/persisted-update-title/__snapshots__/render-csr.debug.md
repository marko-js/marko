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

# Update `{"$global":{"persisted":true,"docTitle":"Detail","docPath":"/detail","serializedGlobals":{"docTitle":true,"docPath":true}}}`

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
REMOVE: output::text("App — Home | Home overview | https://example.test/")
INSERT: output::text("App — Home | Home overview | https://example.test/")
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
UPDATE: button::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"docTitle":"Archive","docPath":"/archive","serializedGlobals":{"docTitle":true,"docPath":true}}}`

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"docTitle":"Archive","docPath":"/archive","serializedGlobals":{"docTitle":true,"docPath":true}}}`

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
REMOVE: output::text("App — Home | Home overview | https://example.test/")
INSERT: output::text("App — Home | Home overview | https://example.test/")
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
UPDATE: button::text "2" => "3"
```
