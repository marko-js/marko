# Render
```html
<button>
  0 0
</button>
<button>
  0 0
</button>
```

# Mutations
```
INSERT button0, button1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1 1
</button>
<button>
  1 1
</button>
```

# Mutations
```
UPDATE button0/#text0 "0" => "1"
UPDATE button0/#text2 "0" => "1"
UPDATE button1/#text0 "0" => "1"
UPDATE button1/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2 2
</button>
<button>
  2 2
</button>
```

# Mutations
```
UPDATE button0/#text0 "1" => "2"
UPDATE button0/#text2 "1" => "2"
UPDATE button1/#text0 "1" => "2"
UPDATE button1/#text2 "1" => "2"
```