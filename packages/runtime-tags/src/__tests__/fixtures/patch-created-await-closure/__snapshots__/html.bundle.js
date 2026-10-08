// template.marko
_shells({
	a0: "a0 a8;D%c%;<p><!> <!></p>",
	a: "a !a4; b%;<button>+</button><!><!>",
	a1: "a1 a8;D%c%;<p><!> <!></p>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", count)} ${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</p>`);
				_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a3");
			}, 1, "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "a6", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 1) && input.promise,
		g: count,
		i: $count__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a5", input.promise);
}, 1);
