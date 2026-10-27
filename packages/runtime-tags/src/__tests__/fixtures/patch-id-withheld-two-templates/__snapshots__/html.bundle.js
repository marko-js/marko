// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let o = input.other;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", o, {}, 10, void 0, void 0, void 0, (_mask_group($scope0_reason, 1) & 1) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || (_content_withhold(input.content), _content_withhold(input.other));
});

// tags/relay.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	c0: "c0; b ;<input><label>relay</label>",
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var relay_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default({
		other: input.content,
		content: _content_kept("c0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const rid = _id("A");
			_html(`<input${_attr("id", rid, $scope1_id, "a", 0, 0)}>${_el_resume($scope1_id, "a", 0)}<label${_attr("for", rid, $scope1_id, "b", 0, 0)}>relay</label>${_el_resume($scope1_id, "b", 0)}`);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0; b Db%;<input><label>p <!></label>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a", 0);
		relay_default({ content: _content_kept("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "a", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "b", 0, 0)}>p ${_patch_text($scope2_id, "c", row.id, 2, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "b", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
