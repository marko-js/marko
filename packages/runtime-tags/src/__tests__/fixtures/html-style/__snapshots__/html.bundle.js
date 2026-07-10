// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<style${_attr_nonce()}>
  .test {
    content: ${_escape_style(0)}
  }
</style>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: void 0 });
	_resume_branch($scope0_id);
}, 1);
