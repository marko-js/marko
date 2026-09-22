# Render
```html
<button
  id="rename"
>
  rename
</button>
<p
  title="ta"
>
  a
</p>
<em>
  a
</em>
<p
  title="over"
>
  a
</p>
<p
  title="tb"
>
  b
</p>
<em>
  b
</em>
<p
  title="over"
>
  b
</p>
```

# Update
```js
document.querySelector("#rename").click();
```
```html
<button
  id="rename"
>
  rename
</button>
<p
  title="ta!"
>
  a!
</p>
<em>
  a!
</em>
<p
  title="over"
>
  a!
</p>
<p
  title="tb!"
>
  b!
</p>
<em>
  b!
</em>
<p
  title="over"
>
  b!
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)[title] "ta" => "ta!"
UPDATE: p:nth-of-type(1)::text "a" => "a!"
UPDATE: em:nth-of-type(1)::text "a" => "a!"
UPDATE: p:nth-of-type(3)[title] "tb" => "tb!"
UPDATE: p:nth-of-type(3)::text "b" => "b!"
UPDATE: em:nth-of-type(2)::text "b" => "b!"
UPDATE: p:nth-of-type(2)::text "a" => "a!"
UPDATE: p:nth-of-type(4)::text "b" => "b!"
```
