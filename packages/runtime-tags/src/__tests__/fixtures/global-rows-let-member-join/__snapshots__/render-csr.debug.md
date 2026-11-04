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

# Update `{"$global":{"data":{"player":{"entries":[{"item":{"id":"b","name":"B","value":5},"qty":2},{"item":{"id":"c","name":"C","value":7},"qty":1}]}}}}`

# Update
```js
document.querySelector(".inc").click();
```
