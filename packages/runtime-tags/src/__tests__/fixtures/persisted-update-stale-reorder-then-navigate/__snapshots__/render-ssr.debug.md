# Render `{"heading":"First","value":"pre-nav-data","tick":5,"$global":{"persisted":true}}`
```html
<h1>
  First clicked 0
</h1>
<main>
  fetching…
</main>
```

# Update `{"heading":"Second","value":"second-data","tick":6,"$global":{"persisted":true}}`
```html
<h1>
  Second clicked 0
</h1>
<main>
  fetching…
</main>
```
## Change
```
UPDATE: h1::text@0 "First" => "Second"
```

# Update
```html
<h1>
  Second clicked 0
</h1>
<main>
  fetching…
</main>
```
## Change
```
INSERT: t > button::text("pre-nav-data")
```

# Update update frame 1 of 2
```html
<h1>
  Third clicked 0
</h1>
<main>
  fetching…
</main>
```
## Change
```
UPDATE: h1::text@0 "Second" => "Third"
```

# Update `{"heading":"Third","value":"third-data","tick":7,"$global":{"persisted":true}}`
```html
<h1>
  Third clicked 0
</h1>
<main>
  <button>
    third-data
  </button>
</main>
```
## Change
```
REMOVE: main::text("fetching…")
INSERT: main > button
```

# Update
```js
container.querySelector("main button").click();
```
```html
<h1>
  Third clicked 1
</h1>
<main>
  <button>
    third-data
  </button>
</main>
```
## Change
```
UPDATE: h1::text@14 "0" => "1"
```
