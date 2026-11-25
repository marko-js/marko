# Render
```html
<pre
  id="log"
/>
loading
<button
  class="toggle"
>
  true
</button>
```

# Update
```html
<pre
  id="log"
>
  [true]
</pre>
inner loading
<button
  class="toggle"
>
  true
</button>
```
## Change
```
REMOVE: ::text("loading")
INSERT: #log::text("[true]")
INSERT: ::text("inner loading")
```

# Update
```html
<pre
  id="log"
>
  [true]
</pre>
caught nope
<button
  class="toggle"
>
  true
</button>
```
## Change
```
REMOVE: ::text("inner loading")
INSERT: ::text("caught nope")
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<pre
  id="log"
>
  [true]
</pre>
caught nope
<button
  class="toggle"
/>
```
## Change
```
UPDATE: .toggle::text "true" => ""
```
