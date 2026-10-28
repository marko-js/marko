// template.marko
_shells({ a: "a !a0; b bD%c%l ;<style></style><script><\/script><p class=x><!> <!></p><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<style${_attr_nonce()}>${_escape_style(`.x { color: ${_to_text(input.on ? "red" : "blue")} }`, $scope0_id, "ma", $scope0_reason, 0)}</style>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<script${_attr_nonce()}>${_escape_script(`window.__label = ${_to_text(JSON.stringify(input.label))};`, $scope0_id, "mb", $scope0_reason, 1)}<\/script>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 1))}<p class=x>${_text_resume($scope0_id, "c", input.label, 1, $scope0_reason, 1)} ${_text_resume($scope0_id, "d", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { j: count });
}, 1);
