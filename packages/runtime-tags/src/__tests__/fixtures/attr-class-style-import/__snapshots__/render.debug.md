# Render
```html
<button>
  toggle
</button>
<div
  class="box"
/>
<div
  class="box"
/>
<div
  class="item lit warn"
/>
<div
  class="item"
/>
<div
  class="item lit"
/>
<div />
<div
  class="box"
/>
<div
  class="item"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="box"
/>
<div
  class="box"
/>
<div
  class="item lit warn"
/>
<div
  class="item on"
/>
<div
  class="item on"
/>
<div
  class="on"
/>
<div
  class="on"
/>
<div
  class="item on"
/>
<span
  class="item"
/>
```
## Change
```
UPDATE: div:nth-of-type(4)[class] "item" => "item on"
UPDATE: div:nth-of-type(5)[class] "item lit" => "item on"
UPDATE: div:nth-of-type(5)[class] "item lit on" => "item on"
UPDATE: div:nth-of-type(6)[class] null => "on"
UPDATE: div:nth-of-type(7)[class] "box" => "on"
UPDATE: div:nth-of-type(8)[class] "item" => "item on"
INSERT: div:nth-of-type(8) + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="box"
/>
<div
  class="box"
/>
<div
  class="item lit warn"
/>
<div
  class="item"
/>
<div
  class="item lit"
/>
<div
  class=""
/>
<div
  class="box"
/>
<div
  class="item"
/>
```
## Change
```
UPDATE: div:nth-of-type(4)[class] "item on" => "item"
UPDATE: div:nth-of-type(5)[class] "item on" => "item lit"
UPDATE: div:nth-of-type(5)[class] "item" => "item lit"
UPDATE: div:nth-of-type(6)[class] "on" => ""
UPDATE: div:nth-of-type(7)[class] "on" => "box"
UPDATE: div:nth-of-type(8)[class] "item on" => "item"
REMOVE: div:nth-of-type(8) + span
```
