// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	let inner = false;
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "a")}<button id=i>i</button>${_el_mark($scope0_id, "b")}<div id=c>x `);
	_show_start(visible);
	_if(() => {}, $scope0_id, "d", 1, 1, 0, 0, 1);
	_show_end($scope0_id, "e", visible);
	_html(" y</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: visible,
		g: inner
	});
}, 1);
