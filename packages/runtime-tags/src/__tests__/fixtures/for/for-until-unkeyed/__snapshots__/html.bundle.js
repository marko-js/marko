// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 2;
	_html(`<button class=more>more</button>${_el_resume($scope0_id, "a")}<button class=none>none</button>${_el_resume($scope0_id, "b")}<ul>`);
	_for_until(count, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>", 1);
	_for_until(count, 1, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<span>${_escape(i)}</span>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: count });
}, 1);
