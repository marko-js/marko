// tags/card.marko
const $template = "<section></section>";
const $input_content = ($scope, input_content) => _attr_content($scope, "a", input_content);

// tags/outer.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("c2", "<p>caught <!></p>", "Db%", 0, $catch_content__$params);
const $if_content__o = /*@__PURE__*/ _closure_get(6, ($scope) => $input_content($scope.a, $scope._._.f), ($scope) => $scope._._, "c0");
const $try_content__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__o);
const $try_content__o = /*@__PURE__*/ _init_resume("c8", /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1), 0, "c1"));
const $o = /*@__PURE__*/ _fill_let("c5", 5, /* @__PURE__ */ _closure($try_content__o, $if_content__o));
const $setup__script = _script("c4", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));
