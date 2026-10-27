// lazy.marko
const $template$1 = "<button class=child><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/lazy.marko_0"]];
_shells({ "__tests__/lazy.marko": "__tests__/lazy.marko !__tests__/lazy.marko_0; D%c%;<button class=child><!>:<!></button>" });
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/lazy.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/lazy.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<button class=open>open</button><!><!><!>";
const $walks = " b%b%c";
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko", [{ type: "idle" }]);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b%;<button class=open>open</button><!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=open>open</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Lazy_withLoadAssets({ label: "s" });
			$scope0_page && _scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			$Lazy_withLoadAssets({ label: "c" });
			$scope0_page && _scope($scope2_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "2:6" });
}, 1);
