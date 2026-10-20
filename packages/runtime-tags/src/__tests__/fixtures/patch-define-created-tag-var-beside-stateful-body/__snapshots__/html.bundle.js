// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a13;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l%c`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b><!><!>`)($Panel_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 1), $wi__label = _write_if($scope2_reason, 2), $scope2_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 2)}</em>`);
				_scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 1);
		const $return = label + (isOpen ? "Y" : "N");
		_patch_write($scope2_id, "wd", isOpen, 1);
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: $wi__label && isOpen,
			e: _write_if($scope2_reason, 1) && label
		}) : _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "va3", label, !_server_guard($scope2_reason, 2));
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			let ret = Panel.content({
				isOpen: true,
				label: input.label
			});
			_filled_guard($scope0_reason, 1) ? _patch_value($scope1_id, "va5", ret) : _patch_init($scope1_id, "a6");
			_client_guard($scope0_reason, 1) && _var($scope1_id, "b", $childScope, "a4");
			_patch_write($scope1_id, "we", ret, 1);
			_html(`<b>${_patch_text($scope1_id, "c", ret, void 0, $scope0_reason, 1)}</b>`);
			if ($scope0_page) _if(() => {}, $scope1_id, "d", 1, 1, 0, 0, 1);
			_scope($scope1_id, {
				e: ret,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va11", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		i: open,
		j: _write_if($scope0_reason, 2) && Panel,
		l: Tag
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "va9", input.label) : _patch_value($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 1))), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va10", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
