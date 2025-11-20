# Render
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_[-->
    The count is 
    <!---->
    0
    <!--M_*2 #text/0-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_[-->
    The count is 
    <!---->
    1
    <!--M_*2 #text/0-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "0" => "1"
```

# Render
```js
container.querySelector("button.toggle").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment2 after #text
INSERT html/body/#comment2
REMOVE #comment after html/body/#comment2
REMOVE #text after html/body/#comment2
REMOVE #comment after html/body/#comment2
REMOVE #text after html/body/#comment2
REMOVE #comment after html/body/#comment2
REMOVE #text after html/body/#comment2
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.toggle").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    The count is 2
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0, html/body/#text1
REMOVE #comment after html/body/#text1
UPDATE html/body/#text1 "" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    The count is 3
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/#text1 "2" => "3"
```