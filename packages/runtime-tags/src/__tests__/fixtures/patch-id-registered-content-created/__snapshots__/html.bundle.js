// tags/card.marko
const $template = "<button>toggle</button><!><!><!>";
const $walks = " b%b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%b%;<button>toggle</button><!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", c, {}, 8);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, {
		f: input.content,
		g: c
	}) || (_content_withhold(input.content), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", input.content, !_server_guard($scope0_reason, 0)));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("A");
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "c", input.label, $wg__input_label)}</label>`);
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
			$wg__input_label || _resume_branch($scope2_id);
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
