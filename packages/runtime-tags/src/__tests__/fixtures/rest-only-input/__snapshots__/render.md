# Render
```html
<main>
  <em>
    a
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
    a!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a" => "a!"
```

# Update `click("button")`
```html
<main>
  <em>
    a!!
  </em>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "a!" => "a!!"
```
