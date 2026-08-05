# Render `{"kind":"a","title":"Store"}`
```html
<main>
  <div>
    <p>
      A Store #0
    </p>
  </div>
  <span>
    Store root #0
  </span>
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
  <div>
    <p>
      A Store #1
    </p>
  </div>
  <span>
    Store root #1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "Store root #0" => "Store root #1"
UPDATE: main > div > p::text@2 "Store #0" => "Store #1"
```

# Update `{"kind":"a","title":"Store!"}`
```html
<main>
  <div>
    <p>
      A Store! #1
    </p>
  </div>
  <span>
    Store! root #1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "Store root #1" => "Store! root #1"
UPDATE: main > div > p::text@2 "Store #1" => "Store! #1"
```

# Update `{"kind":"b","title":"Store!"}`
```html
<main>
  <div>
    <p>
      B 
    </p>
  </div>
  <span>
    Store! root #1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div > p
INSERT: main > div > p
```

# Update `{"kind":"b","title":"Plaza"}`
```html
<main>
  <div>
    <p>
      B Plaza @1
    </p>
  </div>
  <span>
    Plaza root #1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "Store! root #1" => "Plaza root #1"
UPDATE: main > div > p::text@2 "" => "Plaza @1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <p>
      B Plaza @2
    </p>
  </div>
  <span>
    Plaza root #2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "Plaza root #1" => "Plaza root #2"
UPDATE: main > div > p::text@2 "Plaza @1" => "Plaza @2"
```

# Update `{"kind":"c","title":"Plaza"}`
```html
<main>
  <div>
    <p>
      None 2
    </p>
  </div>
  <span>
    Plaza root #2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div > p
INSERT: main > div > p
UPDATE: main > div > p::text@5 "" => "2"
```

# Update `{"kind":"c","title":"Plaza!"}`
```html
<main>
  <div>
    <p>
      None 2
    </p>
  </div>
  <span>
    Plaza! root #2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "Plaza root #2" => "Plaza! root #2"
```
