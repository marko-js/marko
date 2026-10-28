// template.marko
let n = 0;
_shells({ a: "a !a0; D l b bD ;<label> </label><input><button>show</button><output> </output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = "u" + ++n;
	_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "c", input.value, 0, "n2c", $scope0_reason, 2)}${_attr("id", `${uid}-${input.name}`)}${_attr("name", input.name, $scope0_id, "ac$name", $scope0_reason, 0)}>${_el_resume($scope0_id, "c")}<button>show</button>${_el_resume($scope0_id, "d")}<output>${_text_resume($scope0_id, "e", "")}</output>`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va2", uid, 1);
	_scope($scope0_id, {
		h: input.name,
		k: uid
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.name, !_server_guard($scope0_reason, 0));
}, 1);
