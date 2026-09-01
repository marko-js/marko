// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [[
		1,
		2,
		3
	], [
		4,
		5,
		6
	]];
	_html("<ul>");
	_for_of(rows, ([first, ...rest], i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}: first=${_text_resume($scope1_id, "#text/1", first, 2)} rest0=${_text_resume($scope1_id, "#text/2", rest[0], 2)} rest1=${_text_resume($scope1_id, "#text/3", rest[1], 2)} len=${_text_resume($scope1_id, "#text/4", rest.length, 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>update</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
