# Render {"show":true}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render "ASYNC"
```html
<div>
  <span>
    hi
  </span>
</div>
```

# Mutations
```
inserted #text0
inserted div1
inserted #text2
removed #text after #text2
removed #text after #text2
inserted div1/#text0
inserted div1/span1
inserted div1/#text2
removed #text after div1/#text2
removed #text after div1/#text2
```


# Render {"show":false}
```html
<div>
  <span>
    hi
  </span>
</div>
```

# Mutations
```

```


# Render "ASYNC"
```html
<div />
```

# Mutations
```
inserted div1/#text0
inserted div1/#text1
removed #text after div1/#text1
removed span after div1/#text1
removed #text after div1/#text1
```


# Render {"show":true}
```html
<div />
```

# Mutations
```

```


# Render "ASYNC"
```html
<div>
  <span>
    hi
  </span>
</div>
```

# Mutations
```
inserted div1/#text0
inserted div1/span1
inserted div1/#text2
removed #text after div1/#text2
removed #text after div1/#text2
```