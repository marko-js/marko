# Render
```html
<div
  id="ref"
>
  init
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
```

# Update
```js
document.querySelector("#s").click();
```
```html
<div
  id="ref"
>
  init
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
<p>
  leaf
</p>
```
## Change
```
INSERT: #s + p
```

# Update
```js
document.querySelector("#o").click();
```
```html
<div
  id="ref"
>
  leaf destroyed
</div>
<button
  id="o"
>
  O
</button>
<button
  id="s"
>
  S
</button>
```
## Change
```
REMOVE: #s + p
REMOVE: #ref::text("init")
INSERT: #ref::text("leaf destroyed")
```
