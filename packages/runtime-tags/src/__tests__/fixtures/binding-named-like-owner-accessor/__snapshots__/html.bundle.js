// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 1;
	_for_of([count], (_) => {
		const $scope1_id = _scope_id();
		_html(`<button class=inc>${_text_resume($scope1_id, "b", _)}</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			if (_) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", _ + count)}</span>`);
				_subscribe($count__closures, _scope($scope2_id, {}));
				return 0;
			}
		}, $scope1_id, "c", 1, 1, 1, 0, 1);
		_script($scope1_id, "a0");
		_scope($scope1_id, { e: _ });
	}, 0, $scope0_id, "a");
	_if(() => {
		{
			const $scope3_id = _scope_id();
			let _ = count;
			_html(`<button class=mul>${_text_resume($scope3_id, "b", _)}</button>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a1");
			_scope($scope3_id, { c: _ });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);
