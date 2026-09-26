# Render `{"void":"BR","html":"Button","svg":"ClipPath","camel":"linearGradient"}`
```html
<br />
<br />
<button>
  html
</button>
<button>
  html
</button>
<svg>
  <clippath />
  <lineargradient />
</svg>
```

# Update
```js
for (const el of document.body.querySelectorAll("*")) {
el.setAttribute("data-name", el.localName);
  document.body.setAttribute(
"data-button",
document.querySelector("Button").constructor.name,
  );
}
```
```html
<br
  data-name="br"
/>
<br
  data-name="br"
/>
<button
  data-name="button"
>
  html
</button>
<button
  data-name="button"
>
  html
</button>
<svg
  data-name="svg"
>
  <clippath
    data-name="clipPath"
  />
  <lineargradient
    data-name="linearGradient"
  />
</svg>
```
## Change
```
UPDATE: br:nth-of-type(1)[data-name] null => "br"
UPDATE: br:nth-of-type(2)[data-name] null => "br"
UPDATE: button:nth-of-type(1)[data-name] null => "button"
UPDATE: button:nth-of-type(2)[data-name] null => "button"
UPDATE: svg[data-name] null => "svg"
UPDATE: svg > clippath[data-name] null => "clipPath"
UPDATE: svg > lineargradient[data-name] null => "linearGradient"
UPDATE: body[data-button] null => "HTMLButtonElement"
```
