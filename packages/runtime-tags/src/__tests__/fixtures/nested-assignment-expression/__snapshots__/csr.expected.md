# Render
```html
<button>
  0
</button>
used to be
<span>
  0
</span>
which should be the same as
<span>
  0
</span>
```

# Mutations
```
INSERT button, #text0, span0, #text1, span1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
used to be
<span>
  0
</span>
which should be the same as
<span>
  0
</span>
```

# Mutations
```
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
used to be
<span>
  1
</span>
which should be the same as
<span>
  1
</span>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE span0/#text "0" => "1"
UPDATE span1/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
used to be
<span>
  2
</span>
which should be the same as
<span>
  2
</span>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE span0/#text "1" => "2"
UPDATE span1/#text "1" => "2"
```