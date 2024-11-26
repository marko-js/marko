# Render {}
```html
<html>
  <head />
  <body>
    <p
      class="A"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",0];M._.w()
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
    <p
      class="B"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/p0: attr(class) "A" => "B"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <p
      class="A"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/p0: attr(class) "B" => "A"
```