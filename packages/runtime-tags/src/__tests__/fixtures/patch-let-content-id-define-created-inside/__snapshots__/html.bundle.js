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
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const Inner = { content: _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			const uid = _id("A");
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_mark($scope2_id, "c", input.label, $wg__input_label)}</label>`);
			$cg__input_label && _patch_render($scope2_id, "a1");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a1", $wg__input_label);
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "a", input.on ? Inner : null, {}, 0, 0, 0, $wg__input_on);
		_subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			b: $wi__input_on && Inner,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 1) && "a2", $wg__input_on);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: input.on,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a4", "d"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "e"));
}, 1);
