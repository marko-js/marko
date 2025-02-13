# Render `{"x":true}`

```html
<!---->
<!---->
Hello
<div>
  1
</div>
```

# Mutations
```
INSERT #comment0, #comment1, #text, div
```

# Render `{"x":false}`

```html
<!---->
<!---->
Goodbye
<div>
  2
</div>
```

# Mutations
```
UPDATE div/#text "1" => "2"
INSERT #text
REMOVE #text after #text
```

# Render `{"x":true}`

```html
<!---->
<!---->
Hello
<div>
  1
</div>
```

# Mutations
```
UPDATE div/#text "2" => "1"
INSERT #text
REMOVE #text after #text
```