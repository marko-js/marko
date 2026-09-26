# Render `{"suffix":"a"}`
```html
<span>
  0a
</span>
<p>
  [0a]
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
  1a
</span>
<p>
  [1a]
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "[0a]" => "[1a]"
UPDATE: span::text "0a" => "1a"
```

# Update
```js
assert.strictEqual(
document.querySelector("span").textContent +
  "|" +
  document.querySelector("p").textContent,
"1a|[1a]",
  );
```
