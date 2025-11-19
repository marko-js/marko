# Render
```html
<html>
  <head />
  <body>
    <button>
      increment
    </button>
    <!--M_*1 #button/0-->
    <p>
      1 * 
      <!---->
      2
      <!--M_*1 #text/1-->
       = 
      <script>
        WALKER_RUNTIME("M")("_");
        M._.r = [_ =&gt; (_.a = [0,
        {
          n: 2
        }])]
      </script>
      <!--M_[-->
      2
      <!--M_*2 #text/0-->
      <!--M_]1 #text/2 2-->
    </p>
    <p>
      2 * 
      <!---->
      2
      <!--M_*1 #text/3-->
       = 
      <!--M_[-->
      4
      <!--M_*3 #text/0-->
      <!--M_]1 #text/4 3-->
    </p>
    <p>
      3 * 
      <!---->
      2
      <!--M_*1 #text/5-->
       = 
      <!--M_[-->
      6
      <!--M_*4 #text/0-->
      <!--M_]1 #text/6 4-->
    </p>
    <p>
      4 * 
      <!---->
      2
      <!--M_*1 #text/7-->
       = 
      <!--M_[-->
      8
      <!--M_*5 #text/0-->
      <!--M_]1 #text/8 5-->
    </p>
    <p>
      5 * 
      <!---->
      2
      <!--M_*1 #text/9-->
       = 
      <!--M_[-->
      10
      <!--M_*6 #text/0-->
      <!--M_]1 #text/10 6-->
    </p>
    <script>
      M._.r.push(_ =&gt; (_.b = [
        {}]), _ =&gt; (_.c = [
        {}]), _ =&gt; (_.d = [
        {}]), _ =&gt; (_.e = [
        {}]), _ =&gt; (_.f = [
        {}]),
        "__tests__/template.marko_0_n",
        1);
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      increment
    </button>
    <!--M_*1 #button/0-->
    <p>
      1 * 
      <!---->
      3
      <!--M_*1 #text/1-->
       = 
      <script>
        WALKER_RUNTIME("M")("_");
        M._.r = [_ =&gt; (_.a = [0,
        {
          n: 2
        }])]
      </script>
      <!--M_]1 #text/2 2-->
    </p>
    <p>
      2 * 
      <!---->
      3
      <!--M_*1 #text/3-->
       = 
      <!--M_]1 #text/4 3-->
    </p>
    <p>
      3 * 
      <!---->
      3
      <!--M_*1 #text/5-->
       = 
      <!--M_]1 #text/6 4-->
    </p>
    <p>
      4 * 
      <!---->
      3
      <!--M_*1 #text/7-->
       = 
      <!--M_]1 #text/8 5-->
    </p>
    <p>
      5 * 
      <!---->
      3
      <!--M_*1 #text/9-->
       = 
      <!--M_]1 #text/10 6-->
    </p>
    <script>
      M._.r.push(_ =&gt; (_.b = [
        {}]), _ =&gt; (_.c = [
        {}]), _ =&gt; (_.d = [
        {}]), _ =&gt; (_.e = [
        {}]), _ =&gt; (_.f = [
        {}]),
        "__tests__/template.marko_0_n",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/p0/#text1 "2" => "3"
UPDATE html/body/p1/#text1 "2" => "3"
UPDATE html/body/p2/#text1 "2" => "3"
UPDATE html/body/p3/#text1 "2" => "3"
UPDATE html/body/p4/#text1 "2" => "3"
REMOVE html/body/p0/#comment2 after #document-fragment/#text1
INSERT html/body/p0/#comment2
REMOVE #document-fragment/#comment0 after html/body/p0/#comment2
REMOVE #document-fragment/#text0 after html/body/p0/#comment2
REMOVE #document-fragment/#comment1 after html/body/p0/#comment2
REMOVE #document-fragment/#text1 after html/body/p0/#comment2
REMOVE html/body/p1/#comment2 after #document-fragment/#text1
INSERT html/body/p1/#comment2
REMOVE #document-fragment/#comment0 after html/body/p1/#comment2
REMOVE #document-fragment/#text0 after html/body/p1/#comment2
REMOVE #document-fragment/#comment1 after html/body/p1/#comment2
REMOVE #document-fragment/#text1 after html/body/p1/#comment2
REMOVE html/body/p2/#comment2 after #document-fragment/#text1
INSERT html/body/p2/#comment2
REMOVE #document-fragment/#comment0 after html/body/p2/#comment2
REMOVE #document-fragment/#text0 after html/body/p2/#comment2
REMOVE #document-fragment/#comment1 after html/body/p2/#comment2
REMOVE #document-fragment/#text1 after html/body/p2/#comment2
REMOVE html/body/p3/#comment2 after #document-fragment/#text1
INSERT html/body/p3/#comment2
REMOVE #document-fragment/#comment0 after html/body/p3/#comment2
REMOVE #document-fragment/#text0 after html/body/p3/#comment2
REMOVE #document-fragment/#comment1 after html/body/p3/#comment2
REMOVE #document-fragment/#text1 after html/body/p3/#comment2
REMOVE html/body/p4/#comment2 after #document-fragment/#text1
INSERT html/body/p4/#comment2
REMOVE #document-fragment/#comment0 after html/body/p4/#comment2
REMOVE #document-fragment/#text0 after html/body/p4/#comment2
REMOVE #document-fragment/#comment1 after html/body/p4/#comment2
REMOVE #document-fragment/#text1 after html/body/p4/#comment2
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <button>
      increment
    </button>
    <!--M_*1 #button/0-->
    <p>
      1 * 
      <!---->
      3
      <!--M_*1 #text/1-->
       = 
      <script>
        WALKER_RUNTIME("M")("_");
        M._.r = [_ =&gt; (_.a = [0,
        {
          n: 2
        }])]
      </script>
      <!--M_[-->
      3
      <!--M_*2 #text/0-->
    </p>
    <p>
      2 * 
      <!---->
      3
      <!--M_*1 #text/3-->
       = 
      <!--M_[-->
      6
      <!--M_*3 #text/0-->
    </p>
    <p>
      3 * 
      <!---->
      3
      <!--M_*1 #text/5-->
       = 
      <!--M_[-->
      9
      <!--M_*4 #text/0-->
    </p>
    <p>
      4 * 
      <!---->
      3
      <!--M_*1 #text/7-->
       = 
      <!--M_[-->
      12
      <!--M_*5 #text/0-->
    </p>
    <p>
      5 * 
      <!---->
      3
      <!--M_*1 #text/9-->
       = 
      <!--M_[-->
      15
      <!--M_*6 #text/0-->
    </p>
    <script>
      M._.r.push(_ =&gt; (_.b = [
        {}]), _ =&gt; (_.c = [
        {}]), _ =&gt; (_.d = [
        {}]), _ =&gt; (_.e = [
        {}]), _ =&gt; (_.f = [
        {}]),
        "__tests__/template.marko_0_n",
        1);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment after html/body/p0/script
INSERT html/body/p0/#comment2, html/body/p0/#text3, html/body/p0/#comment3, html/body/p0/#text4
UPDATE html/body/p0/#text3 "2" => "3"
REMOVE #comment after html/body/p4/#text2
INSERT html/body/p4/#comment2, html/body/p4/#text3, html/body/p4/#comment3, html/body/p4/#text4
UPDATE html/body/p4/#text3 "10" => "15"
REMOVE #comment after html/body/p3/#text2
INSERT html/body/p3/#comment2, html/body/p3/#text3, html/body/p3/#comment3, html/body/p3/#text4
UPDATE html/body/p3/#text3 "8" => "12"
REMOVE #comment after html/body/p2/#text2
INSERT html/body/p2/#comment2, html/body/p2/#text3, html/body/p2/#comment3, html/body/p2/#text4
UPDATE html/body/p2/#text3 "6" => "9"
REMOVE #comment after html/body/p1/#text2
INSERT html/body/p1/#comment2, html/body/p1/#text3, html/body/p1/#comment3, html/body/p1/#text4
UPDATE html/body/p1/#text3 "4" => "6"
```