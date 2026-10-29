# Render `{"label":"a"}`
```html
<p>
  a
</p>
```

# Update
```js
return expectCut(
document,
new ReadableStream({
  start: (controller) =>
controller.enqueue(new TextEncoder().encode("{}\n\n")),
  pull: (controller) => controller.error(new Error("cut")),
}),
  );
```
## Console
```
WARN "A patch rejected: the stream was cut short."
```

# Update
```js
return expectCut(document, "{}\n\n{}");
```
## Console
```
WARN "A patch rejected: the stream was cut short."
```

# Update
```js
return expectCut(document, "{}\n\n{}\n");
```
## Console
```
WARN "A patch rejected: the stream was cut short."
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
