// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let inner = true;
	_html(`<button>outer</button>${_el_resume($scope0_id, "#button/0")}<button>inner</button>${_el_resume($scope0_id, "#button/1")}<section>`);
	_show_start(outer, 1, 1, "</section>");
	_show_start(inner, 0);
	_html("<p>body</p>");
	_show_end($scope0_id, "#text/4", inner, 1, 0, 0, 1);
	_show_end($scope0_id, "#section/2", outer, 1, 1, "</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		outer,
		inner
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		inner: "2:6"
	});
}, 1);
