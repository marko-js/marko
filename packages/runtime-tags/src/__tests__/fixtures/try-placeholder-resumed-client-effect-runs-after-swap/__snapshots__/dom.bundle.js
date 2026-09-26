// template.marko
const $if_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	console.log("inner clicked");
}));
const $placeholder_content = _content("a1", "loading");
const $try_content__if = /*@__PURE__*/ _if(0, "<button id=inner>inner</button>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "a3");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
