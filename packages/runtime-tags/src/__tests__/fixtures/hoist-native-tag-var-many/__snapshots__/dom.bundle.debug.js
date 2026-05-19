// template.marko
const $template = "<!><!><hr><!><hr><!><!>";
const $walks = "b%c%c%c";
const $el3_getter = _hoist_resume("__tests__/template.marko_0_#li/hoist", "#li/0", "BranchScopes:#ul/0", "BranchScopes:#text/2");
const $for_content4__setup = ($scope) => _attr($scope["#li/0"], "data-index", $scope._["#LoopKey"] * 4 + $scope["#LoopKey"]);
const $for_content3__for = /* @__PURE__ */ _for_to("#ul/0", "<li></li>", " b", $for_content4__setup);
const $for_content3__setup = ($scope) => $for_content3__for($scope, [
	3,
	0,
	1
]);
const $el2_getter = _hoist("#div/0", "BranchScopes:#text/1");
const $el_getter = _hoist("#div/0", "BranchScopes:#text/0");
const $for = /* @__PURE__ */ _for_to("#text/0", "<div></div>", " b");
const $for2 = /* @__PURE__ */ _for_to("#text/1", "<div></div>", " b");
const $to = /* @__PURE__ */ _let("to/3", ($scope) => $for2($scope, [
	$scope.to,
	0,
	1
]));
const $for3 = /* @__PURE__ */ _for_to("#text/2", "<ul></ul>", " b", $for_content3__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const el = $el_getter($scope)();
		if (el) {
			el.innerHTML = "First Only";
		}
	}
	{
		const el = $el2_getter($scope)();
		if (el) {
			el.innerHTML = "First Only";
		}
	}
	{
		let i = 0;
		for (const el of $el3_getter($scope)) {
			el.innerHTML = `All (${i++})`;
		}
	}
});
function $setup($scope) {
	$for($scope, [
		5,
		0,
		1
	]);
	$to($scope, 3);
	$for3($scope, [
		3,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
