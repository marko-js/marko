// template.marko
const $template = "<style></style><script><\/script><p class=x><!> <!></p><button>+</button>";
const $walks = " b bD%c%l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b bD%c%l ;<style></style><script><\/script><p class=x><!> <!></p><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<style${_attr_nonce()}>${_patch_text_content($scope0_id, "PatchTextContent:#style/0", `.x { color: ${_to_text(input.on ? "red" : "blue")} }`, _escape_style, $scope0_reason, 0)}</style>${_el_resume($scope0_id, "#style/0", _mask_group($scope0_reason, 0))}<script${_attr_nonce()}>${_patch_text_content($scope0_id, "PatchTextContent:#script/1", `window.__label = ${_to_text(JSON.stringify(input.label))};`, _escape_script, $scope0_reason, 1)}<\/script>${_el_resume($scope0_id, "#script/1", _mask_group($scope0_reason, 1))}<p class=x>${_text_resume($scope0_id, "#text/2", input.label, 1, $scope0_reason, 1)} ${_text_resume($scope0_id, "#text/3", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
