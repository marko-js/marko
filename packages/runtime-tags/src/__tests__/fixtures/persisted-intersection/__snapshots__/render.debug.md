# Render `{"title":"First"}`
```html
<div>
  <h1>
    First #0
  </h1>
  <h2>
    First / 10
  </h2>
  <button>
    +
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    First #1
  </h1>
  <h2>
    First / 9
  </h2>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "First #0" => "First #1"
UPDATE: div > h2::text "First / 10" => "First / 9"
```

# Update `{"title":"Second"}`
```html
<div>
  <h1>
    Second #1
  </h1>
  <h2>
    Second / 9
  </h2>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "First #1" => "Second #1"
UPDATE: div > h2::text "First / 9" => "Second / 9"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    Second #2
  </h1>
  <h2>
    Second / 8
  </h2>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Second #1" => "Second #2"
UPDATE: div > h2::text "Second / 9" => "Second / 8"
```

# Update
```html
<div>
  <h1>
    undefined #2
  </h1>
  <h2>
    undefined / 8
  </h2>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Second #2" => "undefined #2"
UPDATE: div > h2::text "Second / 8" => "undefined / 8"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    undefined #3
  </h1>
  <h2>
    undefined / 7
  </h2>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "undefined #2" => "undefined #3"
UPDATE: div > h2::text "undefined / 8" => "undefined / 7"
```
