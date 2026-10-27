# Render `{"url":"/a","title":"A","cls":"one","width":1}`
```html
<a
  class="one"
  href="/a"
  title="A"
>
  x
</a>
<img
  src="/a?w=1"
/>
```

# Update `{"url":"/b","title":"B","cls":"two","width":2}`
```html
<a
  class="two"
  href="/b"
  title="B"
>
  x
</a>
<img
  src="/b?w=2"
/>
```
## Change
```
UPDATE: .two[href] "/a" => "/b"
UPDATE: .two[title] "A" => "B"
UPDATE: .two[class] "one" => "two"
UPDATE: img[src] "/a?w=1" => "/b?w=2"
```
