// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let inner = true;
	_html(`<button>outer</button>${_el_resume($scope0_id, "a")}<button>inner</button>${_el_resume($scope0_id, "b")}<section>`);
	_show_start(outer, 1, 1, "</section>");
	_show_start(inner, 0);
	_html("<p>body</p>");
	_show_end($scope0_id, "e", inner, 1, 0, 0, 1);
	_show_end($scope0_id, "c", outer, 1, 1, "</section>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: outer,
		g: inner
	});
}, 1);
