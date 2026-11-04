// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	let results = ["a", "b"];
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "#button/0")}<button id=i>i</button>${_el_mark($scope0_id, "#button/1")}<ul id=c>`);
	_show_start(open, 1, 1, "</ul>");
	_for_of(results, (r) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", r)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:24");
	}, 0, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	_show_end($scope0_id, "#ul/2", open, 1, 1, "</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		results_length: results?.length
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		results_length: ["results.length", "2:6"]
	});
}, 1);
