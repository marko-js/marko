# Render {}
```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <!--M|0 #text/1 -->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{show:!1}}),[0,"packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    hi
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{show:!1}}),[0,"packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text2
removed #comment after #document/html0/body1/#text2
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <!--M|0 #text/1 -->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{show:!1}}),[0,"packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#comment2
removed #text after #document/html0/body1/#comment2
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    hi
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{show:!1}}),[0,"packages/translator-tags/src/__tests__/fixtures/if-default-false/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text2
removed #comment after #document/html0/body1/#text2
```