# write
  a<style id="^M0"></style>b
_flush_

# write
  d<style id="/M0"></style>efg
_flush_

# write
  <t id="M0">ERROR!</t><script>(M$r=REORDER_RUNTIME)("M0")</script>
_flush_

# end

# final HTML
  
  <html>
    <head>
    </head>
    <body>
      aERROR!efg
      <script>
        (M$r=REORDER_RUNTIME)("M0")
      </script>
    </body>
  </html>
  
