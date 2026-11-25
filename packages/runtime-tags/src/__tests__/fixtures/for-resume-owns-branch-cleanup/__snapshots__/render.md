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
  id="a"
>
  A
</button>
<p>
  item 0
</p>
```

# Update
```js
document.querySelector("#a").click();
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
  id="a"
>
  A
</button>
<p>
  item 0
</p>
<p>
  item 1
</p>
```
## Change
```
INSERT: p:nth-of-type(2)
```

# Update
```js
document.querySelector("#o").click();
```
```html
<div
  id="ref"
>
  item destroyed
</div>
<button
  id="o"
>
  O
</button>
<button
  id="a"
>
  A
</button>
```
## Change
```
REMOVE: p
REMOVE: p
INSERT: #ref::text("item destroyed")
REMOVE: #ref::text("init")
REMOVE: #ref::text("item destroyed")
INSERT: #ref::text("item destroyed")
```
