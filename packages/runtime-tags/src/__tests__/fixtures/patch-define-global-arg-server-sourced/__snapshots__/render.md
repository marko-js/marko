# Render `{"$global":{"text":"a"}}`
```html
<pre
  id="log"
>
  a
</pre>
<p>
  a
</p>
<button>
  toggle
</button>
```

# Update `{"$global":{"text":"b"}}`
```html
<pre
  id="log"
>
  b
</pre>
<p>
  b
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
REMOVE: #log::text("a")
INSERT: #log::text("b")
```

# Update
```js
document.querySelector("button").click();
```
```html
<pre
  id="log"
>
  b
</pre>
<p>
  b
</p>
<span>
  b
</span>
<button>
  toggle
</button>
```
## Change
```
INSERT: p + span
UPDATE: span::text " " => "b"
```

# Update `{"$global":{"text":"c"}}`
```html
<pre
  id="log"
>
  c
</pre>
<p>
  c
</p>
<span>
  c
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: span::text "b" => "c"
REMOVE: #log::text("b")
INSERT: #log::text("c")
```

# Update
```js
document.querySelector("button").click();
```
```html
<pre
  id="log"
>
  c
</pre>
<p>
  c
</p>
<button>
  toggle
</button>
```
## Change
```
REMOVE: p + span
```
