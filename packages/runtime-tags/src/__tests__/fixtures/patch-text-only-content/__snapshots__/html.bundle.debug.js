// template.marko
const $template = "<script><\/script><style></style><title></title><!----><button>+</button>";
const $walks = " b b b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b b b ;<script><\/script><style></style><title></title><!----><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<script${_attr_nonce()}>${_escape_script(`window.log = [${_to_text(x)}, "${_to_text(input.title)}"]`)}<\/script>${_el_resume($scope0_id, "#script/0")}<style${_attr_nonce()}>${_patch_text_content($scope0_id, "PatchTextContent:#style/1", `.a { color: ${_to_text(input.color)} }`, _escape_style, $scope0_reason, 1)}</style>${_el_resume($scope0_id, "#style/1", _mask_group($scope0_reason, 1))}<title>${_patch_text_content($scope0_id, "PatchTextContent:#title/2", `${_to_text(input.title)} | site`, _escape, $scope0_reason, 0)}</title>${_el_resume($scope0_id, "#title/2", _mask_group($scope0_reason, 0))}<!--${_patch_text_content($scope0_id, "PatchTextContent:#comment/3", input.title, _escape_comment, $scope0_reason, 0) || " "}-->${_el_resume($scope0_id, "#comment/3", _mask_group($scope0_reason, 0))}<button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		x
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
