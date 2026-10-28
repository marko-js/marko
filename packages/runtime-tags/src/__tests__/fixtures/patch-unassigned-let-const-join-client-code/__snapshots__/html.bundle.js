// template.marko
_shells({ a: "a !a0;D l D ;<p> </p><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	const tag = uid + "-" + input.name;
	let n = 0;
	_html(`<p>${_text_resume($scope0_id, "a", tag)}</p><button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.name,
		h: _write_if($scope0_reason, 1) && uid,
		k: n
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.name, !_server_guard($scope0_reason, 1));
}, 1);
