// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hello";
	let log = "";
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}<button>append</button>${_el_resume($scope0_id, "b")}<div class=message>${_escape(message)}${_el_resume($scope0_id, "c")}</div><div class=log>${_escape(log)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: message,
		f: log
	});
	_resume_branch($scope0_id);
}, 1);
