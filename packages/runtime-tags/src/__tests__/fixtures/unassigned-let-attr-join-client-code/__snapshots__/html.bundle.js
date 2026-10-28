// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	let n = 0;
	_html(`<p${_attr("title", `${uid}-${input.name}`)}></p>${_el_resume($scope0_id, "a", _write_guard($scope0_reason, 0))}<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 0) && uid,
		j: n
	});
}, 1);
