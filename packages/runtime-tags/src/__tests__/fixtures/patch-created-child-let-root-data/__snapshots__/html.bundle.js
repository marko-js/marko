// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = "<!><!><section><!></section>";
const $walks = "b%bD%l";
const $setup = [[], []];
_shells({
	c: "c !;b%bD%;<!><!><section><!></section>",
	c0: "c0 c4;D ;<p> </p>"
});
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", T ? "has" : "none")}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["c0"], $scope0_reason, 2);
	_html("<section>");
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc2", T, 1);
	_scope($scope0_id, {
		g: input.label,
		h: _write_if($scope0_reason, 0) && T
	}) || (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _content_withhold(input.tag));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				tag: card_default,
				more: input.more,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.more,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va3", input.more, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.label));
}, 1);
