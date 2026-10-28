// tags/list/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list/index.marko": "__tests__/tags/list/index.marko !; ;<ul></ul>",
	"__tests__/tags/list/index.marko_1*shell": "__tests__/tags/list/index.marko_1*shell;D%b%;<li><!><!></li>"
});
var list_default = _template("__tests__/tags/list/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item, 1, $scope0_reason, 0)}${_text_resume($scope1_id, "#text/1", input.suffix, 2, $scope0_reason, 1)}</li>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/list/index.marko_1_input_suffix#0:4/init");
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/list/index.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/tags/list/index.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, { input_suffix: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.suffix }, "__tests__/tags/list/index.marko", 0, { input_suffix: ["input.suffix"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/list/index.marko_fill0", input.suffix, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)(" b")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	list_default({
		items: _patch_live($childScope, count ? ["a", "b"] : ["a"], $scope0_id, ""),
		suffix: input.s
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
