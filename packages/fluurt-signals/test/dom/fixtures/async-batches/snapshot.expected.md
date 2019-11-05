# Render {"sync":"a","async":{"value":"A"}}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render "ASYNC"
```html
aA
```

# Mutations
```
inserted #text1
inserted #text2
#text2: "" => "A"
```


# Render {"sync":"b","async":{"value":"B"}}
```html
aA
```

# Mutations
```

```


# Render "ASYNC"
```html
bB
```

# Mutations
```
#text1: "a" => "b"
#text2: "A" => "B"
```


# Render {"sync":"c","async":{"value":"C"}}
```html
bB
```

# Mutations
```

```


# Render "ASYNC"
```html
cC
```

# Mutations
```
#text1: "b" => "c"
#text2: "B" => "C"
```