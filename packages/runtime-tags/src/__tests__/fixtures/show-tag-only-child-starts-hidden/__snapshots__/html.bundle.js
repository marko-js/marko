// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	let results = ["a", "b"];
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "a")}<button id=i>i</button>${_el_mark($scope0_id, "b")}<ul id=c>`);
	_show_start(open, 1, 1, "</ul>");
	_for_of(results, (r) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", r)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "d", 1, 1, 0, 0, 1);
	_show_end($scope0_id, "c", open, 1, 1, "</ul>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: open,
		g: results?.length
	});
}, 1);
