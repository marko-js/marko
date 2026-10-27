# Render `{"x":1,"promise":{}}`
```html
<pre
  id="log"
>
  early:new;late:same;
</pre>
```

# Update `{"x":2,"promise":{"value":"q"}}`
```html
<pre
  id="log"
>
  early:new;late:same;early:new;late:same;
</pre>
```
## Change
```
REMOVE: #log::text("early:new;late:same;")
INSERT: #log::text("early:new;late:same;early:new;")
INSERT: #log + ::text("loading")
REMOVE: #log + ::text("loading")
REMOVE: #log::text("early:new;late:same;early:new;")
INSERT: #log::text("early:new;late:same;early:new;late:same;")
```
