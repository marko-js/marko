# Render `{"value":"Dynamic 1"}`

```html
Static Dynamic 1
```

# Mutations
```
INSERT #text0, #text1
```

# Render `{"value":"Dynamic 2"}`

```html
Static Dynamic 2
```

# Mutations
```
UPDATE #text1 "Dynamic 1" => "Dynamic 2"
```

# Render `{"value":"Dynamic 3"}`

```html
Static Dynamic 3
```

# Mutations
```
UPDATE #text1 "Dynamic 2" => "Dynamic 3"
```