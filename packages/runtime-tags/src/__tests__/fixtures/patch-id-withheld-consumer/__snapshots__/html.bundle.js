// tags/card.marko
const $template = "<input><label>own</label><button>clear</button><!><!>";
const $walks = " b b b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b b b%;<input><label>own</label><button>clear</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const own = _id("A");
	let c = input.content;
	_html(`<input${_attr("id", own, $scope0_id, "a", 0, 0)}>${_el_resume($scope0_id, "a", 0)}<label${_attr("for", own, $scope0_id, "b", 0, 0)}>own</label>${_el_resume($scope0_id, "b", 0)}<button>clear</button>${_el_resume($scope0_id, "c")}`);
	_dynamic_tag($scope0_id, "d", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a0: "a0; b D ;<input><label> </label>",
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
		card_default({ content: _content_kept("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "a", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "b", 0, 0)}>${_patch_text($scope2_id, "c", row.id, void 0, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "b", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
