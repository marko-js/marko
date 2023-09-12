# Render {}
```html
<html>
  <head />
  <body>
    <button />
    <!--M*0 #button/0-->
    <span>
      hi
      <!--M*1 #text/0-->
    </span>
    <!--M|0 #text/1 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,"#text/1!":j={},"#text/1(":b("packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show",])
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
    <!--M|0 #text/1 1-->
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={show:!0,"#text/1!":j={},"#text/1(":b("packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer")},1:j},j._=h,k),[0,"packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment2 after span
inserted #document/html0/body1/#comment2
removed span after #document/html0/body1/#comment2
```