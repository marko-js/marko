// template.marko
_shells({ a: "a !a0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	if ($scope0_page) _for_of(items.concat(input.extra), (entry) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", entry)}</li>`);
		$scope0_page && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.extra,
		f: items
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.extra, !_server_guard($scope0_reason, 0));
}, 1);
