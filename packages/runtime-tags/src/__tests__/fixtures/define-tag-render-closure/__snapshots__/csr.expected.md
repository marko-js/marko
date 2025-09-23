# Render
```html
<!---->
<div>
  1
</div>
<!---->
<div>
  1
</div>
<!---->
<button>
  1
</button>
```

# Mutations
```
INSERT #comment0, div0, #comment1, div1, #comment2, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  2
</div>
<!---->
<div>
  2
</div>
<!---->
<button>
  2
</button>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div0/#text "1" => "2"
UPDATE div1/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  3
</div>
<!---->
<div>
  3
</div>
<!---->
<button>
  3
</button>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div0/#text "2" => "3"
UPDATE div1/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  4
</div>
<!---->
<div>
  4
</div>
<!---->
<button>
  4
</button>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div0/#text "3" => "4"
UPDATE div1/#text "3" => "4"
```