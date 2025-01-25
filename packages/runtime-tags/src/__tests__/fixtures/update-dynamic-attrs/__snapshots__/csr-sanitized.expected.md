# Render `{"value":{"a":1,"b":2}}`

```html
<div
  a="1"
  b="2"
/>
<div
  a="1"
  b="2"
/>
<div
  a="0"
  b="2"
/>
```


# Render `{"value":{"b":2,"c":3}}`

```html
<div
  b="2"
  c="3"
/>
<div
  a="0"
  b="2"
  c="3"
/>
<div
  a="0"
  b="2"
  c="3"
/>
```


# Render `{"value":{}}`

```html
<div />
<div
  a="0"
/>
<div
  a="0"
/>
```


# Render `{"value":null}`

```html
<div />
<div
  a="0"
/>
<div
  a="0"
/>
```


# Render `{"value":{"a":1}}`

```html
<div
  a="1"
/>
<div
  a="1"
/>
<div
  a="0"
/>
```
