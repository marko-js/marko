// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_on = _write_if($scope0_reason, 0), $ui__input_on2 = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 2);
		const Inner = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const uid = _id("A");
			_html(`<input${_attr("id", uid, $scope2_id, "a", 0, 0)}>${_el_mark($scope2_id, "a", 0)}<label${_attr("for", uid, $scope2_id, "b", 0, 0)}>${_text_mark($scope2_id, "c", input.label, 1, $scope0_reason, 1)}</label>${_el_mark($scope2_id, "b", 0)}`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a1", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_on && _scope_with_id($scope1_id) }), $cg__input_label && "a1");
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "a", input.on ? Inner : null, {}, 2, 0, 0, $wg__input_on, $scope0_reason, 2);
		$wi__input_label__OR__input_on && _subscribe($ui__input_on && $input_on__closures, _scope($scope1_id, {
			b: $ui__input_on && Inner,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 2) && "a2", $wg__input_on);
		$wg__input_on || $wi__input_label__OR__input_on && _resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		d: ($ui__input_on2 || _unfilled_if($scope0_reason, 1)) && input.label,
		f: _write_if($scope0_reason, 1) && $input_label__closures,
		g: _write_if($scope0_reason, 2) && $ui__input_on2 && $input_on__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a4", "d");
}, 1);
