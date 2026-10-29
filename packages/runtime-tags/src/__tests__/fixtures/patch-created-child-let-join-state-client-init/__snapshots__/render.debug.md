# Render
```html
<button
  class="inc"
>
  0
</button>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"show":true}`
```html
<button
  class="inc"
>
  1
</button>
<button
  class="set"
>
  set
</button>
<p>
  2
</p>
```
## Change
```
INSERT: .inc + :is(.set, p)
UPDATE: p::text " " => "2"
```

# Update
```js
document.querySelector("button.set").click();
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="set"
>
  set
</button>
<p>
  z1
</p>
```
## Change
```
UPDATE: p::text "2" => "z1"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  2
</button>
<button
  class="set"
>
  set
</button>
<p>
  z1
</p>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```

# Update `{"show":true}`
