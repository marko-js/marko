# Render
```html
<button>
  0
</button>
<div>
  <input
    id="sM_A"
  />
  <label
    for="sM_A"
  >
    0
  </label>
</div>
<div>
  <input
    id="sM_B"
  />
</div>
<input
  id="sM_R6a_00wbC"
/>
<input
  id="sM_R5a_01tC"
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
    id="sM_A"
  />
  <label
    for="sM_A"
  >
    1
  </label>
</div>
<div>
  <input
    id="sM_B"
  />
</div>
<input
  id="sM_R6a_00wbC"
/>
<input
  id="sM_R5a_01tC"
/>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div:nth-of-type(1) > label::text "0" => "1"
```
