# Render `{"users":[{"name":"Ada","role":"dev"},{"name":"Lin","role":"pm"}]}`
```html
<ul>
  <li>
    Ada (dev)
  </li>
  <li>
    Lin (pm)
  </li>
</ul>
```

# Update `{"users":[{"name":"Ada","role":"dev"},{"name":"Grace","role":"lead"}]}`
```html
<ul>
  <li>
    Ada (dev)
  </li>
  <li>
    Grace (lead)
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text@0 "Lin" => "Grace"
UPDATE: ul > li:nth-of-type(2)::text@7 "pm" => "lead"
```
