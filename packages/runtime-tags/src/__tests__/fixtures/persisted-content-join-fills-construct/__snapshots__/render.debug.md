# Render `{"show":false,"items":[{"n":0}],"$global":{"data":{"base":0}}}`

# Update `{"show":true,"items":[{"n":0},{"n":1}],"$global":{"data":{"base":0}}}`
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
INSERT: .bonus, section, section
UPDATE: section:nth-of-type(1) > div > button::text " " => "0"
UPDATE: section:nth-of-type(2) > div > button::text " " => "1"
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
UPDATE: section:nth-of-type(1) > div > button::text "0" => "1"
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
UPDATE: section:nth-of-type(1) > div > button::text "1" => "6"
UPDATE: section:nth-of-type(2) > div > button::text "1" => "6"
```

# Update `{"show":true,"items":[{"n":1}],"$global":{"data":{"base":2}}}`
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
      7
    </button>
  </div>
</section>
```
## Change
```
REMOVE: section + section
UPDATE: .tick::text "6" => "7"
```
