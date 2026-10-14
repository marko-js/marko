# Render `{"admin":false,"adminData":{"title":"SECRET_title1","rows":["SECRET_row1"]},"user":{"name":"SHOWN_name1","bio":"BIO_1","passwordHash":"SECRET_hash1"},"more":false,"props":{"user":{"name":"SHOWN_name1p","bio":"BIO_1p","passwordHash":"SECRET_hash1p"}},"other":{"name":"SHOWN_name1o","bio":"BIO_1o","passwordHash":"SECRET_hash1o"}}`
```html
<button
  class="inc"
>
  0
</button>
<div>
  SHOWN_name1
</div>
```

# Update `{"admin":true,"adminData":{"title":"SHOWN_title2","rows":["SECRET_row2"]},"user":{"name":"SHOWN_name2","bio":"BIO_2","passwordHash":"SECRET_hash2"},"more":true,"props":{"user":{"name":"SHOWN_name2p","bio":"BIO_2p","passwordHash":"SECRET_hash2p"}},"other":{"name":"SHOWN_name2o","bio":"BIO_2o","passwordHash":"SECRET_hash2o"}}`
```html
<button
  class="inc"
>
  0
</button>
<section>
  SHOWN_title2
</section>
<div>
  SHOWN_name2p
</div>
<button>
  SHOWN_name2o
</button>
```
## Change
```
REMOVE: .inc + div
INSERT: .inc + section
INSERT: section + :is(div, button)
UPDATE: button:nth-of-type(2)::text " " => "SHOWN_name2o"
```

# Update `{"admin":false,"adminData":{"title":"SECRET_title3","rows":["SECRET_row3"]},"user":{"name":"SHOWN_name3","bio":"BIO_3","passwordHash":"SECRET_hash3"},"more":false,"props":{"user":{"name":"SHOWN_name3p","bio":"BIO_3p","passwordHash":"SECRET_hash3p"}},"other":{"name":"SHOWN_name3o","bio":"BIO_3o","passwordHash":"SECRET_hash3o"}}`
```html
<button
  class="inc"
>
  0
</button>
<div>
  SHOWN_name3
</div>
```
## Change
```
REMOVE: .inc + section
INSERT: .inc + div
REMOVE: div + div
REMOVE: div + button
```
