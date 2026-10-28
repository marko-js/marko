// tags/plain.marko
const $template$4 = "<span>plain</span>";
const $walks$4 = "b";
const $setup$4 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko,<span>plain</span>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>plain</span>");
});

// tags/field.marko
const $template$3 = "<label> </label><input>";
const $walks$3 = " D l b";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "PatchAttr:#input/2 aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/thrower.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
function fail() {
	throw new Error("thrown");
}
const $setup$2 = [[], []];
_shells({ "__tests__/tags/thrower.marko": "__tests__/tags/thrower.marko;D ;<p> </p>" });
var thrower_default = _template("__tests__/tags/thrower.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "#text/0", fail(), void 0, 0, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/thrower.marko", 0);
});

// tags/a-tag.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$4, $template$3);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&%c`)("b", $walks$3);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$4], ["#childScope/1>", $setup$3]);
_shells({
	"__tests__/tags/a-tag.marko_2*content": "__tests__/tags/a-tag.marko_2*content,caught",
	"__tests__/tags/a-tag.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/tags/a-tag.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2),
	"__tests__/tags/a-tag.marko": /*@__PURE__*/ (() => `__tests__/tags/a-tag.marko${_shell_marker($setup$1)};${((_w0, _w1) => `/${_w0}&/${_w1}&%c`)("b", $walks$3)};${((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$4, $template$3)}`)()
});
var a_tag_default = _template("__tests__/tags/a-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	plain_default({});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	field_default({ name: input.n });
	_patch_child_end();
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope3 = _peek_scope_id($scope1_id, "#childScope/0", 2);
		thrower_default({});
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/tags/a-tag.marko", "3:2");
	}, void 0, (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("caught");
	}, void 0, "__tests__/tags/a-tag.marko_2*content", "__tests__/tags/a-tag.marko_1*content", 1, void 0, 1);
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/a-tag.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$3]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$3)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$3)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		a_tag_default({ n: row.id });
		_patch_child_end();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
		field_default({ name: `row ${row.id}` });
		_patch_child_end();
		_scope($scope1_id, {
			"#childScope/0": _existing_scope($childScope),
			"#childScope/1": _existing_scope($childScope2)
		}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
