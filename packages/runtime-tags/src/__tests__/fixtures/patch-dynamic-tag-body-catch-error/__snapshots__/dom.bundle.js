// tags/card.marko
function boom() {
	throw new Error("boom");
}
const $if_content2__setup = ($scope) => _text($scope.a, boom());
const $try_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content2__setup);
const $try_content__fail = /*@__PURE__*/ _closure_get_patch("b4", 7, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _closure_get_patch("b0", 6, ($scope) => $if_content__dynamicTag($scope, $scope._._.e), ($scope) => $scope._._, "b6", 0);
const $catch_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $catch_content__err = ($scope, err) => {
	_text($scope.a, err?.message);
	$catch_content__if($scope, err ? 0 : 1);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content$1("b3", "<i> </i><!><!>", "D l%", 0, $catch_content__$params);
const $fail = /*@__PURE__*/ _fill_let("b7", 5, /* @__PURE__ */ _closure($try_content__fail));
const $setup__script = _script("b5", ($scope) => _on($scope.a, "click", function() {
	$fail($scope, true);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.a, $scope._.e), 0, "a2", 0);
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
