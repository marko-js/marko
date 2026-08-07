# Render
```html
<button
  id="tags"
>
  0
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  0
</div>
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  1
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
INSERT: #toggle + div
INSERT: div::text("1")
REMOVE: div + div
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: div::text "1" => "2"
```

# Update
```js
(document.querySelector("#toggle")).click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + div
```
