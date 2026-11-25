# Render
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
```

# Update
```js
document.querySelector("button#inner").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
  </div>
</div>
```
## Change
```
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
REMOVE: div > div:nth-of-type(2) > div
REMOVE: div > div:nth-of-type(2) > p
REMOVE: div > div:nth-of-type(2) > span
```

# Update
```js
document.querySelector("button#middle").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
</div>
```
## Change
```
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
REMOVE: div > div
```

# Update
```js
document.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```
## Change
```
REMOVE: div
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```

# Update
```js
document.querySelector("button#inner").click();
```

# Update
```js
document.querySelector("button#middle").click();
```

# Update
```js
document.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
```
## Change
```
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
INSERT: div
INSERT: div > div:nth-of-type(2)
INSERT: div > div:nth-of-type(2) > div:nth-of-type(2), div > div:nth-of-type(2) > span:nth-of-type(2), div > div:nth-of-type(2) > p:nth-of-type(2)
```

# Update
```js
document.querySelector("button#outer").click();
```
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
```
## Change
```
REMOVE: div
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed")
REMOVE: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed")
INSERT: pre::text("\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed\nOuter mounted\nMiddle mounted\nInner mounted\nInner destroyed\nMiddle destroyed\nOuter destroyed")
```
