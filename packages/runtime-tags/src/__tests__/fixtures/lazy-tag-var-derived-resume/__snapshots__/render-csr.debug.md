# Render
```html
<button
  class="actions"
>
  inc
</button>
<button
  class="inc"
>
  inc
</button>
```

# Update
```html
<p>
  n 0
</p>
<button
  class="actions"
>
  inc
</button>
<button
  class="inc"
>
  inc
</button>
```
## Change
```
INSERT: p
UPDATE: p::text@2 "" => "0"
```

# Update
```js
document.querySelector(".actions").click();
```
```html
<p>
  n 1
</p>
<button
  class="actions"
>
  inc
</button>
<button
  class="inc"
>
  inc
</button>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<p>
  n 2
</p>
<button
  class="actions"
>
  inc
</button>
<button
  class="inc"
>
  inc
</button>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
