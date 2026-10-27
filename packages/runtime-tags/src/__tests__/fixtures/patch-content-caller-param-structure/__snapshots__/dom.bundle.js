// tags/toggle-if.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _init_resume("e0", /*@__PURE__*/ _fill_join("e2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $input_open$4 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// tags/toggle-for.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_content = /*@__PURE__*/ _init_resume("d0", /*@__PURE__*/ _fill_join("d2", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__dynamicTag($scope, $scope._.e))));
const $for = /*@__PURE__*/ _for_until_unkeyed(0, "<!><!><!>", "b%", $for_content__input_content);
const $input_open$3 = ($scope, input_open) => $for($scope, [
	input_open ? 1 : 0,
	0,
	1
]);

// tags/toggle-tag.marko
const $inputopendivsection_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputopendivsection_content__input_content = /*@__PURE__*/ _init_resume("f1", /*@__PURE__*/ _fill_join_closure("f3", 4, /*@__PURE__*/ _closure_get(5, ($scope) => $inputopendivsection_content__dynamicTag($scope, $scope._.e), 0, "f2"), 0));
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("f0", "<!><!><!>", "b%", $inputopendivsection_content__input_content));
const $input_open$2 = ($scope, input_open) => $dynamicTag$2($scope, input_open ? "div" : "section");

// tags/param-host.marko
const $inputopendivsection_content__input_label = /*@__PURE__*/ _init_resume("c10", /*@__PURE__*/ _fill_join_closure("c12", 7, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h), 0, "c11"), 3));
const $inputopendivsection_content = /*@__PURE__*/ _content$1("c9", "<p>own <!></p>", "Db%", $inputopendivsection_content__input_label);
const $toggletag_content__input_label$1 = /*@__PURE__*/ _init_resume("c6", /*@__PURE__*/ _fill_join_closure("c12", 7, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h), 0, "c7"), 2));
const $toggletag_content$1 = _content$1("c8", "<p>tag <!></p>", "Db%", $toggletag_content__input_label$1);
const $togglefor_content__input_label$1 = /*@__PURE__*/ _init_resume("c3", /*@__PURE__*/ _fill_join_closure("c12", 7, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h), 0, "c4"), 1));
const $togglefor_content$1 = _content$1("c5", "<p>for <!></p>", "Db%", $togglefor_content__input_label$1);
const $toggleif_content__input_label$1 = /*@__PURE__*/ _init_resume("c0", /*@__PURE__*/ _fill_join_closure("c12", 7, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h), 0, "c1"), 0));
const $toggleif_content$1 = _content$1("c2", "<p>if <!></p>", "Db%", $toggleif_content__input_label$1);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(3, $inputopendivsection_content);
const $input_open$1 = ($scope, input_open) => {
	$dynamicTag$1($scope, input_open ? "div" : "section");
	$input_open$4($scope.a, input_open);
	$input_open$3($scope.b, input_open);
	$input_open$2($scope.c, input_open);
};

// tags/const-host.marko
const $showdivsection_content__input_label = /*@__PURE__*/ _init_resume("b10", /*@__PURE__*/ _fill_join_closure("b12", 7, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h), 0, "b11"), 3));
const $showdivsection_content = /*@__PURE__*/ _content$1("b9", "<p>own <!></p>", "Db%", $showdivsection_content__input_label);
const $toggletag_content__input_label = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _fill_join_closure("b12", 7, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h), 0, "b7"), 2));
const $toggletag_content = _content$1("b8", "<p>tag <!></p>", "Db%", $toggletag_content__input_label);
const $togglefor_content__input_label = /*@__PURE__*/ _init_resume("b3", /*@__PURE__*/ _fill_join_closure("b12", 7, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h), 0, "b4"), 1));
const $togglefor_content = _content$1("b5", "<p>for <!></p>", "Db%", $togglefor_content__input_label);
const $toggleif_content__input_label = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_join_closure("b12", 7, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h), 0, "b1"), 0));
const $toggleif_content = _content$1("b2", "<p>if <!></p>", "Db%", $toggleif_content__input_label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(3, $showdivsection_content);
const $show = ($scope, show) => {
	$dynamicTag($scope, show ? "div" : "section");
	$input_open$4($scope.a, show);
	$input_open$3($scope.b, show);
	$input_open$2($scope.c, show);
};
const $input_open = $show;

// template.marko
const $open = /*@__PURE__*/ _let(6, ($scope) => {
	$input_open$1($scope.a, $scope.g);
	$input_open($scope.b, $scope.g);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));
