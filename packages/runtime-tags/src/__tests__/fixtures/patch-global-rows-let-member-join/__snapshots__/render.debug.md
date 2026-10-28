# Render `{"$global":{"data":{"player":{"entries":[{"item":{"id":"a","name":"A","value":3},"qty":2},{"item":{"id":"b","name":"B","value":5},"qty":1}]}}}}`
```html
<article>
  <strong>
    A
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      2
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 6
    </button>
  </form>
</article>
<article>
  <strong>
    B
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      1
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 5
    </button>
  </form>
</article>
```

# Update
```js
document.querySelector(".inc").click();
```

# Update `{"$global":{"data":{"player":{"entries":[{"item":{"id":"a","name":"A","value":3},"qty":4},{"item":{"id":"b","name":"B","value":5},"qty":1}]}}}}`

# Update
```js
document.querySelector(".inc").click();
```
```html
<article>
  <strong>
    A
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      3
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 9
    </button>
  </form>
</article>
<article>
  <strong>
    B
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      1
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 5
    </button>
  </form>
</article>
```
## Change
```
UPDATE: article:nth-of-type(1) > form > span::text "2" => "3"
UPDATE: article:nth-of-type(1) > form > button:nth-of-type(3)::text@5 "6" => "9"
```

# Update `{"$global":{"data":{"player":{"entries":[{"item":{"id":"b","name":"B","value":5},"qty":2},{"item":{"id":"c","name":"C","value":7},"qty":1}]}}}}`
```html
<article>
  <strong>
    B
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      1
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 5
    </button>
  </form>
</article>
<article>
  <strong>
    C
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      1
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 7
    </button>
  </form>
</article>
```
## Change
```
REMOVE: article
INSERT: article:nth-of-type(1) + article
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<article>
  <strong>
    B
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      2
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 10
    </button>
  </form>
</article>
<article>
  <strong>
    C
  </strong>
  <form>
    <button
      class="dec"
    >
      -
    </button>
    <span
      class="v"
    >
      1
    </span>
    <button
      class="inc"
    >
      +
    </button>
    <button
      class="sell"
    >
      Sell 7
    </button>
  </form>
</article>
```
## Change
```
UPDATE: article:nth-of-type(1) > form > span::text "1" => "2"
UPDATE: article:nth-of-type(1) > form > button:nth-of-type(3)::text@5 "5" => "10"
```
