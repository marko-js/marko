# Render
```html
<button
  class="inc"
>
  0
</button>
<div>
  Marko 1
</div>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<div>
  Marko 2
</div>
```
## Change
```
UPDATE: .inc::text "0" => "1"
UPDATE: div::text "Marko 1" => "Marko 2"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  2
</button>
<div>
  Marko 3
</div>
```
## Change
```
UPDATE: .inc::text "1" => "2"
UPDATE: div::text "Marko 2" => "Marko 3"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  3
</button>
<div>
  Marko 4
</div>
```
## Change
```
UPDATE: .inc::text "2" => "3"
UPDATE: div::text "Marko 3" => "Marko 4"
```
