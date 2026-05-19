# Render
```html
<div />
<div />
<button>
  Click
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  class="baz"
/>
<div
  class="baz"
/>
<button>
  Click
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)[class] null => "baz"
UPDATE: div:nth-of-type(2)[class] null => "baz"
```
