# Render `{"show":false}`
```html
<div
  class="box"
/>
<button>
  0
</button>
```

# Update `{"show":true}`
```html
<div
  class="box"
/>
<span
  class="box"
/>
<button>
  0
</button>
```
## Change
```
INSERT: div + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="box"
/>
<span
  class="box"
/>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
