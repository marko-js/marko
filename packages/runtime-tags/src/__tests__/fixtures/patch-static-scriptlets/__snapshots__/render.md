# Render `{"title":"hi","show":false}`
```html
<main>
  <p>
    HI! srv
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
<main
  data-flag="cli"
>
  <p>
    HI! srv
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-flag] null => "cli"
```

# Update `{"title":"yo","show":true}`
```html
<main
  data-flag="cli"
>
  <p>
    YO! srv
  </p>
  <span>
    YO! #1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text@0 "HI!" => "YO!"
UPDATE: main > p::text@4 "srv" => "srv"
INSERT: main > p + span
UPDATE: main > span::text " " => "YO! #1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-flag="cli"
>
  <p>
    YO! srv
  </p>
  <span>
    YO! #2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main[data-flag] "cli" => "cli"
UPDATE: main > span::text "YO! #1" => "YO! #2"
```
