// tags/toggle-if.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("f0", 0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $input_open$5 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);

// tags/toggle-for.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_content = /*@__PURE__*/ _for_closure_patch("e0", 0, ($scope) => $for_content__dynamicTag($scope, $scope._.e), 5);
const $for = /*@__PURE__*/ _for_until_unkeyed(0, "<!><!><!>", "b%", $for_content__input_content);
const $input_open$4 = ($scope, input_open) => $for($scope, [input_open ? 1 : 0]);

// tags/toggle-tag.marko
const $inputopendivsection_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputopendivsection_content__input_content = /*@__PURE__*/ _closure_get_patch("g1", 5, ($scope) => $inputopendivsection_content__dynamicTag($scope, $scope._.e), 0, "g2", 0);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("g0", "<!><!><!>", "b%", $inputopendivsection_content__input_content));
const $input_open$3 = ($scope, input_open) => $dynamicTag$1($scope, input_open ? "div" : "section");

// tags/param-host.marko
const $inputopendivsection_content__input_label = /*@__PURE__*/ _closure_get_patch("d7", 8, ($scope) => _text($scope.a, $scope._.h), 0, "d8", 3);
const $inputopendivsection_content = /*@__PURE__*/ _content$1("d6", "<p>own <!></p>", "Db%", $inputopendivsection_content__input_label);
const $toggletag_content__input_label$1 = /*@__PURE__*/ _closure_get_patch("d4", 8, ($scope) => _text($scope.a, $scope._.h), 0, "d8", 2);
const $toggletag_content$1 = _content$1("d5", "<p>tag <!></p>", "Db%", $toggletag_content__input_label$1);
const $togglefor_content__input_label$1 = /*@__PURE__*/ _closure_get_patch("d2", 8, ($scope) => _text($scope.a, $scope._.h), 0, "d8", 1);
const $togglefor_content$1 = _content$1("d3", "<p>for <!></p>", "Db%", $togglefor_content__input_label$1);
const $toggleif_content__input_label$1 = /*@__PURE__*/ _closure_get_patch("d0", 8, ($scope) => _text($scope.a, $scope._.h), 0, "d8", 0);
const $toggleif_content$1 = _content$1("d1", "<p>if <!></p>", "Db%", $toggleif_content__input_label$1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(3, $inputopendivsection_content);
const $input_open$2 = ($scope, input_open) => {
	$dynamicTag($scope, input_open ? "div" : "section");
	$input_open$5($scope.a, input_open);
	$input_open$4($scope.b, input_open);
	$input_open$3($scope.c, input_open);
};

// tags/outer.marko
const $input_open$1 = ($scope, input_open) => $input_open$2($scope.a, input_open);

// tags/define-host.marko
const $opendivsection_content__input_label = /*@__PURE__*/ _closure_get_patch("b7", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b9", 3);
const $opendivsection_content = /*@__PURE__*/ _content$1("b6", "<p>own <!></p>", "Db%", $opendivsection_content__input_label);
const $toggletag_content__input_label = /*@__PURE__*/ _closure_get_patch("b4", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b9", 2);
const $toggletag_content = _content$1("b5", "<p>tag <!></p>", "Db%", $toggletag_content__input_label);
const $togglefor_content__input_label = /*@__PURE__*/ _closure_get_patch("b2", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b9", 1);
const $togglefor_content = _content$1("b3", "<p>for <!></p>", "Db%", $togglefor_content__input_label);
const $toggleif_content__input_label = /*@__PURE__*/ _closure_get_patch("b0", 5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b9", 0);
const $toggleif_content = _content$1("b1", "<p>if <!></p>", "Db%", $toggleif_content__input_label);
const $Sel_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(3, $opendivsection_content);
const $Sel_content__open = ($scope, open) => {
	$Sel_content__dynamicTag($scope, open ? "div" : "section");
	$input_open$5($scope.a, open);
	$input_open$4($scope.b, open);
	$input_open$3($scope.c, open);
};
const $input_open = ($scope, input_open) => $Sel_content__open($scope.a, input_open);

// template.marko
const $open = _let(6, ($scope) => {
	$input_open$1($scope.a, $scope.g);
	$input_open($scope.b, $scope.g);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));
