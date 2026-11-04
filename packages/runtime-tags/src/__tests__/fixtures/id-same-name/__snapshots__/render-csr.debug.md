# Render
```html
<button>
  0
</button>
<div>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    0
  </label>
</div>
<div>
  <input
    id="cM_1"
  />
</div>
<input
  id="cM_2"
/>
<input
  id="cM_3"
/>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    1
  </label>
</div>
<div>
  <input
    id="cM_1"
  />
</div>
<input
  id="cM_2"
/>
<input
  id="cM_3"
/>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div:nth-of-type(1) > label::text "0" => "1"
```
