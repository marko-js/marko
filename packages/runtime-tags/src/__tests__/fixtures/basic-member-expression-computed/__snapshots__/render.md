# Render
```html
<div>
  a
</div>
<div>
  a
</div>
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  b
</div>
<div>
  c
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "a" => "b"
UPDATE: div:nth-of-type(2)::text "a" => "c"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  c
</div>
<div>
  c
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "b" => "c"
```

# Update
```js
container.querySelector("button").click();
```

# Update
```js
container.querySelector("button").click();
```
