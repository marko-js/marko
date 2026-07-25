// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<style${_attr_nonce()}>${_escape_style(`
  .test {
    content: ${_to_text(count)}
  }
`)}</style>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: count });
	_resume_branch($scope0_id);
}, 1);
