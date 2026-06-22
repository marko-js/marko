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
container.querySelector("#s").click();
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
  inner
</p>
```
## Change
```
INSERT: #s + p
```

# Update
```js
container.querySelector("#o").click();
```
```html
<div
  id="ref"
>
  inner destroyed
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
INSERT: #ref::text("inner destroyed")
```
