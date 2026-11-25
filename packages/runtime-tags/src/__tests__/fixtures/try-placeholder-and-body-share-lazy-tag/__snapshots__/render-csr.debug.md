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
INSERT: .child
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
```
