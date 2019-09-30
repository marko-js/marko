# Render {"value":"Dynamic 1"}
```html
Static Dynamic 1
```

# Mutations
```
inserted #text0, #text1
```


# Render {"value":"Dynamic 2"}
```html
Static Dynamic 2
```

# Mutations
```
#text1: "Dynamic 1" => "Dynamic 2"
```


# Render {"value":"Dynamic 3"}
```html
Static Dynamic 3
```

# Mutations
```
#text1: "Dynamic 2" => "Dynamic 3"
```


--- Hydrate ---
# Render {"value":"Dynamic 1"}
```html
Static Dynamic 1
```

# Mutations
```
#text0: "Static Dynamic 1" => "Static "
inserted #text1
removed #comment before #text0
```