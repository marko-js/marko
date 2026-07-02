// template.marko
const $template = "<div> </div><div> </div><button>Update</button>";
const $walks = "D lD l b";
const names = [
	"Dylan",
	"Michael",
	"Ryan",
	"Luke"
];
const $index = /* @__PURE__ */ _let("index/3");
const $user = /* @__PURE__ */ _let("user/4", ($scope) => {
	$user_id($scope, $scope.user?.id);
	$user_name($scope, $scope.user?.name);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$index($scope, $scope.index === names.length - 1 ? -1 : $scope.index + 1);
	$user($scope, $scope.index !== -1 && {
		id: $scope.index,
		name: names[$scope.index]
	});
}));
function $setup($scope) {
	$index($scope, -1);
	$user($scope, undefined);
	$setup__script($scope);
}
const $user_id = /* @__PURE__ */ _const("user_id", ($scope) => _text($scope["#text/0"], $scope.user_id));
const $user_name = /* @__PURE__ */ _const("user_name", ($scope) => _text($scope["#text/1"], $scope.user_name));
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
