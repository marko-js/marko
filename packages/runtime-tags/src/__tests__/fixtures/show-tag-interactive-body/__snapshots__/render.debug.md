# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
c.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 0
</button>
```
## Change
```
INSERT: #toggle + #inc
```

# Update
```js
c.querySelector("#inc").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 1
</button>
```
## Change
```
UPDATE: #inc::text@6 "0" => "1"
```

# Update
```js
c.querySelector("#inc").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
UPDATE: #inc::text@6 "1" => "2"
```

# Update
```js
c.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + #inc
```

# Update
```js
c.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="inc"
>
  count 2
</button>
```
## Change
```
INSERT: #toggle + #inc
```
