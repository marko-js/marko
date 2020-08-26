# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html

```

# Mutations
```
inserted #text0
```


# Render "ASYNC"
```html
<div>
  abc
</div>
```

# Mutations
```
removed #text in 
inserted div0
inserted div0/#text0
inserted div0/#text1
inserted div0/#text2
div0/#text0: " " => "a"
div0/#text1: " " => "b"
div0/#text2: " " => "c"
```


# Render {"children":[{"id":2,"text":"b"},{"id":3,"text":"c"},{"id":1,"text":"a"}]}
```html
<div>
  abc
</div>
```

# Mutations
```

```


# Render "ASYNC"
```html
<div>
  bca
</div>
```

# Mutations
```
removed #text before div0/#text0
inserted div0/#text2
```


# Render {"children":[]}
```html
<div>
  bca
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
removed #text before 
removed #text before 
removed #text before div0/#text0
```