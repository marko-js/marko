# Render
```html
<main>
  <p>
    ok
  </p>
</main>
```

# Update `{"error":{}}`
```html
<main>
  <button>
    SHOWN_message
  </button>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > button + p
UPDATE: main > button::text " " => "SHOWN_message"
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <button>
    SHOWN_message!
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "SHOWN_message" => "SHOWN_message!"
```

# Update
```js
container.querySelector("button").click();
```
```html
<main>
  <button>
    SHOWN_message!!
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "SHOWN_message!" => "SHOWN_message!!"
```
