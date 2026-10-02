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
INSERT: #log + ::text("inner loading")
INSERT: #log::text("[true]")
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
INSERT: #log + ::text("caught nope")
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
