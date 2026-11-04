# Render
```html
<main>
  <div>
    ax
  </div>
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
    ax
  </div>
  <div>
    bx
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
UPDATE: main > div:nth-of-type(2)::text@0 "" => "b"
```
