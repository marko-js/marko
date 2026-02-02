# Render
```html
<div
  id="outside"
>
  0
</div>
loading...
```


# Render FLUSH
```html
<div
  id="outside"
>
  0
</div>
<div
  id="inside"
>
  0
</div>
```
# Console
```
LOG "effect ran value=0"
LOG "setup effect ran"
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<div
  id="inside"
>
  0
</div>
```


# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
loading...
```


# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<div
  id="inside"
>
  1
</div>
```
# Console
```
LOG "effect ran value=1"
```