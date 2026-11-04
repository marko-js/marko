# Render `{"label":"a"}`
```html
<em
  title="a sM_TA"
>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em
    title="a sM_UTA"
  >
    2
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<em
  title="b sM_TA"
>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em
    title="b sM_UTA"
  >
    2
  </em>
</section>
```
## Change
```
UPDATE: em[title] "a sM_TA" => "b sM_TA"
UPDATE: section > em[title] "a sM_UTA" => "b sM_UTA"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em
  title="b sM_TA"
>
  1
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

# Update `{"label":"c"}`
```html
<em
  title="c sM_TA"
>
  1
</em>
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
UPDATE: em[title] "b sM_TA" => "c sM_TA"
```
