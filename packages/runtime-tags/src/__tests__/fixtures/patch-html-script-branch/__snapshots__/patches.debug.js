// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/patch-html-script-branch/template.marko_1*shell; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  "PatchText:#text/1": "a",
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n1"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-html-script-branch/template.marko_1*shell"]
}]
;BAE

// PATCH holding BAE
{
  "PatchText:#text/1": "b",
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n1"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-html-script-branch/template.marko_1*shell"]
}

// PATCH holding BAE
{
  "PatchText:#text/1": "b",
  "PatchBranch:#text/0": 0
}

// PATCH holding BAE
{
  "PatchText:#text/1": "b",
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n2"
  }, "packages/runtime-tags/src/__tests__/fixtures/patch-html-script-branch/template.marko_1*shell"]
}
