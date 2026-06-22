# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<section>
  shown content
</section>
```
## Change
```
INSERT: #toggle + section
INSERT: section::text("shown content")
```
