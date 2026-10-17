// template.marko
_shells({
	a0: "a0 a6,",
	a: "a !a2;b%b ;<!><!><button>+</button>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.tag, {}, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<span${_attr("data-n", count)}>x</span>${_el_resume($scope2_id, "a")}`);
				_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id), 0, $wg__input_tag, void 0, 2, $scope0_reason, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va4", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.tag,
		g: count,
		i: $count__closures
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
