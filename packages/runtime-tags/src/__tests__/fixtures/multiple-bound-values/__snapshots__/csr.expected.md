# Render
```html
<button>
  0
</button>
<button>
  0
</button>
<div>
  0 0
</div>
```

# Mutations
```
INSERT button0, button1, div
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  1
</button>
<button>
  1
</button>
<div>
  1 1
</div>
```

# Mutations
```
UPDATE div/#text0 "0" => "1"
UPDATE button0/#text "0" => "1"
UPDATE div/#text2 "0" => "1"
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  2
</button>
<button>
  2
</button>
<div>
  2 2
</div>
```

# Mutations
```
UPDATE div/#text0 "1" => "2"
UPDATE button0/#text "1" => "2"
UPDATE div/#text2 "1" => "2"
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  3
</button>
<button>
  3
</button>
<div>
  3 3
</div>
```

# Mutations
```
UPDATE div/#text0 "2" => "3"
UPDATE button0/#text "2" => "3"
UPDATE div/#text2 "2" => "3"
UPDATE button1/#text "2" => "3"
```