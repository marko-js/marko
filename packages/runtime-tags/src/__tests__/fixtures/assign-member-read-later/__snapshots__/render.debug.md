# Render
```html
<button
  class="write"
>
  write
</button>
<button
  class="read"
>
  read
</button>
<p />
```

# Update
```js
document.querySelector(".read").click();
```
```html
<button
  class="write"
>
  write
</button>
<button
  class="read"
>
  read
</button>
<p>
  false 1 0 false
</p>
```
## Change
```
UPDATE: p::text "" => "false 1 0 false"
```

# Update
```js
document.querySelector(".write").click();
```

# Update
```js
document.querySelector(".read").click();
```
```html
<button
  class="write"
>
  write
</button>
<button
  class="read"
>
  read
</button>
<p>
  true 2 1 true
</p>
```
## Change
```
UPDATE: p::text "false 1 0 false" => "true 2 1 true"
```
