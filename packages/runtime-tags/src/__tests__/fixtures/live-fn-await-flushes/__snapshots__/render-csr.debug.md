# Render `{"x":1,"promise":{}}`
```html
<pre
  id="log"
>
  early:new;
</pre>
```

# Update `{"x":2,"promise":{"value":"q"}}`
```html
<pre
  id="log"
>
  early:new;early:new;
</pre>
```
## Change
```
REMOVE: #log::text("early:new;")
INSERT: #log::text("early:new;early:new;")
```

# Update
```html
<pre
  id="log"
>
  early:new;early:new;
</pre>
loading
```
## Change
```
INSERT: #log + ::text("loading")
```

# Update
```html
<pre
  id="log"
>
  early:new;early:new;late:same;
</pre>
```
## Change
```
REMOVE: #log + ::text("loading")
REMOVE: #log::text("early:new;early:new;")
INSERT: #log::text("early:new;early:new;late:same;")
```
