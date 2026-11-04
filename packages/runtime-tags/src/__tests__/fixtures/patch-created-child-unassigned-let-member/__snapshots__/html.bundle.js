// tags/card.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = { slot: { body: input.content } };
	_html("<section>");
	_dynamic_tag($scope0_id, "a", c.slot.body, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a1: "a1|2;Db%;<em>static <!></em>",
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_mark($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }), $cg__input_label && "a0");
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_label) && input.label,
		f: _write_if($scope0_reason, 2) && ($ui__input_label || $ui__input_show) && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
}, 1);
