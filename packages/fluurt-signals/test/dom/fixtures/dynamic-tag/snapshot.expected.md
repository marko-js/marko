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
removed span after #text1
inserted #text2
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
removed #text after #text1
inserted span2
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
removed span after #text1
inserted a2
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
removed a after #text1
inserted div2
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
span2: attr(a) "1" => "1"
inserted #text3
removed #comment after #text0
removed #comment after #text3
```