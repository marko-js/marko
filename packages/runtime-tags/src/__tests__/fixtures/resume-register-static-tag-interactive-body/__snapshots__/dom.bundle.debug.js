// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__count__OR__i = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._._._.count * $scope.i));
const $for_content__count = /*@__PURE__*/ _closure_get("count", $for_content__count__OR__i, ($scope) => $scope._._._, "__tests__/template.marko_3_count#2/subscribe");
const $for_content__setup = $for_content__count;
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__count__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span class=inner> </span>", "D ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $tag_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#2/subscribe");
const $tag_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope._, +$scope._.count + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$show($scope._, !$scope._.show);
	});
});
const $tag_content__setup = ($scope) => {
	$tag_content__count($scope);
	$tag_content__show($scope);
	$tag_content__setup__script($scope);
};
const $tag_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $tag_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $tag_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#3/subscribe");
const $tag_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button id=inc> </button><!><button id=toggle>toggle</button>", " D l%b ", $tag_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tag_content);
const $tag = $dynamicTag;
const $count__closure = /*@__PURE__*/ _closure($tag_content__count, $for_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $show__closure = /*@__PURE__*/ _closure($tag_content__show);
const $show = /*@__PURE__*/ _let("show/3", $show__closure);
function $setup($scope) {
	$tag($scope, "section");
	$count($scope, 0);
	$show($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
