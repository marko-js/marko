# Render `{"value":"Hello"}`

```html
<div>
  <span>
    Hello
  </span>
</div>
```

# Mutations
```
INSERT div
```

# Render `{"value":false}`

```html
<div />
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
</div>
```

# Mutations
```
INSERT div/span
REMOVE #text before div/span
UPDATE div/span/#text " " => "World"
```

# Render `{"value":"!"}`

```html
<div>
  <span>
    !
  </span>
</div>
```

# Mutations
```
UPDATE div/span/#text "World" => "!"
```