// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>show</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const api = {
		get: _bind_resume(() => input.title, "a0", $scope0_id),
		label: "title"
	};
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>show</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.title,
		f: api,
		g: api.label
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", api, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", api.label, !$sg__input_title));
}, 1);
