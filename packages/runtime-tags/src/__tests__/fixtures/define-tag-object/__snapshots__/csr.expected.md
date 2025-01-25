# Render
```html
<div>
  {"foo":1,"bar":2}
</div>
<button>
  1
</button>
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":3}
</div>
<button>
  2
</button>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text "{\"foo\":1,\"bar\":2}" => "{\"foo\":1,\"bar\":3}"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":4}
</div>
<button>
  3
</button>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text "{\"foo\":1,\"bar\":3}" => "{\"foo\":1,\"bar\":4}"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  {"foo":1,"bar":5}
</div>
<button>
  4
</button>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div/#text "{\"foo\":1,\"bar\":4}" => "{\"foo\":1,\"bar\":5}"
```