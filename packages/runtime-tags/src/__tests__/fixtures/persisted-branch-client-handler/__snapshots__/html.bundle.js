// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button class=step>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=step>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: count
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.title);
}, 1, 0);
