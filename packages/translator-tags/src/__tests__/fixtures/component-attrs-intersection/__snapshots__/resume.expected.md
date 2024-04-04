# Render {}
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M*1 #text/0-->
    </div>
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#childScope/0":h={value:0,dummy:{}}},1:h}),[0,"packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count",])
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
    <div>
      1
      <!--M*1 #text/0-->
    </div>
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#childScope/0":h={value:0,dummy:{}}},1:h}),[0,"packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/#text0: "0" => "1"
```