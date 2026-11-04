// tags/card.marko
const $template$2 = "<button class=clear>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$3 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button class=clear>clear</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=clear>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/toggle.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	d: "d;b%;<!><!><!>",
	d1: "d1;b%;<!><!><!>"
});
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $ui__input_open = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "d0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["d1"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "d0", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 1) && ($ui__input_open || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $ui__input_open && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// tags/owner.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, "b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$3], ["b>", $setup$2]);
_shells({
	c3: "c3",
	c: `c${_shell_marker($setup$1)};${((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, "b%c")};${((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1)}`
});
var owner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("c1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>held ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}</b>`);
		$cg__input_label && _patch_render($scope1_id, "c0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "c0", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason($uf__input_open << 1 | $uf__input_open << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	toggle_default({
		open: input.open,
		content: _content_resume("c3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>guarded ${_text_mark($scope2_id, "a", input.label, 2, $scope0_reason, 1)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c2", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				Cg: $wi__input_label && 1
			}), $cg__input_label && "c2");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.label,
		g: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "c4", "e");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	owner_default({
		open: input.open,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
