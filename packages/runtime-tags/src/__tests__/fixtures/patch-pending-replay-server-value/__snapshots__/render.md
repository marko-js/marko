# Render `{"$global":{"data":{"params":{"q":"a"},"items":{"value":[1,2]}}}}`
```html
<button>
  go
</button>
Loading
```

# Update
```html
<button>
  go
</button>
<a
  href="?q=a&i=1"
>
  1
</a>
<a
  href="?q=a&i=2"
>
  2
</a>
```
## Change
```
INSERT: a:nth-of-type(1)::text("1")
INSERT: a:nth-of-type(2)::text("2")
REMOVE: ::text("Loading")
INSERT: button + :is(a, a)
```

# Update `{"$global":{"data":{"params":{"q":"b"},"items":{"value":[3,4]}}}}`
```html
<button>
  go
</button>
<a
  href="?q=b&i=3"
>
  3
</a>
<a
  href="?q=b&i=4"
>
  4
</a>
```
## Change
```
INSERT: button + ::text("Loading")
REMOVE:  + a
REMOVE:  + a
INSERT: button + :is(a, a)
REMOVE: a:nth-of-type(2) + ::text("Loading")
```
