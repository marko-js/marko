// PATCH
[`a0; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{ba:[{"aa nonce":"n1"},"a0"],tb:"a"}]

// PATCH
[`a0; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{ba:[{"aa nonce":"n1"},"a0"],tb:"b"}]

// PATCH
{
  ba: 0,
  tb: "b"
}

// PATCH
[`a0; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{ba:[{"aa nonce":"n2"},"a0"],tb:"b"}]
