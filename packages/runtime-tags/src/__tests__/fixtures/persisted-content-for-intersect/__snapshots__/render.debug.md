# Render `{"title":"a"}`
```html
<main>
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
  <div
    class="box"
  >
    <span>
      a:p
    </span>
    <span>
      a:q
    </span>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > span
INSERT: .box > span:nth-of-type(1) + span
UPDATE: .box > span:nth-of-type(1)::text " " => "a:p"
UPDATE: .box > span:nth-of-type(2)::text " " => "a:q"
```

# Update `{"title":"b"}`
```html
<main>
  <div
    class="box"
  >
    <span>
      b:p
    </span>
    <span>
      b:q
    </span>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .box > span:nth-of-type(1)::text "a:p" => "b:p"
UPDATE: .box > span:nth-of-type(2)::text "a:q" => "b:q"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update `{"title":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="box"
  >
    <span>
      c:p
    </span>
    <span>
      c:q
    </span>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > span
INSERT: .box > span:nth-of-type(1) + span
UPDATE: .box > span:nth-of-type(1)::text " " => "c:p"
UPDATE: .box > span:nth-of-type(2)::text " " => "c:q"
```
