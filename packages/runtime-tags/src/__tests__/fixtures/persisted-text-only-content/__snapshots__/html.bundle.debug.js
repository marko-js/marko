// template.marko
const $template = "<script><\/script><style></style><title></title><!----><button>+</button>";
const $walks = " b b b b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b b b ;<script><\/script><style></style><title></title><!----><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<script${_attr_nonce()}>${_escape_script(`window.log = [${_to_text(x)}, "${_to_text(input.title)}"]`)}<\/script>${_el_resume($scope0_id, "#script/0")}<style${_attr_nonce()}>${_patch_text_content($scope0_id, "#style/1", `.a { color: ${_to_text(input.color)} }`, _escape_style, $scope0_owned, 1)}</style>${_el_resume($scope0_id, "#style/1")}<title>${_patch_text_content($scope0_id, "#title/2", `${_to_text(input.title)} | site`, _escape, $scope0_owned, 0)}</title>${_el_resume($scope0_id, "#title/2")}<!--${_patch_text_content($scope0_id, "#comment/3", input.title, _escape_comment, $scope0_owned, 0) || " "}-->${_el_resume($scope0_id, "#comment/3")}<button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		x
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		x: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
