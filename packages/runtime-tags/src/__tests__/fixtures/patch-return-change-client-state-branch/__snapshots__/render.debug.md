# Render `{"show":true}`
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="set"
>
  set
</button>
<p>
  none
</p>
```

# Update
```js
document.querySelector(".mode").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="set"
>
  set
</button>
<p>
  none
</p>
```
## Change
```
UPDATE: span::text "a" => "b"
```

# Update `{"show":true}`

# Update
```js
document.querySelector(".set").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="set"
>
  set
</button>
<p>
  b5
</p>
```
## Change
```
UPDATE: p::text "none" => "b5"
```
