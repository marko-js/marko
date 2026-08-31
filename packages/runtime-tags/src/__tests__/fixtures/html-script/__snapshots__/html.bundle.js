// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<script${_attr_nonce()} type=importmap>${_escape_script(`
  {
    "imports": {
      "${_to_text(count)}": "https://markojs.com",
    }
  }
`)}<\/script>${_el_resume($scope0_id, "a")}<div>${_text_resume($scope0_id, "b", count)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
