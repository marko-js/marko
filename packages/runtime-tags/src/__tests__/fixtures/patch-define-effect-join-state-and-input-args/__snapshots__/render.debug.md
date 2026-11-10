# Render `{"x":1,"y":2}`
```html
<pre
  id="log"
>
  3
</pre>
<p>
  3
</p>
<button>
  +
</button>
```

# Update `{"x":3,"y":2}`
```html
<pre
  id="log"
>
  5
</pre>
<p>
  5
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "3" => "5"
REMOVE: #log::text("3")
INSERT: #log::text("5")
```

# Update
```js
document.querySelector("button").click();
```
```html
<pre
  id="log"
>
  7
</pre>
<p>
  7
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "5" => "7"
REMOVE: #log::text("5")
INSERT: #log::text("7")
```

# Update `{"x":3,"y":5}`
```html
<pre
  id="log"
>
  10
</pre>
<p>
  10
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "7" => "10"
REMOVE: #log::text("7")
INSERT: #log::text("10")
```
