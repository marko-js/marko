# Render `{"details":false,"$global":{"page":1,"total":9}}`
```html
<span>
  Page 1
</span>
<p
  class="summary"
>
  Page 1 of 9
</p>
<a
  href="?page=2"
>
  Next
</a>
```

# Update
```js
equal(document.querySelector("a")?.textContent, "Next");
equal(
  document.querySelector(".summary")?.textContent,
  `${document.querySelector("span")?.textContent} of 9`,
);
```

# Update `{"details":false,"$global":{"page":2,"total":2}}`
```html
<span>
  Page 2
</span>
<p
  class="summary"
>
  Page 2 of 2
</p>
<span>
  Last page
</span>
```
## Change
```
UPDATE: .summary::text@10 "9" => "2"
UPDATE: span:nth-of-type(1)::text@5 "1" => "2"
UPDATE: .summary::text@5 "1" => "2"
INSERT: .summary + span
REMOVE: span:nth-of-type(2) + a
```

# Update
```js
equal(document.querySelector("a"), null);
equal(document.querySelector(".summary")?.textContent, "Page 2 of 2");
equal(document.querySelector(".summary + span")?.textContent, "Last page");
```

# Update `{"details":false,"$global":{"page":2,"total":9}}`
```html
<span>
  Page 2
</span>
<p
  class="summary"
>
  Page 2 of 9
</p>
<a
  href="?page=3"
>
  Next
</a>
```
## Change
```
UPDATE: .summary::text@10 "2" => "9"
INSERT: .summary + a
REMOVE: a + span
UPDATE: a[href] null => "?page=3"
```

# Update
```js
equal(document.querySelector("a")?.textContent, "Next");
equal(
  document.querySelector(".summary")?.textContent,
  `${document.querySelector("span")?.textContent} of 9`,
);
```

# Update `{"details":true,"$global":{"page":2,"total":9}}`
```html
<p>
  Book details
</p>
```
## Change
```
REMOVE: span
REMOVE: p
REMOVE: a
INSERT: p
```

# Update `{"details":false,"$global":{"page":1,"total":{"value":9}}}`
```html
<span>
  Page 1
</span>
<p
  class="summary"
>
  Page 1 of 9
</p>
<a
  href="?page=2"
>
  Next
</a>
```
## Change
```
REMOVE: p
INSERT: span
UPDATE: span::text@5 "" => "1"
INSERT: span + ::text("Loading")
REMOVE: a + ::text("Loading")
INSERT: span + :is(.summary, a)
UPDATE: a[href] null => "?page=2"
```

# Update
```js
equal(document.querySelector("a")?.textContent, "Next");
equal(
  document.querySelector(".summary")?.textContent,
  `${document.querySelector("span")?.textContent} of 9`,
);
```

# Update `{"details":true,"$global":{"page":1,"total":9}}`
```html
<p>
  Book details
</p>
```
## Change
```
REMOVE: span
REMOVE: p
REMOVE: a
INSERT: p
```

# Update `{"details":false,"$global":{"page":1,"total":9}}`
```html
<span>
  Page 1
</span>
<p
  class="summary"
>
  Page 1 of 9
</p>
<a
  href="?page=2"
>
  Next
</a>
```
## Change
```
REMOVE: p
INSERT: span
UPDATE: span::text@5 "" => "1"
INSERT: span + :is(.summary, a)
UPDATE: a[href] null => "?page=2"
```

# Update
```js
equal(document.querySelector("a")?.textContent, "Next");
equal(
  document.querySelector(".summary")?.textContent,
  `${document.querySelector("span")?.textContent} of 9`,
);
```
