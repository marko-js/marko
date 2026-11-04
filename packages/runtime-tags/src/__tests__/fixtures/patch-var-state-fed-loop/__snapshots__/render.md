# Render `{"suffix":"a"}`
```html
<span>
  xa
</span>
<p>
  [xa]
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  ya
</span>
<p>
  [ya]
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "[xa]" => "[ya]"
UPDATE: span::text "xa" => "ya"
```

# Update
```js
assert.strictEqual(
document.querySelector("span").textContent +
  "|" +
  document.querySelector("p").textContent,
"ya|[ya]",
  );
```
