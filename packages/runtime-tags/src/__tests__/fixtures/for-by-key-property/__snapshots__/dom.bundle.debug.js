// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"].length);
const $for_content__key = ($scope, key) => _text($scope["#text/1"], key);
const $for_content__if = /*@__PURE__*/ _if("#text/3", "<span> </span>", "D ", $if_content__setup);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope._, [...$scope._.rows, { id: "cde" }]);
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope["#LoopKey"].length);
	$for_content__key($scope, $scope["#LoopKey"]);
	$for_content__if($scope, $scope["#LoopKey"] ? 0 : 1);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<button><!>:<!><!></button>", " D%c%b%", $for_content__setup);
const $rows = /*@__PURE__*/ _let("rows/1", ($scope) => $for($scope, [$scope.rows, "id"]));
function $setup($scope) {
	$rows($scope, [{ id: "ab" }]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
