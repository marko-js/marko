# Render `{"value":"Hello"}`

```html
<div>
  <span>
    Hello
  </span>
  <span />
  <span />
</div>
```

# Mutations
```
INSERT div
```

# Render `{"value":false}`

```html
<div>
  <span />
  <span />
</div>
```

# Mutations
```
INSERT div/#text
REMOVE span before div/#text
```

# Render `{"value":"World"}`

```html
<div>
  <span>
    World
  </span>
  <span />
  <span />
</div>
```

# Mutations
```
INSERT div/span0
REMOVE #text before div/span0
UPDATE div/span0/#text " " => "World"
```

# Render `{"value":"!"}`

```html
<div>
  <span>
    !
  </span>
  <span />
  <span />
</div>
```

# Mutations
```
UPDATE div/span0/#text "World" => "!"
```