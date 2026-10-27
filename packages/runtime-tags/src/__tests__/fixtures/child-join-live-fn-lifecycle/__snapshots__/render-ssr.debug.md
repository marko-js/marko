# Render `{"a":"x","b":"p"}`
```html
<p>
  x!0
</p>
<p>
  x!p
</p>
<button>
  +
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  x!1
</p>
<p>
  x!p
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x!0" => "x!1"
```
## Console
```
LOG "update" "x!1"
```
