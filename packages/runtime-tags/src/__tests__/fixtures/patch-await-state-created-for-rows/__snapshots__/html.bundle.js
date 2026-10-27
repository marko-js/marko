// template.marko
_shells({
	a: "a !a4; b%;<button class=open>inc</button><!><!>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a2: "a2 a7 a8;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va1", item);
		_await($scope1_id, "a", Promise.resolve(n), (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", item, _write_guard($scope0_reason, 0))}:${_text_resume($scope2_id, "b", x, 2)}</p>`);
			$scope0_page && _subscribe($wi__input_items && $for_content__item__closures, _scope($scope2_id, {}), "a0");
		}, 1, 0);
		$scope0_page && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: $wi__input_items && $for_content__item__closures
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_script($scope0_id, "a4");
	$scope0_page && _scope($scope0_id, { f: n });
}, 1);
