// tags/card.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>clear</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a0: "a0; b D ;<input><label> </label>",
	"~a0": "~a0; b D ;<input><label> </label>",
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks, $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const Field = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", input.label, 1, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "b", 0)}`);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_label && _scope_with_id($scope1_id) }));
		}, $scope1_id, 2) };
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: Field });
		_patch_child_end();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
		card_default({ content: Field });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_label && _scope_with_id($scope0_id),
			a: _existing_scope($childScope),
			b: _existing_scope($childScope2)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
