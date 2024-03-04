# Render {"show":false,"value1":"Hello","value2":"World"}
```html
<div />
```


# Render {"show":true,"value1":"Hello","value2":"World"}
```html
<div>
  <span>
    Hello
  </span>
  <span>
    World
  </span>
</div>
```


# Render {"show":true,"value1":false,"value2":"World"}
```html
<div>
  <span>
    World
  </span>
</div>
```


# Render {"show":true,"value1":"Goodbye","value2":"World"}
```html
<div>
  <span>
    Goodbye
  </span>
  <span>
    World
  </span>
</div>
```


# Render {"show":false,"value1":"Goodbye","value2":"World"}
```html
<div />
```