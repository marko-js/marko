# Render
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<p>
  none
</p>
<button
  class="set"
>
  set
</button>
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
<p>
  none
</p>
<button
  class="set"
>
  set
</button>
```
## Change
```
UPDATE: span::text "a" => "b"
```

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
<p>
  b5
</p>
<button
  class="set"
>
  set
</button>
```
## Change
```
UPDATE: p::text "none" => "b5"
```
