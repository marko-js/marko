// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_for_of(["a", "b"], (item, key) => {
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html(_escape(key));
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "c");
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			d: count,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0);
	_html(`<button class=toggle></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: show });
}, 1);
