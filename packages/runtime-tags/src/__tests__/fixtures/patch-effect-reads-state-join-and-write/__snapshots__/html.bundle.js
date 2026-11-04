// template.marko
_shells({ a: "a !a1; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_other = _server_guard($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_other = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const x = n + input.label;
	_html(`<button>${_text_mark($scope0_id, "b", x)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", $fg__input_label && "e");
	_patch_render($scope0_id, "a3", [
		$fg__input_other && "f",
		"i",
		$fg__input_label && "e"
	]) || _script($scope0_id, "a0", 1, ($sg__input_other || $sg__input_label) && 2, [$sg__input_other && "f", $sg__input_label && "e"]);
	_scope($scope0_id, {
		e: input.label,
		f: input.other,
		g: n,
		i: x
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !$sg__input_label), $fg__input_other && _patch_write($scope0_id, "xf", input.other, !$sg__input_other));
}, 1);
