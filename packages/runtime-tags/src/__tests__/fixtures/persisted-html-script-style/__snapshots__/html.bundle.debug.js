// template.marko
const $template = "<style></style><script><\/script><p class=x><!> <!></p><button>+</button>";
const $walks = " b bD%c%l b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b bD%c%l ;<style></style><script><\/script><p class=x><!> <!></p><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<style${_attr_nonce()}>${_patch_text_content($scope0_id, "#style/0", `.x { color: ${_to_text(input.on ? "red" : "blue")} }`, _escape_style, $scope0_owned, 0)}</style>${_el_resume($scope0_id, "#style/0")}<script${_attr_nonce()}>${_patch_text_content($scope0_id, "#script/1", `window.__label = ${_to_text(JSON.stringify(input.label))};`, _escape_script, $scope0_owned, 1)}<\/script>${_el_resume($scope0_id, "#script/1")}<p class=x>${_patch_text($scope0_id, "#text/2", input.label, void 0, $scope0_owned, 1)} ${_text_resume($scope0_id, "#text/3", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, 0);
