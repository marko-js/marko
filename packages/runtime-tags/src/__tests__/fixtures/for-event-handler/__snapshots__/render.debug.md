# Render
```html
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + button
UPDATE: button:nth-of-type(2)::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
UPDATE: button:nth-of-type(3)::text " " => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
```
## Change
```
INSERT: button:nth-of-type(3) + button
UPDATE: button:nth-of-type(4)::text " " => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
```
## Change
```
INSERT: button:nth-of-type(4) + button
UPDATE: button:nth-of-type(5)::text " " => "4"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<button>
  5
</button>
```
## Change
```
INSERT: button:nth-of-type(5) + button
UPDATE: button:nth-of-type(6)::text " " => "5"
```
