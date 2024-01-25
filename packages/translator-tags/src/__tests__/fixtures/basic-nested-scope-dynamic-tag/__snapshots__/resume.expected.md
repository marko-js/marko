# Render {}
```html
<html>
  <head />
  <body>
    <!--M[1-->
    <!--M[2-->
    <button>
      0
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={count:0,"#text/0!":k={"#text/0!":j={}},"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/components/child.marko")},1:k,2:j,$global:{}},j._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment1 after #document/html0/body1/#comment0
inserted #document/html0/body1/#comment1
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <!--M[2-->
    <button>
      1
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={count:0,"#text/0!":k={"#text/0!":j={}},"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/components/child.marko")},1:k,2:j,$global:{}},j._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <!--M[2-->
    <button>
      2
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={count:0,"#text/0!":k={"#text/0!":j={}},"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/components/child.marko")},1:k,2:j,$global:{}},j._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <!--M[2-->
    <button>
      3
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <!--M]0 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m)=&gt;(m={0:h={count:0,"#text/0!":k={"#text/0!":j={}},"#text/0(":b("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/components/child.marko")},1:k,2:j,$global:{}},j._=h,m),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button2/#text0: "2" => "3"
```