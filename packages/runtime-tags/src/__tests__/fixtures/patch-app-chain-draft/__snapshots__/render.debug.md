# Render `{"page":0,"$global":{"params":{"page":1},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="home"
  >
    home:0
  </button>
</main>
```

# Update `{"page":1,"$global":{"params":{"page":1},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="of"
  >
    1
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
REMOVE: main > button
INSERT: main > :is(.next, .of)
UPDATE: .of::text "" => "1"
INSERT: .of + .limit
```

# Update
```js
document.querySelector(".next").click();
```
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="of"
  >
    1
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
UPDATE: .of::text "1" => "1"
UPDATE: .of::text "2" => "1"
```

# Update `{"page":1,"$global":{"params":{"page":2},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="prev"
  >
    prev 1
  </span>
  <span
    class="of"
  >
    2
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
INSERT: .next + .prev
UPDATE: .of::text "1" => "2"
```

# Update `{"page":1,"$global":{"params":{"page":5},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="prev"
  >
    prev 4
  </span>
  <span
    class="of"
  >
    5
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
UPDATE: .prev::text@5 "1" => "4"
UPDATE: .of::text "2" => "5"
```

# Update `{"page":0,"$global":{"params":{"page":5},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="home"
  >
    home:0
  </button>
</main>
```
## Change
```
REMOVE: main > button
REMOVE: main > span
REMOVE: main > span
REMOVE: main > span
INSERT: main > .home
UPDATE: .home::text@5 "" => "0"
```

# Update `{"page":1,"$global":{"params":{"page":3},"total":90}}`
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="prev"
  >
    prev 2
  </span>
  <span
    class="of"
  >
    3
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
REMOVE: main > button
INSERT: main > :is(.next, .of)
INSERT: .next + .prev
UPDATE: .of::text "" => "3"
INSERT: .of + .limit
```

# Update
```js
document.querySelector(".next").click();
```
```html
<header>
  <button
    class="menu"
  >
    open
  </button>
</header>
<main>
  <button
    class="next"
  >
    next
  </button>
  <span
    class="prev"
  >
    prev 2
  </span>
  <span
    class="of"
  >
    3
  </span>
  <span
    class="limit"
  >
    of 9
  </span>
</main>
```
## Change
```
UPDATE: .of::text "3" => "3"
UPDATE: .of::text "4" => "3"
```
