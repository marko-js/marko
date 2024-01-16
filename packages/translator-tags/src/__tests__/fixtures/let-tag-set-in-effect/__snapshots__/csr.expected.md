# Render {}
```html
<span>
  1
</span>
<span>
  0
</span>
```

# Mutations
```
inserted span0, span1
```


# Render "ASYNC"
```html
<span>
  2
</span>
<span>
  1
</span>
```

# Mutations
```
span1/#text0: "0" => "1"
span0/#text0: "1" => "2"
```


# Render "ASYNC"
```html
<span>
  2
</span>
<span>
  2
</span>
```

# Mutations
```
span1/#text0: "1" => "2"
```