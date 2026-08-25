// template.marko
const $Menu_content__walks = " D l%c", $Menu_content__template = "<button> </button><!><!>", $Wrapper_content__walks = "D%l", $Wrapper_content__template = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);
const $Wrapper_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a3", "person: <!>", "b%"), { 2($scope) {
	_text($scope.a, $scope.c);
} });
const $item_content__setup = ($scope) => $input_content_direct($scope.a, $Wrapper_content2($scope, { 2: $scope.c }));
const $item_content = _content_closures_resume("a4", /*@__PURE__*/ _content("a4", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrapper_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrapper_content__walks), $item_content__setup), { 2() {} });
const $for_content__entry_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params3) => $for_content__entry_content($scope, $params3[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__for($scope, [$scope._.f]));
const $Menu_content__if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_item);
const $Menu_content__open = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g ? "collapse" : "expand");
	$Menu_content__if($scope, $scope.g ? 0 : 1);
});
const $Menu_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Menu_content__open($scope, !$scope.g);
}));
