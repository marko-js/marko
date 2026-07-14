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
REMOVE: button + article
INSERT: button + article
INSERT: article:nth-of-type(1) + article
```

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
UPDATE: article:nth-of-type(2) > span::text@4 "a" => "b"
```
