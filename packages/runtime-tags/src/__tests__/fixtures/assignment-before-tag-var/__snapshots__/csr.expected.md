# Render
```html
<button>
  +
</button>
<span>
  0 was ‍
</span>
```

# Mutations
```
INSERT button, span
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<span>
  1 was 0
</span>
```

# Mutations
```
UPDATE span/#text2 "‍" => "0"
UPDATE span/#text0 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<span>
  2 was 1
</span>
```

# Mutations
```
UPDATE span/#text2 "0" => "1"
UPDATE span/#text0 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<span>
  3 was 2
</span>
```

# Mutations
```
UPDATE span/#text2 "1" => "2"
UPDATE span/#text0 "2" => "3"
```