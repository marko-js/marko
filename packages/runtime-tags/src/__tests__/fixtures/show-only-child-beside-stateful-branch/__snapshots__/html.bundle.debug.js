// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html("<ul>");
	const $show = input.items;
	_show_start($show, 1);
	_html("<li>a</li><li>b</li>");
	_show_end($scope0_id, "#ul/0", $show, 1, 1, "</ul>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<p>menu</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
