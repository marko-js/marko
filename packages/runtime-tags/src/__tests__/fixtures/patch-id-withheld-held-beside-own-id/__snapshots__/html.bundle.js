// tags/inner.marko
const $template$1 = "<p><!></p>";
const $setup$1 = [[], []];
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
const $template = /*@__PURE__*/ ((_w0) => `<input><label>own</label><button>clear</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b b/${_w0}&`)("D%l");
const $setup = _shell_setup([[], ["b0"]], ["d>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => ` b b b/${_w0}&`)("D%l")};${((_w0) => `<input><label>own</label><button>clear</button>${_w0}`)($template$1)}`)() });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const own = _id("A");
	let c = input.content;
	_html(`<input${_attr("id", own, $scope0_id, "aa$id", 0, 0)}>${_el_resume($scope0_id, "a", 0)}<label${_attr("for", own, $scope0_id, "ab$for", 0, 0)}>own</label>${_el_resume($scope0_id, "b", 0)}<button>clear</button>${_el_resume($scope0_id, "c")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "d", 0);
	inner_default({ content: c });
	_patch_child_end();
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, { d: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// template.marko
_shells({
	a0: "a0; b D ;<input><label> </label>",
	"~a0": "~a0; b D ;<input><label> </label>",
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
		card_default({ content: _content("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", row.id, 1, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "b", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
