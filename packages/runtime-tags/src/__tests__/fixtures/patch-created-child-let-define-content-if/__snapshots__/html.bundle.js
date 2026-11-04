// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value.content, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.data);
});

// template.marko
_shells({
	a2: "a2",
	a: "a;b%;<!><!><!>",
	a1: "a1;D ;<em> </em>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.label !== "x") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_label__OR__input_show && _scope_with_id($scope1_id),
					Ch: $wi__input_label && 1
				}), $cg__input_label && "a0");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_label, 1, 0, 0, ["a1"], $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a4", $cg__input_label);
		$wi__input_label__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a4", $wg__input_label);
		$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "a", 0);
			outer_default({ data: { content: Body.content } });
			_patch_child_end();
			!_client_guard($scope0_reason, 2) && _unfilled_if() && _patch_write($scope0_id, "wg", Body.content);
			_scope($scope3_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	$fg__input_label && _patch_subscribers($scope0_id, "a5", "d");
	_scope($scope0_id, {
		d: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		g: $ui__input_show && Body.content,
		h: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 1));
}, 1);
