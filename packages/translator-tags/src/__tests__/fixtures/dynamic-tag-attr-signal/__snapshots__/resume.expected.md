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
    <!--M*0 #p/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{className:"A"}}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",])
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
    <!--M*0 #p/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{className:"A"}}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",])
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
    <!--M*0 #p/0-->
    <button />
    <!--M*0 #button/1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{className:"A"}}),[0,"packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/p0: attr(class) "B" => "A"
```