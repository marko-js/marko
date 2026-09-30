# Render
```html
<input
  id="refined"
  value="0"
/>
<input
  id="refined2"
  value="0"
/>
<input
  id="plain"
  value="0"
/>
<input
  id="plain2"
  value="0"
/>
<div>
  number 0
</div>
```

# Update
```js
const el = document.getElementById(id);
el.value = text;
el.dispatchEvent(
  new (document.defaultView).Event("input", { bubbles: true }),
);
```
```html
<input
  default-value="0"
  id="refined"
  value="42"
/>
<input
  default-value="0"
  id="refined2"
  value="42"
/>
<input
  default-value="0"
  id="plain"
  value="42"
/>
<input
  default-value="0"
  id="plain2"
  value="42"
/>
<div>
  number 42
</div>
```
## Change
```
UPDATE: div::text@7 "0" => "42"
```

# Update
```js
const el = document.getElementById(id);
el.value = text;
el.dispatchEvent(
  new (document.defaultView).Event("input", { bubbles: true }),
);
```
```html
<input
  default-value="0"
  id="refined"
  value="7em"
/>
<input
  default-value="0"
  id="refined2"
  value="7em"
/>
<input
  default-value="0"
  id="plain"
  value="7em"
/>
<input
  default-value="0"
  id="plain2"
  value="7em"
/>
<div>
  string 7em
</div>
```
## Change
```
UPDATE: div::text@0 "number" => "string"
UPDATE: div::text@7 "42" => "7em"
```
