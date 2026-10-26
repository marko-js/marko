// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
_shells({
	a: "a !a5; b%;<button class=open>inc</button><!><!>",
	a4: /*@__PURE__*/ (() => `a4 >a>a8 a9;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	const Show = { content: _content("a1", ({ p, label }) => {
		const $scope2_id = _scope_id();
		const $Show_content__label__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $wg__p = _write_guard($scope2_reason, 1), $wg__label = _write_guard($scope2_reason, 2), $scope2_page = _page_render(), $wi__p__OR__label = _write_if($scope2_reason, 0), $wi__label = _write_if($scope2_reason, 2);
		_await($scope2_id, "a", p, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}:${_text_resume($scope3_id, "b", x, $wg__p * 2)}</p>`);
			$scope2_page && $wi__p__OR__label && _subscribe($wi__label && $Show_content__label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__p || $wg__label);
			$wg__p || $wg__label || $wi__p__OR__label && _resume_branch($scope3_id);
		}, 1, 0);
		$scope2_page ? $wi__p__OR__label && _scope($scope2_id, {
			e: _write_if($scope2_reason, 1) && label,
			j: $wi__label && $Show_content__label__closures
		}) : _filled_guard($scope2_reason, 2) && _patch_fill($scope2_id, "va2", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			Show.content({
				p: Promise.resolve(n),
				label: input.label
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a4"], $scope0_reason, 0);
	_script($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1));
}, 1);
