// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const spreadAttrs = { nonce: "override-spread" };
	let mounted = false;
	_html(`<style${_attr_nonce()}>
  A {}
</style><style nonce=override>
  B {}
</style><style${_attrs({
		nonce: $global().cspNonce,
		...spreadAttrs
	}, "#style/1", $scope0_id, "style")}>
  C {}
</style>${_el_resume($scope0_id, "#style/1")}`);
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			_html(`<style${_attr_nonce()}>
    D {}
  </style>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "17:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_spreadAttrs");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
