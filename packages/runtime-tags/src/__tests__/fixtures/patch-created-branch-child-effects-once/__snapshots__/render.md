# Render
```html
<button>
  0
</button>
```

# Update `{"show":true,"items":["a"],"nested":true}`
```html
<button>
  0
</button>
<span>
  inner
</span>
<b>
  define
</b>
<i>
  a
</i>
<u>
  nested
</u>
<div>
  <em>
    content
  </em>
</div>
<span>
  inner
</span>
```
## Change
```
INSERT: button + :is(span, b, i, u, div, span)
```
## Console
```
LOG "inner setup"
LOG "outer setup"
LOG "define setup"
LOG "branch setup" 1
LOG "row setup" "a"
LOG "nested setup"
LOG "content setup"
LOG "content row setup" "a"
LOG "inner setup"
LOG "tag body setup"
LOG "tag body row setup" "a"
LOG "branch count" 0
```
