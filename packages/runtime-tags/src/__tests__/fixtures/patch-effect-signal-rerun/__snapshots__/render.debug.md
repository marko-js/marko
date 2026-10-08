# Render `{"label":"one"}`
```html
<button>
  0
</button>
<p
  data-label="one"
/>
```

# Update `{"label":"two"}`
```html
<button>
  0
</button>
<p
  data-label="two"
/>
```
## Change
```
UPDATE: p[data-label] "one" => "two"
```

# Update `{"label":"three"}`
```html
<button>
  0
</button>
<p
  data-label="three"
/>
```
## Change
```
UPDATE: p[data-label] "two" => "three"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p
  data-label="three"
>
  x
</p>
```
## Change
```
INSERT: p::text("x")
UPDATE: button::text "0" => "1"
```
