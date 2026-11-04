// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.item;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {});
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_html("</section>");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", items, 1);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ item: attrTags(attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>one ${_text_mark($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0", $wg__input_label);
	}, $scope0_id) }), { content: _content_resume("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>two ${_text_mark($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
		$cg__input_label && _patch_render($scope2_id, "a1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ce: $wi__input_label && 1
		}), $cg__input_label && "a1", $wg__input_label);
	}, $scope0_id) }) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a4", "d");
}, 1);
