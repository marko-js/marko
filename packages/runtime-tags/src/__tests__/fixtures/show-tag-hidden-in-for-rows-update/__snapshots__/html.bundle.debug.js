// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let labels = [
		"a",
		"bb",
		"c"
	];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "#button/0")}<button id=grow>grow</button>${_el_resume($scope0_id, "#button/1")}<ul>`);
	_for_of(labels, (label) => {
		const $scope1_id = _scope_id();
		const $show = label.length > 1;
		_show_start($show, 0);
		_html(`<li>${_text_resume($scope1_id, "#text/0", label)}</li>`);
		_show_end($scope1_id, "#text/1", $show, 1, 0, 0, 1);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#ul/2", 1, 1, 1, "</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { labels }, "__tests__/template.marko", 0, { labels: "1:6" });
}, 1);
