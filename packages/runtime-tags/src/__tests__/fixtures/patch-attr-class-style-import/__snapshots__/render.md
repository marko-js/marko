# Render `{"show":false,"lit":false}`
```html
<button>
  toggle
</button>
<div
  class="box"
/>
<div
  class="item"
/>
<div
  class="item"
/>
<div />
<div
  class="box"
/>
```

# Update `{"show":true,"lit":true}`
```html
<button>
  toggle
</button>
<div
  class="box"
/>
<div
  class="item"
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
<span
  class="item"
/>
```
## Change
```
UPDATE: .item.on[class] "item" => "item on"
UPDATE: div:nth-of-type(4)[class] null => "on"
UPDATE: div:nth-of-type(5)[class] "box" => "on"
INSERT: div:nth-of-type(5) + span
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
<span
  class="item"
/>
```
## Change
```
UPDATE: div:nth-of-type(2)[class] "item" => "item on"
```
