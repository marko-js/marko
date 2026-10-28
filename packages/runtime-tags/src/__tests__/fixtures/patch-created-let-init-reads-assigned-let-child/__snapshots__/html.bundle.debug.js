// tags/child.marko
const $template$1 = "<span> </span><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;D l%;<span> </span><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<em> </em>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.v, 1, $scope0_reason, 0)}</span>`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.a, 1, $scope0_reason, 1)}</em>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }, "__tests__/tags/child.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_input_a#0:4_x#3/init"], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({
				v: y,
				a: input.a
			});
			_patch_child_end();
			_html(`<button>${_text_resume($scope1_id, "#text/2", x + input.a)}</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:4/init");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 1) && x,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { x: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
}, 1);
