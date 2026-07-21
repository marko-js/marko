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
LOADING A...LOADING B...
```
## Change
```
INSERT: div + ::text("LOADING A...")
INSERT: ::text@0 + ::text("LOADING B...")
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
INSERT: div + :is(::text("a: "), ::text("0"))
REMOVE: ::text@3 + ::text("LOADING A...")
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
INSERT: ::text@3 + :is(::text("b: "), ::text("0"))
REMOVE: ::text@7 + ::text("LOADING B...")
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
a: 1b: 10
```
## Change
```
UPDATE: div::text@7 "0" => "1"
UPDATE: ::text@7 "0" => "10"
UPDATE: ::text@3 "0" => "1"
```
