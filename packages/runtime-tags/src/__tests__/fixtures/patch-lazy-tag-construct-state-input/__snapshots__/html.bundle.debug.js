// child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<span> </span>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $template = "<button class=n> </button><main></main>";
const $walks = " D l b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button class=n> </button><main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_input_label#0:6_n#0:7/init"], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(6);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Child_withLoadAssets({ label: `${input.label}${n}` });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $wg__input_show)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "3:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
