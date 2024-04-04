# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <!--M|0 #text/0 1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={clickCount:0,"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"),"#text/0!":j={}},1:j},j._=h,k),[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount",])
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
      <button>
        1
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <!--M|0 #text/0 1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={clickCount:0,"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"),"#text/0!":j={}},1:j},j._=h,k),[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        2
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <!--M|0 #text/0 1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={clickCount:0,"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"),"#text/0!":j={}},1:j},j._=h,k),[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <span>
        The button was clicked 3 times.
      </span>
      <!--M*1 #button/0-->
      <!--M|0 #text/0 1-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={clickCount:0,"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer"),"#text/0!":j={}},1:j},j._=h,k),[1,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/span0
removed button after #document/html0/body1/div0/span0
#document/html0/body1/div0/span0/#text1: "" => "3"
```