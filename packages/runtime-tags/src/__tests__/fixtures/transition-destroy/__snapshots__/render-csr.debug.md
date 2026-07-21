# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="hide"
>
  hide
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
<button
  id="hide"
>
  hide
</button>
<div>
  count: 0
</div>
LOADING...
```
## Change
```
INSERT: div + ::text("LOADING...")
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="hide"
>
  hide
</button>
<div>
  count: 0
</div>
resolved: 0
```
## Change
```
INSERT: div + :is(::text("resolved: "), ::text("0"))
REMOVE: ::text@10 + ::text("LOADING...")
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#hide").click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="hide"
>
  hide
</button>
<div>
  count: 1
</div>
```
## Change
```
REMOVE: div + ::text("resolved: ")
REMOVE: div + ::text("0")
UPDATE: div::text@7 "0" => "1"
```
