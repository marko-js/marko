// tags/picker.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/picker.marko": "__tests__/tags/picker.marko !;b%;<!><!><!>",
	"__tests__/tags/picker.marko_1*shell": "__tests__/tags/picker.marko_1*shell __tests__/tags/picker.marko_1_sel#0:1_item#4/setup!__tests__/tags/picker.marko_1; D%b%;<button><!><!></button>"
});
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let sel = 1;
	_for_of([1, 2], (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "#text/1", item === sel ? "*" : "")}${_text_mark($scope1_id, "#text/2", item, 2, 0, 0)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/picker.marko_1");
		_patch_write($scope1_id, "PatchWrite:item", item, 1);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/picker.marko", "2:2", { item: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/picker.marko_1*shell", 0, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_0_sel#1/fill", sel, 1);
	_scope($scope0_id, {}, "__tests__/tags/picker.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			picker_default({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
