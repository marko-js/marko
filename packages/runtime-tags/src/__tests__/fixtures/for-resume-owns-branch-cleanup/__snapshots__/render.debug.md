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
container.querySelector("#a").click();
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
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@5 "" => "1"
```

# Update
```js
container.querySelector("#o").click();
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
REMOVE: #a + p
REMOVE: #a + p
REMOVE: #ref::text("init")
INSERT: #ref::text("item destroyed")
REMOVE: #ref::text("item destroyed")
INSERT: #ref::text("item destroyed")
```
