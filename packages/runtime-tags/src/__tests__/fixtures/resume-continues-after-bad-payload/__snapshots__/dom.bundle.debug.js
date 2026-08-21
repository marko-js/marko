// template.marko
const $template = "<button> </button><div id=first><!></div><div id=second><!></div>";
const $walks = " D lD%lD%l";
const stalePayloads = "<script>M._.w=(w=>()=>{try{w()}catch(e){console.log(\"resume threw: \"+e.message)}})(M._.w);" + "M._.r.push(_=>{console.log(\"stale payload applied\");return 0},_=>{throw new Error(\"stale payload\")})<" + "/script>";
const $await_content2__b__script = _script("__tests__/template.marko_6_b#2", ($scope) => console.log(`effect b=${$scope.b}`));
const $await_content2__b = /*@__PURE__*/ _const("b", ($scope) => {
	_text($scope["#text/0"], $scope.b);
	$await_content2__b__script($scope);
});
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_5*content", "loading...");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("b", 2));
};
const $await_content__a__script = _script("__tests__/template.marko_3_a#3", ($scope) => console.log(`effect a=${$scope.a}`));
const $await_content__a = /*@__PURE__*/ _const("a", ($scope) => {
	_text($scope["#text/0"], $scope.a);
	$await_content__a__script($scope);
});
const $await_content__setup = ($scope) => _html($scope, stalePayloads, "#text/1");
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "loading...");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!>", "%b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("a", 1));
};
const $n = /*@__PURE__*/ _let("n/4", ($scope) => _text($scope["#text/1"], $scope.n));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
