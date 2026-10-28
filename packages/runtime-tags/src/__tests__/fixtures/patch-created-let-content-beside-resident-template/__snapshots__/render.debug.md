# Render `{"which":true,"label":"a","show":false}`
```html
<b>
  a
</b>
<button>
  toggle
</button>
```

# Update `{"which":false,"label":"b","show":true}`
```html
<i>
  b
</i>
<button>
  toggle
</button>
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static b
  </em>
</section>
```
## Change
```
INSERT: i
REMOVE: i + b
UPDATE: i::text " " => "b"
INSERT: button:nth-of-type(1) + :is(button, section)
```

# Update `{"which":false,"label":"c","show":true}`
```html
<i>
  c
</i>
<button>
  toggle
</button>
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static c
  </em>
</section>
```
## Change
```
UPDATE: i::text "b" => "c"
UPDATE: section > em::text@7 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<i>
  c
</i>
<button>
  toggle
</button>
<i>
  c
</i>
<button>
  x
</button>
<section>
  <button>
    clear
  </button>
  <em>
    static c
  </em>
</section>
```
## Change
```
INSERT: button:nth-of-type(1) + i
UPDATE: i:nth-of-type(2)::text " " => "c"
```

# Update
```js
assert.equal(document.querySelectorAll("i").length, 2);
```
