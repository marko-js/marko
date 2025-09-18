# Render
```html
<button>
  0
</button>
<div>
  Hello Ryan 0
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
  1
</button>
<div>
  Hello Ryan 1
</div>
<!---->
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE div/#text3 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  Hello Ryan 2
</div>
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text3 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
<div>
  Hello Ryan 3
</div>
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text3 "2" => "3"
```