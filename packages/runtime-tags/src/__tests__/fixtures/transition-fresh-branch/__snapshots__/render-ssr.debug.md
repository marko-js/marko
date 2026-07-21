# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
<div>
  count: 0
</div>
LOADING...
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
<div>
  count: 0
</div>
resolved: 0
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: div + :is(::text("resolved: "), ::text("0"))
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#show").click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
<div>
  count: 0
</div>
<span>
  late: 0
</span>
resolved: 0
```
## Change
```
INSERT: div + span
UPDATE: span::text@6 "" => "0"
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show"
>
  show
</button>
<div>
  count: 1
</div>
<span>
  late: 1
</span>
resolved: 1
```
## Change
```
UPDATE: div::text@7 "0" => "1"
UPDATE: ::text@10 "0" => "1"
UPDATE: span::text@6 "0" => "1"
```
