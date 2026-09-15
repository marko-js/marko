# Render `{"note":"n1"}`
```html
<main>
  <div>
    ax: n1
  </div>
  <button
    class="o"
  >
    o
  </button>
  <button
    class="i"
  >
    i
  </button>
</main>
```

# Update
```js
document.querySelector(".o").click();
```
```html
<main>
  <div>
    ax: n1
  </div>
  <div>
    bx: n1
  </div>
  <button
    class="o"
  >
    o
  </button>
  <button
    class="i"
  >
    i
  </button>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
UPDATE: main > div:nth-of-type(2)::text@4 "" => "n1"
UPDATE: main > div:nth-of-type(2)::text@0 "" => "b"
```

# Update `{"note":"n2"}`
```html
<main>
  <div>
    ax: n2
  </div>
  <div>
    bx: n2
  </div>
  <button
    class="o"
  >
    o
  </button>
  <button
    class="i"
  >
    i
  </button>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(1)::text@4 "n1" => "n2"
UPDATE: main > div:nth-of-type(2)::text@4 "n1" => "n2"
```

# Update
```js
document.querySelector(".i").click();
```
```html
<main>
  <div>
    ax: n2
  </div>
  <div>
    ay: n2
  </div>
  <div>
    bx: n2
  </div>
  <div>
    by: n2
  </div>
  <button
    class="o"
  >
    o
  </button>
  <button
    class="i"
  >
    i
  </button>
</main>
```
## Change
```
INSERT: main > div:nth-of-type(1) + div
INSERT: main > div:nth-of-type(3) + div
UPDATE: main > div:nth-of-type(2)::text@4 "" => "n2"
UPDATE: main > div:nth-of-type(2)::text@0 "" => "a"
UPDATE: main > div:nth-of-type(4)::text@4 "" => "n2"
UPDATE: main > div:nth-of-type(4)::text@0 "" => "b"
```

# Update `{"note":"n3"}`
```html
<main>
  <div>
    ax: n3
  </div>
  <div>
    ay: n3
  </div>
  <div>
    bx: n3
  </div>
  <div>
    by: n3
  </div>
  <button
    class="o"
  >
    o
  </button>
  <button
    class="i"
  >
    i
  </button>
</main>
```
## Change
```
UPDATE: main > div:nth-of-type(1)::text@4 "n2" => "n3"
UPDATE: main > div:nth-of-type(3)::text@4 "n2" => "n3"
UPDATE: main > div:nth-of-type(2)::text@4 "n2" => "n3"
UPDATE: main > div:nth-of-type(4)::text@4 "n2" => "n3"
```
