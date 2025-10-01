# Render `{"message":"hello"}`

```html
<div />
<button>
  0
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
  <span>
    hello
  </span>
</div>
<button>
  1
</button>
```

# Mutations
```
UPDATE button/#text "0" => "1"
INSERT div/span
UPDATE div/span/#text " " => "hello"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <span>
    hello
  </span>
</div>
<button>
  2
</button>
```

# Mutations
```
UPDATE button/#text "1" => "2"
```