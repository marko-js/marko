# Render
```html
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
</p>
```


# Render FLUSH
```html
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
  M._.r.push(
    "__tests__/template.marko_0_n 1"
    );
  M._.w()
</script>
```

# Mutations
```
INSERT p0/#comment2
INSERT p0/#text3
INSERT p0/#comment3
INSERT p0/#comment4
INSERT p1
INSERT p1/#text0
INSERT p1/#comment0
INSERT p1/#text1
INSERT p1/#comment1
INSERT p1/#text2
INSERT p1/#comment2
INSERT p1/#text3
INSERT p1/#comment3
INSERT p1/#comment4
INSERT p2
INSERT p2/#text0
INSERT p2/#comment0
INSERT p2/#text1
INSERT p2/#comment1
INSERT p2/#text2
INSERT p2/#comment2
INSERT p2/#text3
INSERT p2/#comment3
INSERT p2/#comment4
INSERT p3
INSERT p3/#text0
INSERT p3/#comment0
INSERT p3/#text1
INSERT p3/#comment1
INSERT p3/#text2
INSERT p3/#comment2
INSERT p3/#text3
INSERT p3/#comment3
INSERT p3/#comment4
INSERT p4
INSERT p4/#text0
INSERT p4/#comment0
INSERT p4/#text1
INSERT p4/#comment1
INSERT p4/#text2
INSERT p4/#comment2
INSERT p4/#text3
INSERT p4/#comment3
INSERT p4/#comment4
INSERT p0/#text4
INSERT p1/#text4
INSERT p2/#text4
INSERT p3/#text4
INSERT p4/#text4
INSERT script
```

# Render
```js
container.querySelector("button").click();
```
```html
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
  2
  <!--M_*2 #text/0-->
  <!--M_]1 #text/2 2-->
</p>
<p>
  2 * 
  <!---->
  3
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
  3
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
  3
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
  3
  <!--M_*1 #text/9-->
   = 
  <!--M_[-->
  10
  <!--M_*6 #text/0-->
  <!--M_]1 #text/10 6-->
</p>
<script>
  M._.r.push(
    "__tests__/template.marko_0_n 1"
    );
  M._.w()
</script>
```

# Mutations
```
UPDATE p0/#text1 "2" => "3"
UPDATE p1/#text1 "2" => "3"
UPDATE p2/#text1 "2" => "3"
UPDATE p3/#text1 "2" => "3"
UPDATE p4/#text1 "2" => "3"
```

# Render ASYNC
```html
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
  M._.r.push(
    "__tests__/template.marko_0_n 1"
    );
  M._.w()
</script>
```

# Mutations
```
REMOVE p0/#comment2 after #document-fragment/#text1
INSERT p0/#comment2
REMOVE #document-fragment/#comment0 after p0/#comment2
REMOVE #document-fragment/#text0 after p0/#comment2
REMOVE #document-fragment/#comment1 after p0/#comment2
REMOVE #document-fragment/#text1 after p0/#comment2
REMOVE p1/#comment2 after #document-fragment/#text1
INSERT p1/#comment2
REMOVE #document-fragment/#comment0 after p1/#comment2
REMOVE #document-fragment/#text0 after p1/#comment2
REMOVE #document-fragment/#comment1 after p1/#comment2
REMOVE #document-fragment/#text1 after p1/#comment2
REMOVE p2/#comment2 after #document-fragment/#text1
INSERT p2/#comment2
REMOVE #document-fragment/#comment0 after p2/#comment2
REMOVE #document-fragment/#text0 after p2/#comment2
REMOVE #document-fragment/#comment1 after p2/#comment2
REMOVE #document-fragment/#text1 after p2/#comment2
REMOVE p3/#comment2 after #document-fragment/#text1
INSERT p3/#comment2
REMOVE #document-fragment/#comment0 after p3/#comment2
REMOVE #document-fragment/#text0 after p3/#comment2
REMOVE #document-fragment/#comment1 after p3/#comment2
REMOVE #document-fragment/#text1 after p3/#comment2
REMOVE p4/#comment2 after #document-fragment/#text1
INSERT p4/#comment2
REMOVE #document-fragment/#comment0 after p4/#comment2
REMOVE #document-fragment/#text0 after p4/#comment2
REMOVE #document-fragment/#comment1 after p4/#comment2
REMOVE #document-fragment/#text1 after p4/#comment2
```

# Render ASYNC
```html
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
  M._.r.push(
    "__tests__/template.marko_0_n 1"
    );
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment after p0/script
INSERT p0/#comment2, p0/#text3, p0/#comment3, p0/#text4
REMOVE #comment after p4/#text2
INSERT p4/#comment2, p4/#text3, p4/#comment3, p4/#text4
REMOVE #comment after p3/#text2
INSERT p3/#comment2, p3/#text3, p3/#comment3, p3/#text4
REMOVE #comment after p2/#text2
INSERT p2/#comment2, p2/#text3, p2/#comment3, p2/#text4
REMOVE #comment after p1/#text2
INSERT p1/#comment2, p1/#text3, p1/#comment3, p1/#text4
```