// template.marko
const $template = "<div> </div><button>Update</button>";
const $walks = "D l b";
const $user = /* @__PURE__ */ _let("user/3", ($scope) => $user_id($scope, $scope.user?.id));
const $index = /* @__PURE__ */ _let("index/2", ($scope) => $user($scope, $scope.index !== -1 && { id: $scope.index }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$index($scope, $scope.index + 1);
}));
function $setup($scope) {
	$index($scope, -1);
	$setup__script($scope);
}
const $user_id = /* @__PURE__ */ _const("user_id", ($scope) => _text($scope["#text/0"], $scope.user_id));
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
