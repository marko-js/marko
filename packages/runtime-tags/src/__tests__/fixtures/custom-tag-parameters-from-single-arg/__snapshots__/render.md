# Render
```html
<button
  class="inc"
>
  1
</button>
<div>
  Count: 1
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  2
</button>
<div>
  Count: 2
</div>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: div::text@7 "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  3
</button>
<div>
  Count: 3
</div>
```
## Change
```
UPDATE: .inc::text "2" => "3"
UPDATE: div::text@7 "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  4
</button>
<div>
  Count: 4
</div>
```
## Change
```
UPDATE: .inc::text "3" => "4"
UPDATE: div::text@7 "3" => "4"
```
