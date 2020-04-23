# Render {"children":[{"id":1,"text":"a"},{"id":2,"text":"b"},{"id":3,"text":"c"}]}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render "ASYNC"
```html
<div>
  abc
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
inserted div1/#text1
inserted div1/#text2
inserted div1/#text3
inserted div1/#text4
inserted div1/#text5
inserted div1/#text6
inserted div1/#text7
inserted div1/#text8
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
removed #text before div1/#text7
inserted div1/#text6
removed #text before div1/#text8
inserted div1/#text7
removed #text before div1/#text0
inserted div1/#text8
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
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before 
removed #text before div1/#text0
```