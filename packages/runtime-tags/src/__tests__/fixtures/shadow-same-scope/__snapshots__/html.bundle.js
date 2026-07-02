// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let $count = 0;
	let $count2 = 0;
	let $count3 = 0;
	_html(`<div><button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div><button>${_escape($count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<div><button>${_escape($count2)}${_el_resume($scope0_id, "f")}</button>${_el_resume($scope0_id, "e")}</div></div></div><div><button>${_escape($count3)}${_el_resume($scope0_id, "h")}</button>${_el_resume($scope0_id, "g")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		i: count,
		j: $count,
		k: $count2,
		l: $count3
	});
	_resume_branch($scope0_id);
}, 1);
