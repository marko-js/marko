// template.marko
const $template = "<div><!></div>";
const $walks = "D%l";
const $else_content__clickCount = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.clickCount));
const $else_content__setup = $else_content__clickCount;
const $if_content__clickCount__script = _script("__tests__/template.marko_1_clickCount", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope._, $scope._.clickCount + 1);
}));
const $if_content__clickCount = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/1"], $scope._.clickCount);
	$if_content__clickCount__script($scope);
});
const $if_content__setup = $if_content__clickCount;
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D l", $if_content__setup, "<span>The button was clicked <!> times.</span>", "Db%l", $else_content__setup);
const $clickCount = /*@__PURE__*/ _let("clickCount/1", ($scope) => {
	$if($scope, $scope.clickCount < 3 ? 0 : 1);
	$if_content__clickCount($scope);
	$else_content__clickCount($scope);
});
function $setup($scope) {
	$clickCount($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup);
