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
```js
if (document.querySelector("p").textContent !== "pending ") {
throw new Error("The act is still pending on the page that stayed.");
}
```
