# Render
```html
<div>
  a
</div>
<div>
  a
</div>
<button>
  Update
</button>
```

# Mutations
```
INSERT div0, div1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  b
</div>
<div>
  c
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div1/#text "a" => "c"
UPDATE div0/#text "a" => "b"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  c
</div>
<div>
  c
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div0/#text "b" => "c"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  ‍
</div>
<div>
  ‍
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div1/#text "c" => "‍"
UPDATE div0/#text "c" => "‍"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  ‍
</div>
<div>
  ‍
</div>
<button>
  Update
</button>
```
