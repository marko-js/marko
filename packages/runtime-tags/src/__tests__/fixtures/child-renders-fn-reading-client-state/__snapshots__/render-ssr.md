# Render `{"label":"a","x":0}`
```html
<p>
  f:a0
</p>
<button>
  more
</button>
<span>
  0
</span>
```
## Console
```
LOG "run" "f:a0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  f:a1
</p>
<button>
  more
</button>
<span>
  0
</span>
```
## Change
```
UPDATE: p::text "f:a0" => "f:a1"
```
## Console
```
LOG "run" "f:a1"
```
