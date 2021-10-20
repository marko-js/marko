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
inserted span0
```


# Render {"tag":{"___template":"Hello","___sourceNode":{}}}
```html
Hello
```

# Mutations
```
inserted #text0
removed span after #text0
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
inserted span0
removed #text after span0
span0: attr(a) null => "1"
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
inserted a0
removed span after a0
a0: attr(a) null => "1"
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
inserted div0
removed a after div0
div0: attr(a) null => "1"
```