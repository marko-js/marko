// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", Promise.resolve(n), (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", item, $wg__input_items)}:${_text_resume($scope2_id, "b", x, 2)}</p>`);
			_subscribe($wi__input_items && $for_content__item__closures, _scope($scope2_id, {}), "a0");
		});
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: $wi__input_items && $for_content__item__closures
		});
	}, 0, $scope0_id, "b", 1, $wg__input_items);
	_script($scope0_id, "a1");
	_scope($scope0_id, { f: n });
}, 1);
