// template.marko
const $placeholder_content = _content_resume("b0", "loading...");

// child.marko
const $setup__script = _script("a0", ($scope) => console.log("try-lazy child connected:", $scope.a.isConnected));
