// template.marko
const $template = "<script><\/script><style></style><title></title><!----><button>+</button>";
const $walks = " b b b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b b b ;<script><\/script><style></style><title></title><!----><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<script${_attr_nonce()}>${_escape_script(`window.log = [${_to_text(x)}, "${_to_text(input.title)}"]`)}<\/script>${_el_mark($scope0_id, "#script/0")}<style${_attr_nonce()}>${_escape_style(`.a { color: ${_to_text(input.color)} }`, $scope0_id, "PatchTextContent:#style/1", $scope0_reason, 1)}</style>${_el_mark($scope0_id, "#style/1", _updates_from($scope0_reason, 1))}<title>${_escape(`${_to_text(input.title)} | site`, $scope0_id, "PatchTextContent:#title/2", $scope0_reason, 0)}</title>${_el_mark($scope0_id, "#title/2", $uf__input_title)}<!--${_escape_comment(input.title, $scope0_id, "PatchTextContent:#comment/3", $scope0_reason, 0) || " "}-->${_el_mark($scope0_id, "#comment/3", $uf__input_title)}<button>+</button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#7_x#9/setup", $fg__input_title && "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		x
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		x: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
