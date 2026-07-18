// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $on = false;
	let $on2 = false;
	_html(`<section><h2>kitchen</h2><button>on${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</section><section><h2>porch</h2><button>on${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: $on,
		f: $on2
	});
	_resume_branch($scope0_id);
}, 1);
