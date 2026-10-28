// tags/child.marko
const $template$1 = "<div><!><button id=c>c</button></div>";
const $walks$1 = "D%b l";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;D%b ;<div><!><button id=c>c</button></div>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell __tests__/tags/child.marko_1_c#0:6/init;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const l = input.label + "!";
			_filled_guard($scope0_reason, 1) ? _patch_fill($scope1_id, "PatchFill:__tests__/tags/child.marko_fill2", l) : _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_label#0:5/init");
			_html(`<p>${_text_resume($scope1_id, "#text/0", l + "#" + c)}</p>`);
			_scope($scope1_id, {
				l,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "3:4", { l: "4:12" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_html(`<button id=c>c</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", c, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		c
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		c: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.label, !$sg__input_label);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		show: input.show,
		label: n ? "X" : "Y"
	});
	_patch_child_end();
	_html(`<button id=p>p</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
