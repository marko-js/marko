// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	"~a3": "~a3;b%b%;<!><!><!><!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)(),
	a2: "a2; b D ;<input><label> </label>",
	a4: "a4; b D ;<input><label> </label>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const uid = _id("A");
				_html(`<input${_attr("id", uid, $scope2_id, "aa$id", 0, 0)}>${_el_resume($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "ab$for", 0, 0)}>${_text_resume($scope2_id, "c", input.label, 1, $scope0_reason, 3)}</label>${_el_resume($scope2_id, "b", 0)}`);
				$cg__input_label && _patch_init($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }), $cg__input_label && "a1");
				return 0;
			}
		}, $scope1_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a2"], $scope0_reason, 2);
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const rid = _id("B");
			_html(`<input${_attr("id", rid, $scope3_id, "aa$id", 0, 0)}>${_el_resume($scope3_id, "a", 0)}<label${_attr("for", rid, $scope3_id, "ab$for", 0, 0)}>${_text_resume($scope3_id, "c", item.id, 1, $scope0_reason, 4)}</label>${_el_resume($scope3_id, "b", 0)}`);
			_scope($scope3_id, {});
		}, "id", $scope1_id, "b", 1, 1, 1, 0, 0, "a4", $scope0_reason, 4);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_show && "a5"), _client_guard($scope0_reason, 4) && "a6");
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		h: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_label__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures,
		i: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_items__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 3));
}, 1);
