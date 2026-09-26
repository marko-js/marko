# Render `{"rest":{"aria-label":"a"}}`
```html
<button>
  update
</button>
<div
  aria-label="a"
  readonly=""
  tabindex="0"
>
  hi
</div>
<svg
  aria-label="a"
  tabindex="0"
  viewBox="0 0 10 10"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  update
</button>
<div
  aria-label="b"
  readonly=""
  tabindex="0"
>
  hi
</div>
<svg
  aria-label="b"
  tabindex="0"
  viewBox="0 0 10 10"
/>
```
## Change
```
UPDATE: div[aria-label] "a" => "b"
UPDATE: svg[aria-label] "a" => "b"
```
