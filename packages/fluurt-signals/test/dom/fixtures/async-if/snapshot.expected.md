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
inserted div1
inserted div1/span1
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
removed span after div1/#text0
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
inserted div1/span1
```