# Render
```html
<main>
  <em>
    ka
  </em>
  <button>
    +
  </button>
</main>
```

# Update `click("button")`
```html
<main>
  <em>
    ka!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@1 "a" => "a!"
```

# Update `click("button")`
```html
<main>
  <em>
    ka!!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text@1 "a!" => "a!!"
```
