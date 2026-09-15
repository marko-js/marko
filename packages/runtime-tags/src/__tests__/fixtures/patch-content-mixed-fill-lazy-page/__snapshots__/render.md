# Render `{"show":false,"base":0}`

# Update `{"show":true,"base":0}`
```html
<button
  class="bonus"
>
  bonus
</button>
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <button
      class="tick"
    >
      0
    </button>
  </div>
</section>
```
## Change
```
INSERT: .bonus, section
INSERT: .aside > .tick
UPDATE: .tick::text " " => "0"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="bonus"
>
  bonus
</button>
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <button
      class="tick"
    >
      1
    </button>
  </div>
</section>
```
## Change
```
UPDATE: .tick::text "0" => "1"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="bonus"
>
  bonus
</button>
<section>
  <h2>
    Panel
  </h2>
  <div
    class="aside"
  >
    <button
      class="tick"
    >
      6
    </button>
  </div>
</section>
```
## Change
```
UPDATE: .tick::text "1" => "6"
```

# Update `{"show":true,"base":2}`
