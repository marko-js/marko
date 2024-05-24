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
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,message:"hi","#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show",])
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
      (M$h=[]).push(_=&gt;(_.c={0:_.a={show:!0,message:"hi","#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show",])
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