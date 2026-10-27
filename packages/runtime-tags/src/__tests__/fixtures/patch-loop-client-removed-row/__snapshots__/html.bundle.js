// template.marko
_shells({ a: "a !a0; b ;<button>drop</button><ul></ul>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}<ul>`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}: ${_text_resume($scope1_id, "b", input.label, $wg__input_label * 2)}</li>`);
		$scope0_page && _scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		f: items
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.label, !_server_guard($scope0_reason, 0));
}, 1);
