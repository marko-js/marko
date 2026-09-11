// template.marko
_shells({ a: "a !a0; b bD%c%l ;<style></style><script><\/script><p class=x><!> <!></p><button>+</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<style${_attr_nonce()}>${_patch_text_content($scope0_id, "a", `.x { color: ${_to_text(input.on ? "red" : "blue")} }`, _escape_style, $scope0_owned, 0)}</style>${_el_resume($scope0_id, "a")}<script${_attr_nonce()}>${_patch_text_content($scope0_id, "b", `window.__label = ${_to_text(JSON.stringify(input.label))};`, _escape_script, $scope0_owned, 1)}<\/script>${_el_resume($scope0_id, "b")}<p class=x>${_patch_text($scope0_id, "c", input.label, void 0, $scope0_owned, 1)} ${_text_resume($scope0_id, "d", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { j: count });
}, 1, 0);
