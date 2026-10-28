// tags/inner.marko
const $template$2 = "<p><!></p>";
const $setup$2 = [[], []];
_shells({ c: "c;D%;<p><!></p>" });
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</p>");
	_scope($scope0_id, {});
});

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<button>clear</button>${_w0}${_w1}`)($template$2, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("D%l", "D%l");
const $setup$1 = _shell_setup([[], ["b0"]], ["b>", $setup$2], ["c>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("D%l", "D%l")};${((_w0, _w1) => `<button>clear</button>${_w0}${_w1}`)($template$2, $template$2)}`)() });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let o = input.other;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	inner_default({ content: c });
	_patch_child_end();
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	inner_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", o, 1);
	_scope($scope0_id, {
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	}) || (_content_withhold(input.content), _content_withhold(input.other));
});

// tags/relay.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	d0: "d0; b ;<input><label>relay</label>",
	"~d0": "~d0; b ;<input><label>relay</label>",
	d: /*@__PURE__*/ ((_w0) => `d${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var relay_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		other: input.content,
		content: _content("d0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const rid = _id("A");
			_html(`<input${_attr("id", rid, $scope1_id, "aa$id", 0, 0)}>${_el_resume($scope1_id, "a", 0)}<label${_attr("for", rid, $scope1_id, "ab$for", 0, 0)}>relay</label>${_el_resume($scope1_id, "b", 0)}`);
			_scope($scope1_id, {});
		}, $scope0_id, 2)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0; b Db%;<input><label>p <!></label>",
	"~a0": "~a0; b Db%;<input><label>p <!></label>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		relay_default({ content: _content("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>p ${_text_resume($scope2_id, "c", row.id, 2, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "b", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
