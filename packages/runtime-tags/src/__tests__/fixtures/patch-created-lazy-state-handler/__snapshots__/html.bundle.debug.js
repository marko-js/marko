// tags/picker.marko
const $template$1 = "<button>pick</button>";
const $walks$1 = " b";
_shells({ "__tests__/tags/picker.marko": "__tests__/tags/picker.marko !__tests__/tags/picker.marko_0; ;<button>pick</button>" });
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>pick</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/picker.marko_0");
	$scope0_page ? _scope($scope0_id, { input_onPick: input.onPick }, "__tests__/tags/picker.marko", 0, { input_onPick: ["input.onPick"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_onPick", input.onPick, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $Picker_withLoadAssets = withLoadAssets(picker_default, flush, "ready:__tests__/tags/picker.marko");
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%bD ;<!><!><span> </span>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)(" b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(($scope0_page ? 1 : 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Picker_withLoadAssets({ onPick: _resume(function() {
				count++;
			}, "__tests__/template.marko_1/onPick", $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<span>${_text_resume($scope0_id, "#text/1", count)}</span>`);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
