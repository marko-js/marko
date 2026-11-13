// tags/card.marko
const $template = "<button class=switch>switch</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button class=switch>switch</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.a;
	_html(`<button class=switch>switch</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: input.b }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3",
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		a: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>A ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}</b>`);
			$cg__input_label && _patch_render($scope1_id, "a0");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0", $wg__input_label);
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>B ${_text_mark($scope2_id, "a", input.label, 2, $scope0_reason, 0)}</i>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a1", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Ce: $wi__input_label && 1
			}), $cg__input_label && "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a4", "d");
}, 1);
