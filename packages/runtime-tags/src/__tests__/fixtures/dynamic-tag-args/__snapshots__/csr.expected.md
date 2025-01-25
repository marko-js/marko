# Render
```html
<button>
  Count: 1
</button>
<div>
  1
</div>
<!---->
```

# Mutations
```
INSERT button, div, #comment
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
<!---->
```

# Mutations
```
UPDATE button/#text1 "1" => "2"
UPDATE div/#text "1" => "2"
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
<!---->
```

# Mutations
```
UPDATE button/#text1 "2" => "3"
UPDATE div/#text "2" => "3"
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
<!---->
```

# Mutations
```
UPDATE button/#text1 "3" => "4"
UPDATE div/#text "3" => "4"
```