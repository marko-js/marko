// template.marko
_shells({
	a3: "a3;D%c%;<p><!>:<!></p>",
	a4: "a4 a12 a13;b%;<!><!><!>",
	a: "a !a8; b%;<button class=open>inc</button><!><!>",
	a5: "a5 a12 a13;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (s) => {
				const $scope2_id = _scope_id();
				const $await_content__s__closures = /* @__PURE__ */ new Set();
				_filled_guard($scope0_reason, 1) && _patch_fill($scope2_id, "va1", s);
				_await($scope2_id, "a", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "a", s, _write_guard($scope0_reason, 1))}:${_text_resume($scope3_id, "b", x, 2)}</p>`);
					$scope0_page && _subscribe($wi__input_label && $await_content__s__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
				}, 1, 0);
				$scope0_page && _subscribe($n__closures, _scope($scope2_id, {
					c: s,
					_: _scope_with_id($scope1_id),
					j: $wi__input_label && $await_content__s__closures
				}), "a2", 0);
				_resume_branch($scope2_id);
			}, 1, "a4");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a7");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a6"], $scope0_reason, 0);
	_script($scope0_id, "a8");
	$scope0_page ? _scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n,
		i: $n__closures
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", input.label, !$sg__input_label);
}, 1);
