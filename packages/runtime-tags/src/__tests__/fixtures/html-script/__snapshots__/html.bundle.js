// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<script${_attr_nonce()} type=importmap>
  {
    "imports": {
      "${_escape_script(count)}": "https://markojs.com",
    }
  }
<\/script>${_el_resume($scope0_id, "a")}<div>${_escape(count)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
