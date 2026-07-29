# Render `{"$global":{"persisted":true,"items":[{"id":"existing","view":"a"}]}}`
```html
<p>
  root
</p>
<button>
  0
</button>
<article>
  <span>
    existing:a:only
  </span>
</article>
```

# Update `{"$global":{"persisted":true,"items":[{"id":"existing","view":"a"},{"id":"one","view":"a"}]}}`
```html
<p>
  root
</p>
<button>
  0
</button>
<article>
  <span>
    existing:a:only
  </span>
</article>
<article>
  <span>
    one:a:only
  </span>
</article>
```
## Change
```
INSERT: button + :is(article, article)
REMOVE: article:nth-of-type(2) + article
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"items":[{"id":"existing","view":"a"},{"id":"one","view":"b"}]}}`
```html
<p>
  root
</p>
<button>
  0
</button>
<article>
  <span>
    existing:a:only
  </span>
</article>
<article>
  <span>
    one:b:only
  </span>
</article>
```
## Change
```
INSERT: button + :is(article, article)
REMOVE: article:nth-of-type(2) + article
REMOVE: article:nth-of-type(2) + article
```
