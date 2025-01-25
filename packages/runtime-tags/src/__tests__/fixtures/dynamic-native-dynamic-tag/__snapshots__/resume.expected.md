# Render {}
```html
<html>
  <head />
  <body>
    <!--M_[1-->
    <span
      class="A"
    >
      body content
    </span>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div
      class="A"
    >
      body content
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0
removed #comment after #document/html0/body1/div0
removed span after #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
#document/html0/body1/div0: attr(class) null => "A"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:"span",className:"A","#text/0!":_.a={},"#text/0(":"span"},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/span0
removed div after #document/html0/body1/span0
inserted #document/html0/body1/span0/#text0
#document/html0/body1/span0: attr(class) null => "A"
```