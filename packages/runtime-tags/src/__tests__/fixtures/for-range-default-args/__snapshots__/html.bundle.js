// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	_html(`<button>more</button>${_el_mark($scope0_id, "a")}<div class=defaults>`);
	_for_to(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(_escape(i));
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</div>");
	_html("<div class=from>");
	_for_to(count, 1, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(_escape(i));
		_scope($scope2_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, "</div>");
	_html("<div class=step>");
	_for_until(count, 0, 2, (i) => {
		const $scope3_id = _scope_id();
		_html(_escape(i));
		_scope($scope3_id, {});
	}, 0, $scope0_id, "d", 1, 1, 1, "</div>");
	_html("<div class=by>");
	_for_to(count, 0, 1, (i) => {
		const $scope4_id = _scope_id();
		_html(_escape(i));
		_scope($scope4_id, {});
	}, (n) => n, $scope0_id, "e", 1, 1, 1, "</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: count });
}, 1);
