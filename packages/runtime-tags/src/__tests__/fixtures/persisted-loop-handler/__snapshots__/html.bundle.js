// template.marko
_shells({ a: "a !a1;D b ;<main><ul></ul><button class=add>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item, i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item)}<button>x</button>${_el_resume($scope1_id, "b")}</li>`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { M: i });
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=add>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { c: items });
	_resume_branch($scope0_id);
}, 1, 0);
