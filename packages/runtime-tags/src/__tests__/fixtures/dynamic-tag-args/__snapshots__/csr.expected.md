# Render
```html
<button>
  Count: 1
</button>
<div>
  1
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
<!---->
```

# Mutations
```
INSERT button, div0, div1, div2, div3, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 2
</button>
<div>
  2
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
<!---->
```

# Mutations
```
UPDATE button/#text1 "1" => "2"
UPDATE div0/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 3
</button>
<div>
  3
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
<!---->
```

# Mutations
```
UPDATE button/#text1 "2" => "3"
UPDATE div0/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 4
</button>
<div>
  4
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
<!---->
```

# Mutations
```
UPDATE button/#text1 "3" => "4"
UPDATE div0/#text "3" => "4"
```