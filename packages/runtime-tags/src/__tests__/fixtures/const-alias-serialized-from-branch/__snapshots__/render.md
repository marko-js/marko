# Render
```html
<button
  class="set"
/>
```

# Update
```js
document.querySelector(".set").click();
```
```html
<button
  class="read"
>
  1
</button>
<button
  class="set"
/>
```
## Change
```
INSERT: .read
UPDATE: .read::text " " => "1"
```

# Update
```js
document.querySelector(".read").click();
```
```html
<button
  class="read"
>
  1
</button>
<button
  class="set"
/>
```
## Change
```
UPDATE: body[data-a] null => "1"
```
