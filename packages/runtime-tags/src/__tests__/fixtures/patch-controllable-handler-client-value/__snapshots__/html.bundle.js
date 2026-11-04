// template.marko
_shells({ a: "a !a3;D l b b%b D ;<p> </p><input><input><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_label && _patch_write($scope0_id, "xi", input.label, !_server_guard($scope0_reason, 0));
	let count = 0;
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "b", input.label, _bind_resume(function(v) {
		console.log(v + ":" + input.label);
	}, "a0", $scope0_id), 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "b")}<input${_attr_input_value($scope0_id, "c", String(count), _bind_resume(function(v) {
		console.log(v + ":" + input.label);
	}, "a1", $scope0_id))}>${_el_mark($scope0_id, "c")}`);
	_if(() => {}, $scope0_id, "d", 1, 1, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "f", count)}</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	$fg__input_label && _patch_render($scope0_id, "a2", "i");
	_patch_render($scope0_id, "a4", $fg__input_label && "i");
	_scope($scope0_id, {
		i: input.label,
		j: count
	});
}, 1);
