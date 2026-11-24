// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<span>${_text_resume($scope0_id, "a", n)}</span>`);
	_for_of([_resume(() => n++, "a0", $scope0_id)].concat([]), (fn) => {
		const $scope1_id = _scope_id();
		_html(`<button id=concat></button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		_scope($scope1_id, { c: fn });
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_for_of(Object.values({ counted: _resume(function() {
		n++;
	}, "a1", $scope0_id) }), (fn) => {
		const $scope2_id = _scope_id();
		_html(`<button id=values></button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a4");
		_scope($scope2_id, { c: fn });
	}, 0, $scope0_id, "c", 1, 1, 0, 0, 1);
	_for_of([_resume(() => n++, "a2", $scope0_id)], (fn) => {
		const $scope3_id = _scope_id();
		_html(`<button id=direct></button>${_el_resume($scope3_id, "a")}`);
		_script($scope3_id, "a5");
		_scope($scope3_id, { c: fn });
	}, 0, $scope0_id, "d", 1, 1, 0, 0, 1);
	_scope($scope0_id, { e: n });
}, 1);
