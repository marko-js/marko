# Render `{"$global":{"label":"a","serializedGlobals":{"label":true}}}`
```html
<em>
  a 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    a 2
  </em>
</section>
```

# Update `{"$global":{"label":"b","serializedGlobals":{"label":true}}}`
```html
<em>
  b 1
</em>
<section>
  <button>
    clear
  </button>
  <em>
    b 2
  </em>
</section>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
UPDATE: section > em::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b 1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
```

# Update `{"$global":{"label":"c","serializedGlobals":{"label":true}}}`
```html
<em>
  c 1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
UPDATE: em::text@0 "b" => "c"
```
