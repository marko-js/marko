// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = 1;
	let seen = "";
	const inner = _action($scope0_id, "a2");
	const outer = _action($scope0_id, "a3");
	_html(`<button>${_text_resume($scope0_id, "b", d)} ${_text_resume($scope0_id, "c", seen, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: d,
		h: inner,
		k: outer,
		i: _resume(function() {}, "a0") || void 0,
		l: _resume(function() {
			inner();
			d = 4;
			seen = d;
		}, "a1", $scope0_id) || void 0
	});
}, 1);
