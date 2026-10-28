// tags/plain.marko
const $template$3 = "<span>plain</span>";
const $setup$3 = [[], []];
_shells({ d: "d,<span>plain</span>" });
var plain_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>plain</span>");
});

// tags/field.marko
const $template$2 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$2 = [[], []];
_shells({ c: "c; D l ;<label> </label><input>" });
var field_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "ac$id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "ac$aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// tags/thrower.marko
const $template$1 = "<p> </p>";
function fail() {
	throw new Error("thrown");
}
const $setup$1 = [[], []];
_shells({ e: "e;D ;<p> </p>" });
var thrower_default = _template("e", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", fail(), 1, 0, 0)}</p>`);
	_scope($scope0_id, {});
});

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$3, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&%c`)("b", $walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$3], ["b>", $setup$2]);
_shells({
	b0: "b0,caught",
	b1: /*@__PURE__*/ ((_w0) => `b1${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1),
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&%c`)("b", $walks$1)};${((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$3, $template$2)}`)()
});
var a_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	plain_default({});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	field_default({ name: input.n });
	_patch_child_end();
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope3 = _peek_scope_id($scope1_id, "a", 2);
		thrower_default({});
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope3) });
	}, void 0, (error) => {
		_scope_reason();
		_scope_id();
		_html("caught");
	}, void 0, "b0", "b1", 1, void 0, 1);
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks, $walks$1)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template$2)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		a_tag_default({ n: row.id });
		_patch_child_end();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
		field_default({ name: `row ${row.id}` });
		_patch_child_end();
		_scope($scope1_id, {
			a: _existing_scope($childScope),
			b: _existing_scope($childScope2)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
