// tags/other.marko
const $template = "<span>other:<!>:<!></span>";
const $walks = "Db%c%l";
const $input$2 = ($scope, input) => {
	_text($scope.a, typeof input);
	$input_name($scope, input.name);
};
const $input_name = ($scope, input_name) => _text($scope.b, input_name);
var other_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input$2);

// tags/spread.marko
const $input__script$1 = _script("d0", ($scope) => _attrs_script($scope, "a"));
const $input$1 = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$input__script$1($scope);
});

// tags/passthrough.marko
const $input__script = _script("c0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs($scope, "a", $scope.d);
	$input_content($scope, $scope.d.content);
	$input__script($scope);
});
const $input_content = /* @__PURE__ */ _dynamic_tag(1);

// template.marko
const $passthrough_content__x = ($scope, x) => _text($scope.a, typeof x);
const $passthrough_content__$params = ($scope, $params3) => $passthrough_content__x($scope, $params3[0]);
const $passthrough_content = /*@__PURE__*/ _content("a1", "params:<!>", "b%", 0, $passthrough_content__$params);
const $spread_content__x = ($scope, x) => _text($scope.a, typeof x);
const $spread_content__$params = ($scope, $params2) => $spread_content__x($scope, $params2[0]);
const $spread_content = /*@__PURE__*/ _content("a0", "params:<!>", "b%", 0, $spread_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(8);
const $input_tag__OR__n = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.l, () => ({
	content: other_default,
	"data-n": $scope.m
})));
const $n = /*@__PURE__*/ _let(12, ($scope) => {
	_text($scope.b, $scope.m);
	$input$1($scope.c, {
		"data-n": $scope.m,
		content: $spread_content($scope)
	});
	$input$1($scope.d, {
		content: other_default,
		"data-n": $scope.m
	});
	$input$1($scope.e, { content: $scope.m ? other_default : void 0 });
	$input($scope.f, {
		"data-n": $scope.m,
		content: $passthrough_content($scope)
	});
	$input($scope.g, {
		content: other_default,
		"data-n": $scope.m
	});
	$input($scope.h, { content: $scope.m ? other_default : void 0 });
	$input_tag__OR__n($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.m + 1);
}));
