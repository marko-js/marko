# Render `{"pages":[{"key":1,"title":"a"}]}`
```html
<main>
  <p>
    Shop a
  </p>
  <button>
    0
  </button>
</main>
```

# Update `{"pages":[{"key":1,"title":"b","fail":true}]}`
```html
<main>
  caught
</main>
```
## Change
```
INSERT: main::text("caught")
REMOVE: main::text + p
REMOVE: main::text + button
```

# Update `{"pages":[{"key":2,"title":"d"}]}`
```html
<main>
  <p>
    Shop d
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: main::text("caught")
INSERT: main > :is(p, button)
UPDATE: main > p::text@0 "" => "Shop"
UPDATE: main > p::text@5 "" => "d"
UPDATE: main > button::text " " => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <p>
    Shop d
  </p>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"pages":[{"key":3,"title":"e","fail":true}]}`
```html
<main>
  caught
</main>
```
## Change
```
REMOVE: main > :is(p, button)
INSERT: main > :is(p, button)
INSERT: main::text("caught")
REMOVE: main::text + p
REMOVE: main::text + button
```

# Update `{"pages":[{"key":3,"title":"f","fail":true}]}`

# Update `{"pages":[{"key":3,"title":"g"}]}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
