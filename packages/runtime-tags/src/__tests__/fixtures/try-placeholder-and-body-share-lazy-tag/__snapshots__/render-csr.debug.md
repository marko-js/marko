# Render
```html
<pre
  id="log"
/>
```

# Update
```html
<pre
  id="log"
/>
<span
  class="child"
>
  p
</span>
```
## Change
```
INSERT: #log + .child
```

# Update
```html
<pre
  id="log"
>
  b
</pre>
<span
  class="child"
>
  b
</span>
```
## Change
```
INSERT: #log + .child
REMOVE: .child + .child
INSERT: #log::text("b")
```
