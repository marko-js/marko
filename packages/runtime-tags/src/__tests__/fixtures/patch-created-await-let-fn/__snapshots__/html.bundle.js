// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", f(), 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([["a1"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([["a1"], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				card_default({ fn: function() {
					return v + ":" + input.label;
				} });
				_patch_child_end();
				$cg__input_label && _patch_init($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					c: $wi__input_label && v,
					a: _existing_scope($childScope)
				}), $cg__input_label && "a1");
			}, 1, "a2");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2));
}, 1);
