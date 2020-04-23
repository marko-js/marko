# Render {"tag":"span"}
```html
<span
  a="1"
>
  BODY
</span>
```

# Mutations
```
inserted #text0, #text1, span2, #text3, #text4
```


# Render {}
```html
Hello
```

# Mutations
```
inserted #text1
inserted #text2
inserted #text3
removed #text after #text3
removed span after #text3
removed #text after #text3
```


# Render {"tag":"span"}
```html
<span
  a="1"
>
  BODY
</span>
```

# Mutations
```
inserted #text1
inserted span2
inserted #text3
removed #text after #text3
removed #text after #text3
removed #text after #text3
span2: attr(a) null => "1"
```


# Render {"tag":"a"}
```html
<a
  a="1"
>
  BODY
</a>
```

# Mutations
```
inserted #text1
inserted a2
inserted #text3
removed #text after #text3
removed span after #text3
removed #text after #text3
a2: attr(a) null => "1"
```


# Render {}
```html
<div
  a="1"
>
  BODY
</div>
```

# Mutations
```
inserted #text1
inserted div2
inserted #text3
removed #text after #text3
removed a after #text3
removed #text after #text3
```


--- Hydrate ---
# Render {"tag":"span"}
```html
<span
  a="1"
>
  BODY
</span>
```

# Mutations
```
inserted #text1
inserted #text3
span2: attr(a) "1" => "1"
removed #comment after #text0
removed #comment after #text3
```