# Render
```html
<button
  id="inc"
>
  inc
</button>
<div>
  count: 0
</div>
LOADING A...LOADING B...
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div>
  count: 0
</div>
a: 0LOADING B...
```
## Change
```
REMOVE: ::text("LOADING A...")
INSERT: div + :is(::text("a: "), ::text("0"))
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div>
  count: 0
</div>
a: 0b: 0
```
## Change
```
REMOVE: ::text("LOADING B...")
INSERT: ::text@3 + :is(::text("b: "), ::text("0"))
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<div>
  count: 1
</div>
error: BOOMb: 10
```
## Change
```
INSERT: div + :is(::text("error: "), ::text("BOOM"))
REMOVE: ::text@7 + ::text("a: ")
REMOVE: ::text@7 + ::text("0")
UPDATE: div::text@7 "0" => "1"
UPDATE: ::text@14 "0" => "10"
UPDATE: ::text@7 "" => "BOOM"
```
