# Render
```html
<button>
  0
</button>
<div>
  <input
    id="sM_.x"
  />
  <label
    for="sM_.x"
  >
    0
  </label>
</div>
<div>
  <input
    id="sM_.$x"
  />
</div>
<input
  id="sM_[\"a\\u0020b\"].y"
/>
<input
  id="sM_[\"a]\"].y"
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
    id="sM_.x"
  />
  <label
    for="sM_.x"
  >
    1
  </label>
</div>
<div>
  <input
    id="sM_.$x"
  />
</div>
<input
  id="sM_[\"a\\u0020b\"].y"
/>
<input
  id="sM_[\"a]\"].y"
/>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: div:nth-of-type(1) > label::text "0" => "1"
```
