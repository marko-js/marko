# Render `{"show":true,"title":"Store"}`
```html
<main>
  <p>
    [Store] #0
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
    [Store] #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "[Store] #0" => "[Store] #1"
```

# Update `{"show":true,"title":"Store!"}`
```html
<main>
  <p>
    [Store!] #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "[Store] #1" => "[Store!] #1"
```

# Update `{"show":false,"title":"Store!"}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update `{"show":true,"title":"Fresh"}`
```html
<main>
  <p>
    [Fresh] #1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "[Fresh] #1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    [Fresh] #2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "[Fresh] #1" => "[Fresh] #2"
```
