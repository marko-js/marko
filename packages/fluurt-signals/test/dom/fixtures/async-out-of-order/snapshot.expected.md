# Render {"value":"Dynamic 1","delay":3}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render {"value":"Dynamic 2","delay":0}
```html

```

# Mutations
```

```


# Render "ASYNC"
```html
Static Dynamic 2
```

# Mutations
```
inserted #text0
inserted #text1
inserted #text2
inserted #text3
removed #text after #text3
removed #text after #text3
```


# Render {"value":"Dynamic 3","delay":1}
```html
Static Dynamic 2
```

# Mutations
```

```


# Render "ASYNC"
```html
Static Dynamic 3
```

# Mutations
```
#text2: "Dynamic 2" => "Dynamic 3"
```