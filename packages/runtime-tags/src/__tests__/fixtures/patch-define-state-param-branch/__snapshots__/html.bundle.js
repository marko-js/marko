// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_elide("a0", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", label, void 0, $scope1_reason, 1)}</em>`);
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 0);
		$scope1_page ? _write_if($scope1_reason, 0) && _scope($scope1_id, { e: _unfilled_if($scope1_reason, 0) && label }) : _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_value($scope1_id, "va2", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va4", open, 1);
	$scope0_page && _scope($scope0_id, {
		f: open,
		a: _existing_scope($childScope)
	});
}, 1);
