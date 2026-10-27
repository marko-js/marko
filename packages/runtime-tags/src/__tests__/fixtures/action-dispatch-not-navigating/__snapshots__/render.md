# Render
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```

# Update
```js
click(document, "form button");
```
```html
<form>
  <button>
    prevented true
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: form > button::text@10 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: form > button::text "true" => ""
```

# Update
```js
click(document, "a[href='/a']", { metaKey: true });
```
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified true
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(1)::text@9 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(1)::text "true" => ""
```

# Update
```js
click(document, "a[target]");
```
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank true
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(2)::text@6 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(2)::text "true" => ""
```

# Update
```js
click(document, "a[download]");
```
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download true
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(3)::text@9 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(3)::text "true" => ""
```

# Update
```js
click(document, "a[href='#top']");
```
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment true
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(4)::text@9 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: a:nth-of-type(4)::text "true" => ""
```

# Update
```js
click(document, "button:not(form button)");
```
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button true
</button>
```
## Change
```
UPDATE: button::text@7 "" => "true"
```

# Update
```html
<form>
  <button>
    prevented 
  </button>
</form>
<a
  href="/a"
>
  modified 
</a>
<a
  href="/a"
  target="_blank"
>
  blank 
</a>
<a
  download=""
  href="/a"
>
  download 
</a>
<a
  href="#top"
>
  fragment 
</a>
<button>
  button 
</button>
```
## Change
```
UPDATE: button::text "true" => ""
```
