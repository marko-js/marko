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

# Mutations
```
INSERT textarea0, textarea1, textarea2, textarea3, textarea4, textarea5, button
```

# Render
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

# Mutations
```
REMOVE #text in textarea2
INSERT textarea2/#text
REMOVE #text in textarea3
INSERT textarea3/#text
REMOVE #text in textarea4
INSERT textarea4/#text
REMOVE #text in textarea5
INSERT textarea5/#text
```