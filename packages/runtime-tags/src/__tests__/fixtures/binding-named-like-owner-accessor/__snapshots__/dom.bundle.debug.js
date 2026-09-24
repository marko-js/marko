// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $if_content2___ = /*@__PURE__*/ _let("_/2/2", ($scope) => _text($scope["#text/1"], $scope["_/2"]));
const $if_content2__count = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content2___($scope, $scope._.count));
const $if_content2__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content2___($scope, $scope["_/2"] * 10);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__count._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__count__OR___ = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._["_/4"] + $scope._._.count));
const $if_content__count = /*@__PURE__*/ _closure_get("count", $if_content__count__OR___, ($scope) => $scope._._, "__tests__/template.marko_2_count#2/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$if_content___._($scope);
};
const $if_content___ = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__count__OR___);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__if = /*@__PURE__*/ _if("#text/2", "<span> </span>", "D ", $if_content__setup);
const $for_content___ = /*@__PURE__*/ _const("_/4", ($scope) => {
	_text($scope["#text/1"], $scope["_/4"]);
	$for_content__if($scope, $scope["_/4"] ? 0 : 1);
	$if_content___($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content___($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button class=inc> </button><!><!>", " D l%", $for_content__setup, $for_content__$params);
const $if = /*@__PURE__*/ _if("#text/1", "<button class=mul> </button>", " D ", $if_content2__setup);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$for($scope, [[$scope.count]]);
	$if($scope, $scope.count ? 0 : 1);
	$count__closure($scope);
	$if_content2__count($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
