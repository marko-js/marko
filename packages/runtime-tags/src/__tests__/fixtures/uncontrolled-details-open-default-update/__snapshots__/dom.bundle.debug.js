// template.marko
const $template = "<details></details><details></details><details></details><button>Update</button>";
const $walks = "b b b b";
const $open = /* @__PURE__ */ _let("open/3", ($scope) => {
	_attr_details_or_dialog_open_default($scope, "#details/0", $scope.open);
	_attr_details_or_dialog_open($scope, "#details/1", $scope.open, undefined);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_details_or_dialog_open_script($scope, "#details/1");
	_on($scope["#button/2"], "click", function() {
		$open($scope, true);
	});
});
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
