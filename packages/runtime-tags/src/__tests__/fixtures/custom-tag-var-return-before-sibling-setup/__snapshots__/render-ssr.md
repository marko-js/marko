# Render
```html
<div
  class="swatch"
/>
<button>
  Toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="swatch"
/>
<button>
  Toggle
</button>
<div
  class="box"
/>
<div
  class="swatch"
/>
<span>
  blue
</span>
```
## Change
```
INSERT: button + :is(.cM_0, .box, .cM_1, div, span)
```

# Update
```js
const pre = document.createElement("pre");
// Custom property names differ between debug and optimized builds.
pre.textContent = Array.from(document.querySelectorAll("style"), (style) =>
  style.textContent.replace(/--[^:]+/g, "--var"),
).join("\n");
document.querySelector("button").after(pre);
```
```html
<div
  class="swatch"
/>
<button>
  Toggle
</button>
<pre>
  .sM_1~*{--var:blue;}
.cM_0~*{--var:blue;}
.cM_1~*{--var:blue;}
</pre>
<div
  class="box"
/>
<div
  class="swatch"
/>
<span>
  blue
</span>
```
## Change
```
INSERT: button + pre
```
