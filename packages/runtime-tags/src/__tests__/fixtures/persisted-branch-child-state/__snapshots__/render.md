# Render `{"show":false,"title":"A","start":5}`
```html
<main />
```

# Update `{"show":true,"title":"A","start":5}`
```html
<main>
  <div
    class="counter"
  >
    <span>
      A: 5
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
</main>
```
## Change
```
INSERT: main > .counter
UPDATE: .counter > span::text@0 "" => "A"
UPDATE: .counter > span::text@3 "" => "5"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <div
    class="counter"
  >
    <span>
      A: 6
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: .counter > span::text@3 "5" => "6"
```

# Update `{"show":true,"title":"B","start":5}`
```html
<main>
  <div
    class="counter"
  >
    <span>
      B: 6
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: .counter > span::text@0 "A" => "B"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<main>
  <div
    class="counter"
  >
    <span>
      B: 7
    </span>
    <button
      class="inc"
    >
      +
    </button>
  </div>
</main>
```
## Change
```
UPDATE: .counter > span::text@3 "6" => "7"
```
