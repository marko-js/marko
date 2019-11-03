# Render {"value":"Dynamic 1"}
```html
Static
```

# Mutations
```
inserted #text0, #text1, #text2, #text3
```


# Render "ASYNC"
```html
Static Dynamic 1
```

# Mutations
```
#text2: "" => "Dynamic 1"
```


# Render {"value":"Dynamic 2"}
```html
Static Dynamic 1
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
#text2: "Dynamic 1" => "Dynamic 2"
```


# Render {"value":"Dynamic 3"}
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