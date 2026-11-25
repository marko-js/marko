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
REMOVE: .child
INSERT: #log::text("b")
INSERT: .child
INSERT: .child::text("b")
```
