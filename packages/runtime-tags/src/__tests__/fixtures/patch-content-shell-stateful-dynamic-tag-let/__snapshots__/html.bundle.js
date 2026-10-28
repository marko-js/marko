// card.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ a: "a;D%;<section><!></section>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template) });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({ content: _content("b4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": n }, 0, _content("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope2_id, "a", input.label, $wg__input_label));
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_label);
			$wg__input_label || _resume_branch($scope2_id);
		}, $scope1_id));
		_html(`<button>${_text_resume($scope1_id, "c", n)}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b2");
		_subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "b3");
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.on,
		e: input.label,
		g: $wi__input_label && $input_label__closures,
		f: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb5", input.on, !_server_guard($scope0_reason, 0)), _content_withhold(input.on), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb6", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
