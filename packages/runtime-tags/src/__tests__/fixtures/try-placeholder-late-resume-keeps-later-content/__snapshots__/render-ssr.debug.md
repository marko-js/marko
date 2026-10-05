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
<span
  class="body"
>
  10
</span>
<span
  class="after"
>
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
/>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
/>
<span
  class="body"
>
  11
</span>
<span
  class="after"
>
  1
</span>
```
## Change
```
UPDATE: .inc::text "0" => "1"
UPDATE: .body::text@1 "0" => "1"
UPDATE: .after::text "0" => "1"
```

# Update
```js
document.querySelector(".hide").click();
```
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
/>
<span
  class="after"
>
  1
</span>
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
/>
<button
  class="inc"
>
  2
</button>
<button
  class="hide"
/>
<span
  class="after"
>
  2
</span>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: .after::text "1" => "2"
```
