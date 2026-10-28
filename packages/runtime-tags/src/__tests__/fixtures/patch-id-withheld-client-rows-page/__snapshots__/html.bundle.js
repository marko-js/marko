// tags/card.marko
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; b%;<button>x</button><!><!>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let rows = [input.content, input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: entry });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", rows, 1);
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	"~a1": "~a1; b D ;<input><label> </label>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id("A");
		_html(`<input${_attr("id", uid, $scope1_id, "aa$id", 0, 0)}>${_el_resume($scope1_id, "a", 0)}<label${_attr("for", uid, $scope1_id, "ab$for", 0, 0)}>${_text_resume($scope1_id, "c", input.label, 1, $scope0_reason, 0)}</label>${_el_resume($scope1_id, "b", 0)}`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id, 3) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
