// tags/child/index.marko
const $template$1 = "<p> </p><button>+</button>";
const $walks$1 = "D l b";
const $setup$1 = [["__tests__/tags/child/index.marko_0_input_x#4_n#5/init"], ["__tests__/tags/child/index.marko_0"]];
_shells({ "__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko __tests__/tags/child/index.marko_0_input_x#4_n#5/init!__tests__/tags/child/index.marko_0;D l ;<p> </p><button>+</button>" });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.x, 1, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5", 1, $sg__input_x && 2, "input_x");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child/index.marko_fill0", n, 1);
	_scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({ x: input.a });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
}, 1);
