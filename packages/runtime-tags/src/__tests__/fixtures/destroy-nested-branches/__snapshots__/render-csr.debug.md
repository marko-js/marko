# Render
```html
<div>
  <section>
    <p>
      outer
    </p>
    <p>
      a
    </p>
    <p>
      b
    </p>
  </section>
</div>
```

# Update Destroy
## Change
```
REMOVE: div
```
## Console
```
LOG "effect a destroyed"
LOG "lifecycle a destroyed"
LOG "effect b destroyed"
LOG "lifecycle b destroyed"
LOG "effect outer destroyed"
LOG "lifecycle outer destroyed"
```
