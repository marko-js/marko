// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3,
		4
	];
	let min = 0;
	let max = 4;
	let index = 0;
	const filtered = items.filter((item) => item >= min && item <= max);
	const selected = filtered[index];
	_html(`<div>${_escape(filtered.join(" "))}${_el_resume($scope0_id, "a")} selected <!>${_escape(selected)}${_el_resume($scope0_id, "b")}</div><button id=update>update</button>${_el_resume($scope0_id, "c")}<button id=reselect>reselect</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: items,
		f: min,
		g: max,
		i: index,
		j: filtered
	});
	_resume_branch($scope0_id);
}, 1);
