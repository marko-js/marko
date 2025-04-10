# Write
```html
  replaced<span>replaced<div></div></span><div><div>a</div>replacedHello Text &lt;a/>replacedHello HTML <span>hi</span><script>
      'Hello <b> \x3C/script>'
    </script><style>
      .test { content: 'Hello <b> \3C/style>' }
    </style></div>
```

# Render End
```html
<html>
  <head />
  <body>
    replaced
    <span>
      replaced
      <div />
    </span>
    <div>
      <div>
        a
      </div>
      replacedHello Text &lt;a/&gt;replacedHello HTML 
      <span>
        hi
      </span>
      <script>
        
    'Hello &lt;b&gt; \x3C/script&gt;'
  
      </script>
      <style>
        
    .test { content: 'Hello &lt;b&gt; \3C/style&gt;' }
  
      </style>
    </div>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/div
INSERT html/body/div
INSERT html/body/div/div
INSERT html/body/div/div/#text
INSERT html/body/div/#text
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/script
INSERT html/body/div/script/#text
INSERT html/body/div/style
INSERT html/body/div/style/#text
```