// template.marko
_shells({
	a: "a !a3; b%;<button class=open>inc</button><!><!>",
	a2: "a2;D%c%;<p><!>:<!></p>",
	a1: "a1 a7 a8;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.label, _write_guard($scope0_reason, 1))}:${_text_resume($scope2_id, "b", x, 2)}</p>`);
				$scope0_page && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
			}, 1, 0);
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
