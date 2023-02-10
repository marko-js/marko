# Render {"a":1,"b":2,"x":false,"y":true}
```html
<html>
  <head />
  <body>
    Hello
    <!--M|0 #text/0 1-->
    World
    <!--M|0 #text/1 2-->
    <div>
      B
      <!--M|0 #text/2 3-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={"#text/0!":j={},"#text/0(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_1_renderer"),"#text/1!":k={},"#text/1(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_2_renderer"),"#text/2!":{},"#text/2(":b("packages/translator/src/__tests__/fixtures/if-tag/template.marko_4_renderer")},1:j,2:k,3:{_:h}},j._=k._=h,m),[])
    </script>
  </body>
</html>
```

# Mutations
```

```