# Render
```html
<svg>
  <use
    xlink:href="#a"
    xml:lang="en"
  />
</svg>
<div
  xml:lang="en"
/>
<button>
  Toggle
</button>
```

# Update
```js
for (const el of document.querySelectorAll("use, div")) {
el.setAttribute(
  "data-ns",
  Array.from(el.attributes)
.filter((attr) => attr.name.includes(":"))
.map((attr) => String(attr.namespaceURI))
.join(" "),
);
}
```
```html
<svg>
  <use
    data-ns="http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
    xlink:href="#a"
    xml:lang="en"
  />
</svg>
<div
  data-ns="null"
  xml:lang="en"
/>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: svg > use[data-ns] null => "http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
UPDATE: div[data-ns] null => "null"
```

# Update
```js
document.querySelector("button").click();
```
```html
<svg>
  <use
    data-ns="http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
  />
</svg>
<div
  data-ns="null"
  xml:lang="fr"
/>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: svg > use[xlink:href] "#a" => null
UPDATE: svg > use[xml:lang] "en" => null
UPDATE: div[xml:lang] "en" => "fr"
```

# Update
```js
document.querySelector("button").click();
```
```html
<svg>
  <use
    data-ns="http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
    xlink:href="#a"
    xml:lang="en"
  />
</svg>
<div
  data-ns="null"
  xml:lang="en"
/>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: svg > use[xlink:href] null => "#a"
UPDATE: svg > use[xml:lang] null => "en"
UPDATE: div[xml:lang] "fr" => "en"
```

# Update
```js
for (const el of document.querySelectorAll("use, div")) {
el.setAttribute(
  "data-ns",
  Array.from(el.attributes)
.filter((attr) => attr.name.includes(":"))
.map((attr) => String(attr.namespaceURI))
.join(" "),
);
}
```
```html
<svg>
  <use
    data-ns="http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
    xlink:href="#a"
    xml:lang="en"
  />
</svg>
<div
  data-ns="null"
  xml:lang="en"
/>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: svg > use[data-ns] "http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace" => "http://www.w3.org/1999/xlink http://www.w3.org/XML/1998/namespace"
UPDATE: div[data-ns] "null" => "null"
```
