# Render {"value":"Dynamic 1"}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render "ASYNC"
```html
Static Dynamic 1
```

# Mutations
```
inserted #text0
inserted #text1
inserted #text2
inserted #text3
removed #text after #text3
removed #text after #text3
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