# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="increment"
>
  0
</button>
<button
  id="a"
>
  a 0 0
</button>
```

# Update
```js
(document.querySelector("#a")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="increment"
>
  0
</button>
<button
  id="a"
>
  a 0 1
</button>
```
## Change
```
UPDATE: #a::text@4 "0" => "1"
```

# Update
```js
(document.querySelector("#increment")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="increment"
>
  1
</button>
<button
  id="a"
>
  a 1 1
</button>
```
## Change
```
UPDATE: #a::text@2 "0" => "1"
UPDATE: #increment::text "0" => "1"
```

# Update
```js
(document.querySelector("#toggle")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="increment"
>
  1
</button>
<b
  id="b"
>
  b 1
</b>
```
## Change
```
INSERT: #increment + #b
REMOVE: #b + #a
UPDATE: #b::text@2 "" => "1"
```

# Update
```js
(document.querySelector("#toggle")).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="increment"
>
  1
</button>
<button
  id="a"
>
  a 1 0
</button>
```
## Change
```
INSERT: #increment + #a
REMOVE: #a + #b
UPDATE: #a::text@2 "" => "1"
```
