// template.marko
_shells({ a: "a !a1; b%bD ;<button class=toggle>toggle</button><!><output> </output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	let out = "-";
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button class=go>go</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<output>${_text_resume($scope0_id, "c", out)}</output>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.mode,
		g: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.mode, !_server_guard($scope0_reason, 0));
}, 1);
