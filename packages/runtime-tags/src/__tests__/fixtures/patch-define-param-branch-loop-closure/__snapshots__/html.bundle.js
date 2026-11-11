// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: `a;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	a2: "a2;b%;<!><!><!>",
	a1: "a1;D%b%;<em><!><!></em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Panel = { content: _content("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $Panel_content__label__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $cg__label = _client_guard($scope1_reason, 2), $wi__isOpen__OR__label = _write_if($scope1_reason, 0), $wg__isOpen = _write_guard($scope1_reason, 1), $ui__isOpen = _unfilled_if($scope1_reason, 1), $ui__label = _unfilled_if($scope1_reason, 2), $wi__label = _write_if($scope1_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_for_of([1, 2], (x) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope1_reason, 2)}${_text_mark($scope3_id, "b", x, 2, 0, 0)}</em>`);
					$cg__label && _patch_render($scope3_id, "a0");
					_subscribe(_unfilled_if($scope1_reason, 2) && $Panel_content__label__closures, _scope($scope3_id, { _: $wi__isOpen__OR__label && _scope_with_id($scope2_id) }), $cg__label && "a0");
				}, 0, $scope2_id, "a", 1, 1, 1, 0, 0, "a1", 0, 0);
				_scope($scope2_id, { _: $wi__isOpen__OR__label && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a2"], $scope1_reason, 1);
		$wi__isOpen__OR__label && _scope($scope1_id, {
			e: _write_if($scope1_reason, 1) && ($ui__isOpen || $ui__label) && label,
			f: $wi__label && $wi__label && ($ui__label || $ui__isOpen) && $Panel_content__label__closures
		}) || _filled_guard($scope1_reason, 2) && $ui__isOpen && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 2)) && _client_guard($scope1_reason, 1) && _patch_subscribers($scope1_id, "a4", "e");
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		isOpen: input.open,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
