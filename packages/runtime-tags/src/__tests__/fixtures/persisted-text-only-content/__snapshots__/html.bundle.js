// template.marko
_shells({ a: "a !a0; b b b b ;<script><\/script><style></style><title></title><!----><button>+</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<script${_attr_nonce()}>${_escape_script(`window.log = [${_to_text(x)}, "${_to_text(input.title)}"]`)}<\/script>${_el_resume($scope0_id, "a")}<style${_attr_nonce()}>${_patch_text_content($scope0_id, "b", `.a { color: ${_to_text(input.color)} }`, _escape_style, $scope0_owned, 1)}</style>${_el_resume($scope0_id, "b")}<title>${_patch_text_content($scope0_id, "c", `${_to_text(input.title)} | site`, _escape, $scope0_owned, 0)}</title>${_el_resume($scope0_id, "c")}<!--${_patch_text_content($scope0_id, "d", input.title, _escape_comment, $scope0_owned, 0) || " "}-->${_el_resume($scope0_id, "d")}<button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		h: input.title,
		j: x
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
