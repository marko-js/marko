// template.marko
const $template = "<style>\n  A {}\n</style><style nonce=override>\n  B {}\n</style><style>\n  C {}\n</style><!><!>";
const $walks = " c b%c";
const $if_content__setup = ($scope) => _attr_nonce($scope, "#style/0");
const $spreadAttrs__script = _script("__tests__/template.marko_0_spreadAttrs", ($scope) => _attrs_script($scope, "#style/1"));
const $spreadAttrs = /*@__PURE__*/ _const("spreadAttrs", ($scope) => {
	_attrs($scope, "#style/1", {
		nonce: $scope.$global.cspNonce,
		...$scope.spreadAttrs
	});
	$spreadAttrs__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/2", "<style>\n    D {}\n  </style>", " b", $if_content__setup);
const $mounted = /*@__PURE__*/ _let("mounted/4", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	$spreadAttrs($scope, { nonce: "override-spread" });
	$mounted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
