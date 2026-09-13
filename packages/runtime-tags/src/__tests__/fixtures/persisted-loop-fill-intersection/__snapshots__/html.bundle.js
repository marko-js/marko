// template.marko
_shells({ a: "a !a0;D b b ;<main><ul></ul><button class=add>+</button><button class=inc>c</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = ["a"];
	let count = 0;
	_html("<main><ul>");
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", input.note + item + count)}</li>`);
		_scope($scope1_id, { c: item });
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=add>+</button>${_el_resume($scope0_id, "b")}<button class=inc>c</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.note,
		g: items,
		h: count
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.note);
}, 1, 0);
