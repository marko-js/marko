# Render
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
INSERT: .child::text("b")
REMOVE: .child
INSERT: #log + .child
INSERT: #log::text("b")
```
