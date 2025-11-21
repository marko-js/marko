# Render
```html
<div
  id="outside"
>
  0
</div>
<pre />
```


# Render ASYNC
```html
<div
  id="outside"
>
  0
</div>
loading...
<pre />
```


# Render ASYNC
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
<pre>
  
effect ran value=0
setup effect ran
</pre>
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
<pre>
  
effect ran value=0
setup effect ran
</pre>
```


# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
loading...
<pre>
  
effect ran value=0
setup effect ran
</pre>
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
<pre>
  
effect ran value=0
setup effect ran
effect ran value=1
</pre>
```
