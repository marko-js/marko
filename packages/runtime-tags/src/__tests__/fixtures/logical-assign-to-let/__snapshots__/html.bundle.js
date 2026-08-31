// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let changes = 0;
	let value = 1;
	let x = value;
	_html(`<button id=or>or</button>${_el_resume($scope0_id, "a")}<button id=and>and</button>${_el_resume($scope0_id, "b")}<button id=nullish>nullish</button>${_el_resume($scope0_id, "c")}<div>value=${_text_resume($scope0_id, "d", value, 2)} changes=${_text_resume($scope0_id, "e", changes, 2)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: changes,
		g: value,
		i: x,
		j: _resume(function(v) {
			value = v;
			changes++;
		}, "a0", $scope0_id) || void 0
	});
	_resume_branch($scope0_id);
}, 1);
