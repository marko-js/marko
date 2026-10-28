# Render `{"on":false,"attrs":{"title":"a"}}`
```html
<input
  title="a"
  type="checkbox"
/>
<input
  title="a"
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
<input
  title="a"
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
<input
  title="b"
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
UPDATE: input:nth-of-type(1)[checked] null => ""
UPDATE: input:nth-of-type(1)[title] "a" => "b"
UPDATE: input:nth-of-type(2)[title] "a" => "b"
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
<input
  title="b"
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
