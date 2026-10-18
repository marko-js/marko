// PATCH
[`a0; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  tb: "a",
  ba: [{
    "aa nonce": "n1"
  }, "a0"]
}]
;BAE

// PATCH holding BAE
{
  tb: "b",
  ba: [{
    "aa nonce": "n1"
  }, "a0"]
}

// PATCH holding BAE
{
  tb: "b",
  ba: 0
}

// PATCH holding BAE
{
  tb: "b",
  ba: [{
    "aa nonce": "n2"
  }, "a0"]
}
