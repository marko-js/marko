// tags/child.marko
const $template = "<script><\/script><style></style>";
const $walks = "! b! b";
function $setup($scope) {
	_start_late($scope.a, "\n  { const main = document.querySelector(\"main\");\n  main.dataset.ran = (+main.dataset.ran || 0) + 1;\n  main.dataset.nonce = document.currentScript.nonce; }\n");
	_start_late($scope.b, "p { color: red }");
}
const $input_attrs__script = _script("b0", ($scope) => _attrs_script($scope, "b"));
const $input_attrs = /*@__PURE__*/ _const(4, ($scope) => {
	_attrs($scope, "b", {
		nonce: $scope.$.cspNonce,
		...$scope.e
	});
	$input_attrs__script($scope);
});

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_attrs($scope.a, { "data-x": "1" });
};
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
