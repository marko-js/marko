# Render `{"attrs":{"class":"x"}}`
```html
<div
  class="x"
/>
<div
  class="x"
  data-count="0"
/>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="x"
/>
<div
  class="x"
  data-count="1"
/>
<button>
  +
</button>
```
## Change
```
UPDATE: div:nth-of-type(2)[data-count] "0" => "1"
```
