// template.marko
const $template = "<style>\n  A {}\n</style><style nonce=override>\n  B {}\n</style><style></style><!><!>";
const $walks = "!c! b%c";
const $spreadAttrs__script = _script("__tests__/template.marko_0_spreadAttrs#2", ($scope) => _attrs_script($scope, "#style/0"));
const $spreadAttrs = /*@__PURE__*/ _const("spreadAttrs", ($scope) => {
	_attrs($scope, "#style/0", {
		nonce: $scope.$global.cspNonce,
		...$scope.spreadAttrs
	});
	$spreadAttrs__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", "<style>\n    D {}\n  </style>", "!");
const $mounted = /*@__PURE__*/ _let("mounted/3", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	_start_late($scope["#style/0"], "\n  C {}\n");
	$spreadAttrs($scope, { nonce: "override-spread" });
	$mounted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
