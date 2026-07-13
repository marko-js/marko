// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<style${_attr_nonce()}>
  A {}
</style><style nonce=override>
  B {}
</style><style${_attrs({
		nonce: $global().cspNonce,
		nonce: "override-spread"
	}, "b", $scope0_id, "style")}>
  C {}
</style>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
