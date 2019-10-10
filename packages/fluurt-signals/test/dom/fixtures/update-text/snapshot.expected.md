# Render {"value":"Dynamic 1"}
```html
Static Dynamic 1
```

# Mutations
```
inserted #text0, #text1, #text2, #text3
```


# Render {"value":"Dynamic 2"}
```html
Static Dynamic 2
```

# Mutations
```
#text2: "Dynamic 1" => "Dynamic 2"
```


# Render {"value":"Dynamic 3"}
```html
Static Dynamic 3
```

# Mutations
```
#text2: "Dynamic 2" => "Dynamic 3"
```


--- Hydrate ---
# Render {"value":"Dynamic 1"}
```html
Static Dynamic 1
```

# Mutations
```
inserted #text2
#text1: "Static Dynamic 1" => "Static "
removed #comment after #text0
```