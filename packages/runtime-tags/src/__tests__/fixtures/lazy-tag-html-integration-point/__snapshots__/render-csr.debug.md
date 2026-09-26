# Render
```html
<svg>
  <foreignobject
    class="host"
  />
</svg>
```

# Update
```html
<svg>
  <foreignobject
    class="host"
  >
    <input
      value="lazy"
    />
  </foreignobject>
</svg>
```
## Change
```
INSERT: .host > input
```

# Update
```js
for (const el of document.querySelectorAll(".host *")) {
el.setAttribute("ns", el.namespaceURI);
}
```
```html
<svg>
  <foreignobject
    class="host"
  >
    <input
      ns="http://www.w3.org/1999/xhtml"
      value="lazy"
    />
  </foreignobject>
</svg>
```
## Change
```
UPDATE: .host > input[ns] null => "http://www.w3.org/1999/xhtml"
```
