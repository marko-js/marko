# Render
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
/>
```

# Update
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
/>
loading
```
## Change
```
INSERT: ::text("loading")
```

# Update
```html
<pre
  id="log"
>
  [0]
</pre>
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
/>
<span>
  0
</span>
```
## Change
```
REMOVE: ::text("loading")
INSERT: #log::text("[0]")
INSERT: span
INSERT: span::text("0")
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<pre
  id="log"
>
  [0][1]
</pre>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
/>
<span>
  1
</span>
```
## Change
```
REMOVE: #log::text("[0]")
INSERT: #log::text("[0][1]")
UPDATE: .inc::text "0" => "1"
UPDATE: span::text "0" => "1"
```

# Update
```js
document.querySelector(".hide").click();
```
```html
<pre
  id="log"
>
  [0][1]
</pre>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
/>
```
## Change
```
REMOVE: span
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<pre
  id="log"
>
  [0][1]
</pre>
<button
  class="inc"
>
  2
</button>
<button
  class="hide"
/>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```
