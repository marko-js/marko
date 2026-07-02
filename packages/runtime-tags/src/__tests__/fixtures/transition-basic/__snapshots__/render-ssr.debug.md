# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="other"
>
  other
</button>
<div>
  count: 0
</div>
<div>
  other: 0
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
  id="other"
>
  other
</button>
<div>
  count: 0
</div>
<div>
  other: 0
</div>
resolved: 0
```
## Change
```
REMOVE: ::text("LOADING...")
INSERT: div:nth-of-type(2) + :is(::text("resolved: "), ::text("0"))
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#other").click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="other"
>
  other
</button>
<div>
  count: 0
</div>
<div>
  other: 1
</div>
resolved: 0
```
## Change
```
UPDATE: div:nth-of-type(2)::text@7 "0" => "1"
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="other"
>
  other
</button>
<div>
  count: 1
</div>
<div>
  other: 1
</div>
resolved: 1
```
## Change
```
UPDATE: div:nth-of-type(1)::text@7 "0" => "1"
UPDATE: ::text@10 "0" => "1"
```

# Update
```js
container.querySelector("#inc").click();
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
<button
  id="other"
>
  other
</button>
<div>
  count: 3
</div>
<div>
  other: 1
</div>
resolved: 3
```
## Change
```
UPDATE: div:nth-of-type(1)::text@7 "1" => "3"
UPDATE: ::text@10 "1" => "3"
```
