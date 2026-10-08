# Render
```html
<div>
  <div
    class="lazy"
  >
    <button
      class="count"
    >
      0
    </button>
  </div>
  <button
    class="count"
  >
    10
  </button>
</div>
```

# Update
```js
document.querySelectorAll(".count")[1].click();
```
```html
<div>
  <div
    class="lazy"
  >
    <button
      class="count"
    >
      0
    </button>
  </div>
  <button
    class="count"
  >
    11
  </button>
</div>
```
## Change
```
UPDATE: div > button::text "10" => "11"
```
