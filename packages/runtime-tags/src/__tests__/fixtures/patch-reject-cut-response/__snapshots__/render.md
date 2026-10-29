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

# Update
```js
return expectCut(document, "{}\n\n{}");
```

# Update
```js
return expectCut(document, "{}\n\n{}\n");
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
