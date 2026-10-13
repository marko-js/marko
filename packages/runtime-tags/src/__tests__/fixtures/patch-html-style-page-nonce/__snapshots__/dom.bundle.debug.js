// template.marko
const $template = "<!><!><style></style>";
const $walks = "b%b b";
const $setup = () => {};
const $else_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#0:5", ($scope) => _attrs_script($scope, "#style/1"));
const $else_content__input_attrs = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_attrs", /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	_attrs($scope, "#style/1", {
		nonce: $scope.$global.cspNonce,
		...$scope._.input_attrs
	});
	$else_content__input_attrs__script($scope);
}));
const $else_content__setup = ($scope) => {
	$else_content__input_attrs._($scope);
	_attr_nonce($scope, "#style/0");
};
const $if = /*@__PURE__*/ _if("#text/0", "<p>a</p>", 0, 0, "<style>p.s { color: red }</style><style>p.t { color: green }</style>", " b ", $else_content__setup);
const $input_page = ($scope, input_page) => {
	_text_content($scope["#style/1"], `p.u { --page: ${_to_text(input_page)} }`);
	$if($scope, input_page === 0 ? 0 : 1);
};
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#5", ($scope) => _attrs_script($scope, "#style/1"));
const $input_attrs = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_attrs", ($scope) => {
	_attrs($scope, "#style/1", {
		nonce: $scope.$global.cspNonce,
		...$scope.input_attrs
	});
	$else_content__input_attrs($scope);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_attrs($scope, input.attrs);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
