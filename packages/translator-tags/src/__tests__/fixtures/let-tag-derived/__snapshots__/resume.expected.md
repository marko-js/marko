# Render {"a":2}
```html
<html>
  <head />
  <body>
    <button>
      Increment
    </button>
    <!--M*0 #button/0-->
    2
    <!--M*0 #text/1-->
     
    <!---->
    4
    <!--M*0 #text/2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{b:4},$global:{}}),[0,"packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b",])
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
    <button>
      Increment
    </button>
    <!--M*0 #button/0-->
    2
    <!--M*0 #text/1-->
     
    <!---->
    5
    <!--M*0 #text/2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{b:4},$global:{}}),[0,"packages/translator-tags/src/__tests__/fixtures/let-tag-derived/template.marko_0_b",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/#text6: "4" => "5"
```