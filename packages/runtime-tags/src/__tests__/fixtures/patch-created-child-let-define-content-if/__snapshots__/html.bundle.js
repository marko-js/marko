// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.data);
});

// template.marko
_shells({
	a3: "a3 a8",
	a: "a !;b%;<!><!><!>",
	a2: "a2;D ;<em> </em>",
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.label !== "x") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_label__OR__input_show && _scope_with_id($scope1_id),
					Ch: $wi__input_label && 1
				}));
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_label, 1, 0, 0, ["a2"], $scope0_reason, 1);
		$cg__input_label && _patch_init($scope1_id, "a5");
		$wi__input_label__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "a", 0);
			outer_default({ data: _patch_live($childScope, { content: Body.content }, $scope3_id, "") });
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: _unfilled_if($scope0_reason, 2) && Body?.content,
		h: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1));
}, 1);
