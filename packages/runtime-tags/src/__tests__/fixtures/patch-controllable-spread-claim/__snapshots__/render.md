# Render `{"on":false,"attrs":{"title":"a"}}`
```html
<input
  title="a"
  type="checkbox"
/>
<p
  id="out"
>
  -
</p>
<button>
  interactive
</button>
```

# Update
```js
document.getElementById("out").textContent = String(
document.querySelector("input").checked,
  );
```
```html
<input
  title="a"
  type="checkbox"
/>
<p
  id="out"
>
  false
</p>
<button>
  interactive
</button>
```
## Change
```
REMOVE: #out::text("-")
INSERT: #out::text("false")
```

# Update `{"on":true,"attrs":{"title":"b"}}`
```html
<input
  default-checked=""
  title="b"
  type="checkbox"
/>
<p
  id="out"
>
  false
</p>
<button>
  interactive
</button>
```
## Change
```
UPDATE: input[checked] null => ""
UPDATE: input[title] "a" => "b"
```

# Update
```js
document.getElementById("out").textContent = String(
document.querySelector("input").checked,
  );
```
```html
<input
  default-checked=""
  title="b"
  type="checkbox"
/>
<p
  id="out"
>
  false
</p>
<button>
  interactive
</button>
```
## Change
```
REMOVE: #out::text("false")
INSERT: #out::text("false")
```
