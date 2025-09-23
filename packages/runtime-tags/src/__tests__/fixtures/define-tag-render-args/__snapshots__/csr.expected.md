# Render
```html
<!---->
<div>
  1|Hello|1
</div>
<button>
  1
</button>
```

# Mutations
```
INSERT #comment, div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  1|Hello|2
</div>
<button>
  2
</button>
```

# Mutations
```
UPDATE div/#text4 "1" => "2"
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  1|Hello|3
</div>
<button>
  3
</button>
```

# Mutations
```
UPDATE div/#text4 "2" => "3"
UPDATE button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  1|Hello|4
</div>
<button>
  4
</button>
```

# Mutations
```
UPDATE div/#text4 "3" => "4"
UPDATE button/#text "3" => "4"
```