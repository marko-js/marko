# Render
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
INSERT div0, div1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  0
</div>
<div>
  Dylan
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div0/#text "‍" => "0"
UPDATE div1/#text "‍" => "Dylan"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<div>
  Michael
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div0/#text "0" => "1"
UPDATE div1/#text "Dylan" => "Michael"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  Ryan
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div0/#text "1" => "2"
UPDATE div1/#text "Michael" => "Ryan"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<div>
  Luke
</div>
<button>
  Update
</button>
```

# Mutations
```
UPDATE div0/#text "2" => "3"
UPDATE div1/#text "Ryan" => "Luke"
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
UPDATE div0/#text "3" => "‍"
UPDATE div1/#text "Luke" => "‍"
```