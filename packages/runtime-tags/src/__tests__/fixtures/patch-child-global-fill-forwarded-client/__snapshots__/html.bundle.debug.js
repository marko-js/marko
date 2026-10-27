// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }, "__tests__/tags/child.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
});

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid.marko": /*@__PURE__*/ (() => `__tests__/tags/mid.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`)() });
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(16 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: $global$1.x,
		show: input.show
	});
	_patch_child_end();
	_fill_global_subscribe("__tests__/tags/mid.marko_0_$global_x#5", $scope0_id);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>t</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button>t</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	mid_default({ show });
	_patch_child_end();
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
