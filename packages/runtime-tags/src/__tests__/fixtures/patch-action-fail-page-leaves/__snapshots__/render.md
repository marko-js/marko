# Render `{"label":"one"}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending 
</p>
<span>
  one
</span>
```

# Update `{"label":"two"}`

## Patch rejected (navigate)

# Update
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<span>
  one
</span>
```
## Change
```
UPDATE: p::text@8 "" => "true"
```

# Update
```js
if (document.querySelector("p").textContent !== "pending true") {
throw new Error("The act ended while the page was leaving.");
}
```
