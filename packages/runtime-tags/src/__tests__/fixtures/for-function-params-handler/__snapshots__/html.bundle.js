// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of([_resume(() => count++, "a0", $scope0_id)], (handler) => {
		const $scope1_id = _scope_id();
		_html(`<button id=of>of</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, { c: handler });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	_for_in({ add: _resume(function() {
		count += 10;
	}, "a1", $scope0_id) }, (key, handler) => {
		const $scope2_id = _scope_id();
		_html(`<button id=in>${_escape(key)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a3");
		_scope($scope2_id, { e: handler });
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "c", count)}</span>`);
	_scope($scope0_id, { d: count });
}, 1);
