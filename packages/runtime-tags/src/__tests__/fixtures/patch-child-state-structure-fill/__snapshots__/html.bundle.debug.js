// tags/toggle-panel/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/toggle-panel/index.marko": "__tests__/tags/toggle-panel/index.marko !; ;<div></div>",
	"__tests__/tags/toggle-panel/index.marko_1*shell": "__tests__/tags/toggle-panel/index.marko_1*shell;D ;<em> </em>"
});
var toggle_panel_default = _template("__tests__/tags/toggle-panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/toggle-panel/index.marko_1_input_title#0:4/init");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle-panel/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/toggle-panel/index.marko_1*shell"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_title: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }, "__tests__/tags/toggle-panel/index.marko", 0, { input_title: ["input.title"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle-panel/index.marko_fill0", input.title, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)(" b")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	toggle_panel_default({
		show: count % 2 === 0,
		title: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
