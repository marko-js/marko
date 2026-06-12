# Render
```html
<button
  id="toggle"
>
  Toggle
</button>
<span>
  0
</span>
<button
  id="inc"
>
  Inc
</button>
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="inc"
>
  Inc
</button>
```
## Change
```
REMOVE: #toggle + span
```

# Update
```js
container.querySelector("#toggle").click();
```

# Update
```html
<button
  id="toggle"
>
  Toggle
</button>
<span>
  0
</span>
<button
  id="inc"
>
  Inc
</button>
```
## Change
```
INSERT: #toggle + span
```
## Console
```
LOG "loaded"
```

# Update
```js
container.querySelector("#inc").click();
```
```html
<button
  id="toggle"
>
  Toggle
</button>
<span>
  1
</span>
<button
  id="inc"
>
  Inc
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
```
