// template.marko
const $Tree_content2__walks = " D l%c", $Tree_content2__template = "<button> </button><!><!>";
const $Tree_content3__input_depth = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._._.f), ($scope) => $scope._._._, "a0");
const $Tree_content3__setup = ($scope) => {
	$Tree_content3__input_depth($scope);
	$Tree_content3__input_content($scope);
};
const $Tree_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $Tree_content3__input_content = /*@__PURE__*/ _closure_get(9, ($scope) => $Tree_content3__dynamicTag($scope, $scope._._._.g), ($scope) => $scope._._._, "a1");
const $Tree_content3 = _content("a2", "<!>: <!><!>", "%c%", $Tree_content3__setup);
const $if_content2__input_depth = /*@__PURE__*/ _closure_get(8, ($scope) => $Tree_content2__input_depth($scope.a, $scope._._.f - 1), ($scope) => $scope._._, "a3");
const $if_content2__setup = ($scope) => {
	$if_content2__input_depth($scope);
	$Tree_content2__setup._($scope.a, $scope._._._);
	$Tree_content2__tag_input_content($scope.a, $Tree_content3($scope));
};
const $if_content__if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content2__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content2__walks), $if_content2__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_content._($scope);
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.g));
const $Tree_content2__if = /*@__PURE__*/ _if(2, "<!><!><!><!>", "b%b%", $if_content__setup);
const $Tree_content2__open = /*@__PURE__*/ _let(7, ($scope) => $Tree_content2__if($scope, $scope.h ? 0 : 1));
const $Tree_content2__setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$Tree_content2__open($scope, !$scope.h);
}));
const $Tree_content2__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Tree_content2__open($scope, false);
	$Tree_content2__setup__script($scope);
});
const $Tree_content2__input_depth__closure = /*@__PURE__*/ _closure($if_content2__input_depth, $Tree_content3__input_depth);
const $Tree_content2__input_depth = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__input_depth($scope);
	$Tree_content2__input_depth__closure($scope);
});
const $Tree_content2__tag_input_content__closure = /*@__PURE__*/ _closure($Tree_content3__input_content);
const $Tree_content2__tag_input_content = /*@__PURE__*/ _const(6, ($scope) => {
	$if_content__input_content($scope);
	$Tree_content2__tag_input_content__closure($scope);
});
const $Tree_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a6");
const $Tree_content = _content("a7", "leaf <!>", "b%", $Tree_content__input_label);
