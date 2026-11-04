// template.marko
_shells({ a: "a !a0; b b b b ;<script><\/script><style></style><title></title><!----><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<script${_attr_nonce()}>${_escape_script(`window.log = [${_to_text(x)}, "${_to_text(input.title)}"]`)}<\/script>${_el_mark($scope0_id, "a")}<style${_attr_nonce()}>${_escape_style(`.a { color: ${_to_text(input.color)} }`, $scope0_id, "mb", $scope0_reason, 1)}</style>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 1))}<title>${_escape(`${_to_text(input.title)} | site`, $scope0_id, "mc", $scope0_reason, 0)}</title>${_el_mark($scope0_id, "c", $uf__input_title)}<!--${_escape_comment(input.title, $scope0_id, "md", $scope0_reason, 0) || " "}-->${_el_mark($scope0_id, "d", $uf__input_title)}<button>+</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_title && "h");
	_scope($scope0_id, {
		h: input.title,
		j: x
	}) || $fg__input_title && _patch_write($scope0_id, "xh", input.title, !_server_guard($scope0_reason, 0));
}, 1);
