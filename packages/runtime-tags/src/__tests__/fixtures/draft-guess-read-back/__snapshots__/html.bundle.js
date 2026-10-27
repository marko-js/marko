// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = 1;
	let seen = "";
	const act = _action($scope0_id, "a1");
	_html(`<button>${_text_resume($scope0_id, "b", d)} ${_text_resume($scope0_id, "c", seen, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: d,
		h: act,
		i: _resume(function() {
			d = 5;
			d = 6;
			seen = d;
		}, "a0", $scope0_id) || void 0
	});
}, 1);
