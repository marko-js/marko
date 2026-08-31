// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<li>${_escape(i)}: first=${_text_resume($scope1_id, "b", first, 2)} rest0=${_text_resume($scope1_id, "c", rest[0], 2)} rest1=${_text_resume($scope1_id, "d", rest[1], 2)} len=${_text_resume($scope1_id, "e", rest.length, 2)}</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
