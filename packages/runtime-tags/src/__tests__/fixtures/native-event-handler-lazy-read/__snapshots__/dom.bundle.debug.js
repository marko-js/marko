// template.marko
const $template = "<button>show</button><button>append</button><div class=message> </div><div class=log> </div>";
const $walks = " b bD lD l";
const $message = /* @__PURE__ */ _let("message/4", ($scope) => _text($scope["#text/2"], $scope.message));
const $log = /* @__PURE__ */ _let("log/5", ($scope) => _text($scope["#text/3"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$log($scope, `${$scope.log}[${$scope.message}]`);
	});
	_on($scope["#button/1"], "click", function() {
		$message($scope, $scope.message + "!");
	});
});
function $setup($scope) {
	$message($scope, "hello");
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
