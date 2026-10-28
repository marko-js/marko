// tags/inner.marko
const $template = "<span>inner</span>";
const $setup__script$2 = _script("b0", ($scope) => console.log("inner setup"));
const $setup = $setup__script$2;

// tags/outer.marko
const $setup__script$1 = _script("c0", ($scope) => console.log("outer setup"));

// template.marko
const $for_content3__item__script = _script("a14", ($scope) => console.log("tag body row setup", $scope.b));
const $for_content3__item = /*@__PURE__*/ _const(1, $for_content3__item__script);
const $for_content3__$params = ($scope, $params4) => $for_content3__item($scope, $params4[0]);
const $for_content2__item__script = _script("a11", ($scope) => console.log("content row setup", $scope.b));
const $if_content2__setup = _script("a10", ($scope) => console.log("nested setup"));
const $for_content__item__script = _script("a2", ($scope) => console.log("row setup", $scope.c));
const $Body_content__setup = _script("a1", ($scope) => console.log("define setup"));
const $inputtag_content__for = /*@__PURE__*/ _for_of_unkeyed(1, 0, 0, 0, $for_content3__$params);
const $inputtag_content__input_items = /*@__PURE__*/ _init_resume("a16", /*@__PURE__*/ _fill_closure("a25", 6, /*@__PURE__*/ _closure_get(10, ($scope) => $inputtag_content__for($scope, [$scope._._.g]), ($scope) => $scope._._, "a17"), 1));
const $inputtag_content__setup__script = _script("a15", ($scope) => console.log("tag body setup"));
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_items($scope);
	$setup($scope.a);
	$inputtag_content__setup__script($scope);
};
const $inputtag_content = _content$1("a4", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("b"), $inputtag_content__setup);
_content_resume($inputtag_content);
const $body_content__setup__script = _script("a12", ($scope) => console.log("content setup"));
const $if_content__setup__script = _script("a19", ($scope) => console.log("branch setup", document.querySelectorAll("i").length));
const $if_content__count__script = _script("a18", ($scope) => console.log("branch count", $scope._.j));
const $if_content__count = /*@__PURE__*/ _init_resume("a31", /*@__PURE__*/ _if_closure(2, 0, $if_content__count__script));
const $count = /*@__PURE__*/ _let(9, ($scope) => {
	_text($scope.b, $scope.j);
	$if_content__count($scope);
});
const $setup__script = _script("a23", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.j + 1);
}));
