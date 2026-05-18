// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let yChange = _resume(function(newValue) {
		x = newValue + 1;
	}, "a0", $scope0_id);
	let y = x;
	_html(`<button id=inc>${_escape(x)}${_el_resume($scope0_id, "b")}|<!>${_escape(y)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: x,
		f: yChange,
		h: y,
		Mh: yChange || void 0
	});
	_resume_branch($scope0_id);
}, 1);
