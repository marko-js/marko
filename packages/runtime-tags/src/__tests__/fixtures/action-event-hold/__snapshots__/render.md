# Render
```html
<button
  id="claimed"
>
  0
</button>
<button
  id="unclaimed"
>
  idle
</button>
```

# Update
```js
document.querySelector("#claimed").click();
```
```html
<button
  id="claimed"
>
  1
</button>
<button
  id="unclaimed"
>
  pending
</button>
```
## Change
```
UPDATE: #unclaimed::text "idle" => "pending"
UPDATE: #claimed::text "0" => "1"
```

# Update
```html
<button
  id="claimed"
>
  1
</button>
<button
  id="unclaimed"
>
  idle
</button>
```
## Change
```
UPDATE: #unclaimed::text "pending" => "idle"
```

# Update
```js
document.querySelector("#unclaimed").click();
```
```html
<button
  id="claimed"
>
  2
</button>
<button
  id="unclaimed"
>
  pending
</button>
```
## Change
```
UPDATE: #unclaimed::text "idle" => "pending"
UPDATE: #claimed::text "1" => "2"
```

# Update
```html
<button
  id="claimed"
>
  1
</button>
<button
  id="unclaimed"
>
  idle
</button>
```
## Change
```
UPDATE: #unclaimed::text "pending" => "idle"
UPDATE: #claimed::text "2" => "1"
```
