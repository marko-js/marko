// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html("<ul>");
	const $show = input.items;
	_show_start($show, 1);
	_html("<li>a</li><li>b</li>");
	_show_end($scope0_id, "a", $show, 1, 1, "</ul>");
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: open });
}, 1);
