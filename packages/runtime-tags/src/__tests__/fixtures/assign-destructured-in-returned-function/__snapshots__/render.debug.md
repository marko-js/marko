# Render
```html
<button
  class="show"
>
  show
</button>
<div>
  0 0 0 0
</div>
```

# Update
```js
document.querySelector(".show").click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="set"
>
  set
</button>
<div>
  0 0 0 0
</div>
```
## Change
```
INSERT: .show + .set
```

# Update
```js
document.querySelector(".set").click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="set"
>
  set
</button>
<div>
  1 2 3 4
</div>
```
## Change
```
UPDATE: div::text@0 "0" => "1"
UPDATE: div::text@2 "0" => "2"
UPDATE: div::text@4 "0" => "3"
UPDATE: div::text@6 "0" => "4"
```
