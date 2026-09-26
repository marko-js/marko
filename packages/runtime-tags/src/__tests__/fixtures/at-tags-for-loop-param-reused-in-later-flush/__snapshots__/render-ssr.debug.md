# Render `{"items":[{"text":"a"},{"text":"b"}]}`
```html
<button
  id="open"
>
  open
</button>
```

# Update
```html
<button
  id="open"
>
  open
</button>
<button
  id="pick"
>
  pick
</button>
<div />
```
## Change
```
INSERT: #open + #pick
INSERT: #pick::text("pick")
INSERT: #pick + div
```

# Update
```js
document.querySelector("#pick").click();
```
```html
<button
  id="open"
>
  open
</button>
<button
  id="pick"
>
  pick
</button>
<div>
  b
</div>
```
## Change
```
UPDATE: div::text "" => "b"
```
