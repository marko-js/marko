# Render
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
UPDATE: .inc::text "0" => "1"
UPDATE: span::text "0" => "1"
REMOVE: #log::text("[0]")
INSERT: #log::text("[0][1]")
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
REMOVE: .hide + span
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
