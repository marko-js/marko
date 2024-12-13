# Render {"x":true}
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
inserted #comment0, #comment1, #text2, div3
```


# Render {"x":false}
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
div3/#text0: "1" => "2"
inserted #text2
removed #text after #text2
```


# Render {"x":true}
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
div3/#text0: "2" => "1"
inserted #text2
removed #text after #text2
```