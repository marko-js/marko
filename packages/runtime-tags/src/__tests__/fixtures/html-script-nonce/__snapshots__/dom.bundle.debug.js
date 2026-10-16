// template.marko
const $template = "<script type=magic><\/script><script type=magic nonce=override><\/script><script><\/script><!><!>";
const $walks = "! b b! b%c";
const $if_content__setup = ($scope) => _start_late($scope["#script/0"], "\n    D\n  ");
const $spreadAttrs__script = _script("__tests__/template.marko_0_spreadAttrs#4", ($scope) => _attrs_script($scope, "#script/2"));
const $spreadAttrs = /*@__PURE__*/ _const("spreadAttrs", ($scope) => {
	_attrs($scope, "#script/2", {
		nonce: $scope.$global.cspNonce,
		type: "magic",
		...$scope.spreadAttrs
	});
	_start_late($scope["#script/2"], "\n  C\n");
	$spreadAttrs__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/3", "<script type=magic><\/script>", "! ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let("mounted/5", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	_start_late($scope["#script/0"], "\n  A\n");
	_start_late($scope["#script/1"], "\n  B\n");
	$spreadAttrs($scope, { nonce: "override-spread" });
	$mounted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
