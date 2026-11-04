# Render
```html
<button>
  0
</button>
<div>
  <input
    id="sM_1"
  />
  <label
    for="sM_1"
  >
    0
  </label>
</div>
<div>
  <input
    id="sM_2"
  />
</div>
<input
  id="sM_3"
/>
<input
  id="sM_4"
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
    id="sM_1"
  />
  <label
    for="sM_1"
  >
    1
  </label>
</div>
<div>
  <input
    id="sM_2"
  />
</div>
<input
  id="sM_3"
/>
<input
  id="sM_4"
/>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div:nth-of-type(1) > label::text "0" => "1"
```
