# Render
```html
<button
  class="inc"
>
  1,10
</button>
<div>
  Counts: 1,10
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
  2,11
</button>
<div>
  Counts: 2,11
</div>
```
## Change
```
UPDATE: .inc::text@0 "1" => "2"
UPDATE: .inc::text@2 "10" => "11"
UPDATE: div::text@8 "1" => "2"
UPDATE: div::text@10 "10" => "11"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  3,12
</button>
<div>
  Counts: 3,12
</div>
```
## Change
```
UPDATE: .inc::text@0 "2" => "3"
UPDATE: .inc::text@2 "11" => "12"
UPDATE: div::text@8 "2" => "3"
UPDATE: div::text@10 "11" => "12"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  4,13
</button>
<div>
  Counts: 4,13
</div>
```
## Change
```
UPDATE: .inc::text@0 "3" => "4"
UPDATE: .inc::text@2 "12" => "13"
UPDATE: div::text@8 "3" => "4"
UPDATE: div::text@10 "12" => "13"
```
