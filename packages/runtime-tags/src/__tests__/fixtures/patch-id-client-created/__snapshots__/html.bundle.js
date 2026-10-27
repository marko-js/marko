// template.marko
_shells({ a: "a !a0; b%;<button>add</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = input.items;
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		const headingId = _id("A");
		_html(`<h2${_attr("id", headingId)}>${_escape(item.key)}</h2><input${_attr("aria-describedby", headingId)}${_attr("title", input.prefix + " " + headingId)}>${_el_resume($scope1_id, "c", $wg__input_prefix)}`);
		_scope($scope1_id, { e: _write_if($scope0_reason, 1) && headingId });
	}, "key", $scope0_id, "b");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: input.prefix,
		g: items
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.prefix, !_server_guard($scope0_reason, 1));
}, 1);
