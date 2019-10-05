# write
  a<style id="^M1"></style>i...<style id="/M1"></style>j
_flush_

# write
  kl
_flush_

# write
  <t id="M1">bcd<style id="^M0"></style>h...<style id="/M0"></style></t><script>(M$r=REORDER_RUNTIME)("M1")</script>
_flush_

# write
  <t id="M0">efg</t><script>M$r("M0")</script>
_flush_

# end

# final HTML
  
  <html>
    <head>
    </head>
    <body>
      abcdefgjkl
      <script>
        (M$r=REORDER_RUNTIME)("M1")
      </script>
      <script>
        M$r("M0")
      </script>
    </body>
  </html>
  
