// template.marko
_shells({ a: "a !a0; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_html(`<p>${_text_resume($scope1_id, "a", x)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.v,
		f: on
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.v, !_server_guard($scope0_reason, 0));
}, 1);
