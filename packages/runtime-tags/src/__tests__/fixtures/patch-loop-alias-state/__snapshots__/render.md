# Render `{"items":[{"id":"a","name":"A"}]}`
```html
<main>
  <p>
    A/a#0
  </p>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    A/a#1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "A/a#0" => "A/a#1"
```

# Update `{"items":[{"id":"a","name":"A!"},{"id":"b","name":"B"}]}`
```html
<main>
  <p>
    A!/a#1
  </p>
  <p>
    B/b#1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(1)::text "A/a#1" => "A!/a#1"
UPDATE: main > p:nth-of-type(2)::text " " => "B/b#1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    A!/a#2
  </p>
  <p>
    B/b#2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "A!/a#1" => "A!/a#2"
UPDATE: main > p:nth-of-type(2)::text "B/b#1" => "B/b#2"
```
