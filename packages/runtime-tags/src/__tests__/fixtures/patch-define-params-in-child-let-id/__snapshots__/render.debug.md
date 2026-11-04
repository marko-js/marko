# Render `{"label":"a"}`
```html
<em
  title="a sM_.#childScope/0@0.uid"
>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em
    title="a sM_.#childScope/1@1.#text/1@0.uid"
  >
    2
  </em>
</section>
```

# Update `{"label":"b"}`
```html
<em
  title="b sM_.#childScope/0@0.uid"
>
  1
</em>
<section>
  <button>
    clear
  </button>
  <em
    title="b sM_.#childScope/1@1.#text/1@0.uid"
  >
    2
  </em>
</section>
```
## Change
```
UPDATE: em[title] "a sM_.#childScope/0@0.uid" => "b sM_.#childScope/0@0.uid"
UPDATE: section > em[title] "a sM_.#childScope/1@1.#text/1@0.uid" => "b sM_.#childScope/1@1.#text/1@0.uid"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em
  title="b sM_.#childScope/0@0.uid"
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
  title="c sM_.#childScope/0@0.uid"
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
UPDATE: em[title] "b sM_.#childScope/0@0.uid" => "c sM_.#childScope/0@0.uid"
```
