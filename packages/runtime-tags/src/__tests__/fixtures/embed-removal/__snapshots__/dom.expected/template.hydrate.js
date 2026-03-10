// size: 141 (min) 103 (brotli)
(_._script("a0", ($scope) => {
  ((_.$signal($scope, 0).onabort = () => {
    console.log("cleaned up");
  }),
    _._on($scope.a, "click", function () {
      document.body.innerHTML = "";
    }));
}),
  initEmbedded("a"));
