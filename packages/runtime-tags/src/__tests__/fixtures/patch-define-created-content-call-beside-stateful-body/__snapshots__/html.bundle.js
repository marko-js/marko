// template.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
_shells({
	a0: "a0,",
	a: /*@__PURE__*/ (() => `a !a8;${((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template)}`)(),
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "a", label, void 0, $scope2_reason, 1)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, { e: _unfilled_if($scope2_reason, 0) && label }) : _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_value($scope2_id, "va4", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	const Wrap = { content: _content("a5", ({ show, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__show = _write_guard($scope4_reason, 1), $scope4_page = _page_render();
		_if(() => {
			if (show) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "a", content, {}, 0, 0, $wg__content, void 0, 2, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) });
				return 0;
			}
		}, $scope4_id, "a", 1, $wg__show, void 0, void 0, void 0, ["a2"], $scope4_reason, 1);
		$scope4_page ? _write_if($scope4_reason, 1) && _scope($scope4_id, { e: _unfilled_if($scope4_reason, 1) && content }) : _filled_guard($scope4_reason, 2) && _client_guard($scope4_reason, 1) && _patch_value($scope4_id, "va6", content, !_server_guard($scope4_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "a");
	Wrap.content({
		show: input.show,
		content: _content_resume("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a7");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id)
	});
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: "y"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	_patch_write($scope0_id, "wg", input.label, 1);
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va10", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: open,
		j: _write_if($scope0_reason, 3) && Panel,
		l: Tag,
		n: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va9", Tag, !_server_guard($scope0_reason, 3));
}, 1);
