// tags/card.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD%;<button>clear</button><section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.content;
	_first_value($scope0_id, "f", value, $scope0_reason, 0);
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a0: "a0",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			card_default({ content: Body.content });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: _unfilled_if($scope0_reason, 2) && Body?.content,
		h: _write_if($scope0_reason, 1) && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
