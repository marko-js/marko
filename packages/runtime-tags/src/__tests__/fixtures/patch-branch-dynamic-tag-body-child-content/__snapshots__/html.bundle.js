// tags/card.marko
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, { e: input.content }) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({
	a2: "a2",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))}`)(),
	a: "a !;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_el = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.el || "div", {}, 10, _content_resume("a3", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_set_scope_reason(0);
				const $childScope = _patch_child($scope2_id, "a", 0);
				card_default({ content: _content_resume("a2", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>static ${_patch_text($scope3_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, _client_guard($scope0_reason, 2) ? "a0" : "a1");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
				}, $scope2_id) });
				_patch_child_end();
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
			}, $scope1_id), 0, $wg__input_el, $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.el,
		f: input.label,
		h: _write_if($scope0_reason, 2) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va6", input.el, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.el), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
