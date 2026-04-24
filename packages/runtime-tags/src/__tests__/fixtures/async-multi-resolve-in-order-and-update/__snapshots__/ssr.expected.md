# Write
```html
  <button>increment</button><!--M_*1 #button/0--><p>1 * <!>2<!--M_*1 #text/1--> = <script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{n:2}])]</script>
```

# Write
```html
  <!--M_[-->2<!--M_*2 #text/0--><!--M_]1 #text/2 2--></p><p>2 * <!>2<!--M_*1 #text/3--> = <!--M_[-->4<!--M_*3 #text/0--><!--M_]1 #text/4 3--></p><p>3 * <!>2<!--M_*1 #text/5--> = <!--M_[-->6<!--M_*4 #text/0--><!--M_]1 #text/6 4--></p><p>4 * <!>2<!--M_*1 #text/7--> = <!--M_[-->8<!--M_*5 #text/0--><!--M_]1 #text/8 5--></p><p>5 * <!>2<!--M_*1 #text/9--> = <!--M_[-->10<!--M_*6 #text/0--><!--M_]1 #text/10 6--></p><script>M._.r.push("__tests__/template.marko_0_n 1");M._.w()</script>
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

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT button
INSERT button/#text
INSERT #comment
INSERT p
INSERT p/#text0
INSERT p/#comment0
INSERT p/#text1
INSERT p/#comment1
INSERT p/#text2
INSERT p/script
```

# Render End
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
INSERT script
```