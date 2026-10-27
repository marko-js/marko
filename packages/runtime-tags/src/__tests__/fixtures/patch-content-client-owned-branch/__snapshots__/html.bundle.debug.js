// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko !;b%;<!><!><!>",
	"__tests__/tags/panel/index.marko_1*shell": "__tests__/tags/panel/index.marko_1*shell;b%;<!><!><!>"
});
var panel_default = _template("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/panel/index.marko_1_input_body#0:4/init");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/panel/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, void 0, void 0, void 0, ["__tests__/tags/panel/index.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_body: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.body }, "__tests__/tags/panel/index.marko", 0, { input_body: ["input.body"] }) : (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel/index.marko_fill0", input.body, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.body));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	panel_default({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_1_input_title#0:4/init" : "__tests__/template.marko_1_input_title#0:4/subscribe");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"));
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/6": _write_if($scope0_reason, 0) && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
