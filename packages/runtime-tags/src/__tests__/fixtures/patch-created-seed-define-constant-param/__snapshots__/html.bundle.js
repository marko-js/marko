// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
_shells({
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a3: `a3 a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`,
	a1: "a1;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wi__input_v = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_v = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = /* @__PURE__ */ new Set();
			const v = `${input.v}!`;
			const D = { content: _content("a2", ({ on }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
				_if(() => {
					if (on) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "a", v, 1, $scope0_reason, 1)}</span>`);
						$cg__input_v && _patch_render($scope3_id, "a0");
						_subscribe(_unfilled_if($scope0_reason, 1) && $if_content__v__closures, _scope($scope3_id, { _: $wi__input_v && _scope_with_id($scope2_id) }), $cg__input_v && "a0");
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__on, 1, 0, 0, ["a1"], $scope2_reason, 0);
				$wi__input_v && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id, 0) };
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			D.content({ on: true });
			_patch_child_end();
			$cg__input_v && _patch_render($scope1_id, "a4");
			_scope($scope1_id, {
				_: $wi__input_v && _scope_with_id($scope0_id),
				g: $wi__input_v && $if_content__v__closures,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_v && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a4", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.v }) || $fg__input_v && $ui__input_show && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1));
}, 1);
