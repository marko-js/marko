// tags/child.marko
const $template$1 = "<span> </span><button class=b>b</button>";
const $walks$1 = "D l b";
const $setup$1 = [["__tests__/tags/child.marko_0_a#2_b#3/init"], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko __tests__/tags/child.marko_0_a#2_b#3/init!__tests__/tags/child.marko_0;D l ;<span> </span><button class=b>b</button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	let b = 2;
	_html(`<span>${_text_resume($scope0_id, "#text/0", a + b)}</span><button class=b>b</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_write($scope0_id, "PatchWrite:a", a, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", b, 1);
	_scope($scope0_id, {
		a,
		b
	}, "__tests__/tags/child.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
