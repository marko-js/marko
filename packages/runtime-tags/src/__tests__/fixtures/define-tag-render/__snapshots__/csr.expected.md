# Render
```html
<!---->
<div>
  Hello Ryan 1
</div>
<button>
  1
</button>
<!---->
```

# Mutations
```
INSERT #comment0, div, button, #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello Ryan 2
</div>
<button>
  2
</button>
<!---->
```

# Mutations
```
UPDATE div/#text3 "1" => "2"
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello Ryan 3
</div>
<button>
  3
</button>
<!---->
```

# Mutations
```
UPDATE div/#text3 "2" => "3"
UPDATE button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  Hello Ryan 4
</div>
<button>
  4
</button>
<!---->
```

# Mutations
```
UPDATE div/#text3 "3" => "4"
UPDATE button/#text "3" => "4"
```