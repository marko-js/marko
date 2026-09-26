# Render `{"void":"BR","html":"Button","svg":"ClipPath","camel":"linearGradient"}`
```html
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
## Console
```
WARN "The dynamic tag name `BR` parses as `br` here, so the client creates a different element than server rendered HTML. Use `br` instead."
WARN "The dynamic tag name `ClipPath` parses as `clipPath` here, so the client creates a different element than server rendered HTML. Use `clipPath` instead."
WARN "The dynamic tag name `Button` parses as `button` here, so the client creates a different element than server rendered HTML. Use `button` instead."
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
  data-name="BR"
/>
<button
  data-name="Button"
>
  html
</button>
<button
  data-name="Button"
>
  html
</button>
<svg
  data-name="svg"
>
  <clippath
    data-name="ClipPath"
  />
  <lineargradient
    data-name="linearGradient"
  />
</svg>
```
## Change
```
UPDATE: br[data-name] null => "BR"
UPDATE: button:nth-of-type(1)[data-name] null => "Button"
UPDATE: button:nth-of-type(2)[data-name] null => "Button"
UPDATE: svg[data-name] null => "svg"
UPDATE: svg > clippath[data-name] null => "ClipPath"
UPDATE: svg > lineargradient[data-name] null => "linearGradient"
UPDATE: body[data-button] null => "HTMLUnknownElement"
```
