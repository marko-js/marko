# Render {"value":"[if IE 7]"}

```html
<!--[if IE 6]-->
<!--[if IE 7]-->
```

# Mutations

```
inserted #comment0, #comment1
#comment1: "" => "[if IE 7]"
```

# Render {"value":"[if IE 8]"}

```html
<!--[if IE 6]-->
<!--[if IE 8]-->
```

# Mutations

```
#comment1: "[if IE 7]" => "[if IE 8]"
```

# Render {"value":"[if IE 9]"}

```html
<!--[if IE 6]-->
<!--[if IE 9]-->
```

# Mutations

```
#comment1: "[if IE 8]" => "[if IE 9]"
```
