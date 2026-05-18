# Render
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  0
</div>
```

# Update
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "0" => "1"
```

# Update
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: div::text "1" => "2"
```

# Update
```js
container.querySelector("button#multiplier").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (2)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  4
</div>
```
## Change
```
UPDATE: #multiplier::text@21 "1" => "2"
UPDATE: div::text "2" => "4"
```
