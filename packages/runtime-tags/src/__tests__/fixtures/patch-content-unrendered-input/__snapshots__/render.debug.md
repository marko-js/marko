# Render `{"admin":false,"rows":[{"name":"SECRET_r1","ssn":"SECRET_ssn1"}],"guestText":"SHOWN_g1","showBody":false,"bodyText":"SECRET_body1"}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_g1
</p>
<div />
```

# Update `{"admin":true,"rows":[{"name":"SHOWN_r2","ssn":"SECRET_ssn2"}],"guestText":"SECRET_g2","showBody":true,"bodyText":"SHOWN_body2"}`
```html
<button
  class="inc"
>
  0
</button>
<ul>
  <li>
    SHOWN_r2
  </li>
</ul>
<div>
  <p>
    SHOWN_body2
  </p>
</div>
```
## Change
```
INSERT: .inc + ul
REMOVE: ul + p
INSERT: div > p
```

# Update `{"admin":false,"rows":[{"name":"SECRET_r3","ssn":"SECRET_ssn3"}],"guestText":"SHOWN_g3","showBody":false,"bodyText":"SECRET_body3"}`
```html
<button
  class="inc"
>
  0
</button>
<p>
  SHOWN_g3
</p>
<div />
```
## Change
```
INSERT: .inc + p
REMOVE: p + ul
REMOVE: div > p
```
