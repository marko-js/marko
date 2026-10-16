// tags/child.marko
const $template$1 = "<script><\/script><style></style>";
const $walks$1 = "! b! b";
function $setup$1($scope) {
	_start_late($scope["#script/0"], "\n  { const main = document.querySelector(\"main\");\n  main.dataset.ran = (+main.dataset.ran || 0) + 1;\n  main.dataset.nonce = document.currentScript.nonce; }\n");
	_start_late($scope["#style/1"], "p { color: red }");
}
const $input_attrs__script = _script("__tests__/tags/child.marko_0_input_attrs#4", ($scope) => _attrs_script($scope, "#style/1"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#style/1", {
		nonce: $scope.$global.cspNonce,
		...$scope.input_attrs
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<main><button>show</button><!></main>";
const $walks = "D b%l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_attrs($scope["#childScope/0"], { "data-x": "1" });
};
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
