# Render
```html
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea
  default-value="b"
>
  a
</textarea>
<textarea
  default-value="b"
>
  a
</textarea>
<textarea
  default-value="b"
>
  a
</textarea>
<textarea
  default-value="b"
>
  a
</textarea>
<button>
  Update
</button>
```
## Change
```
REMOVE: textarea:nth-of-type(3)::text("a")
INSERT: textarea:nth-of-type(3)::text("b")
REMOVE: textarea:nth-of-type(4)::text("a")
INSERT: textarea:nth-of-type(4)::text("b")
REMOVE: textarea:nth-of-type(5)::text("a")
INSERT: textarea:nth-of-type(5)::text("b")
REMOVE: textarea:nth-of-type(6)::text("a")
INSERT: textarea:nth-of-type(6)::text("b")
```
