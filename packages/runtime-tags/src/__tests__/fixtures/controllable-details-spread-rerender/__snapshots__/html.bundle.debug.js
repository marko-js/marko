// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	let n = 0;
	const attrs = {
		open,
		openChange: _resume(function(next) {
			open = next;
		}, "__tests__/template.marko_0/attrs", $scope0_id),
		"data-n": n
	};
	_html(`<button>bump</button>${_el_resume($scope0_id, "#button/0")}<details${_attrs(attrs, "#details/1", $scope0_id, "details")}><summary>s</summary>body</details>${_el_resume($scope0_id, "#details/1")}<output>${open ? "open" : "closed"}${_el_resume($scope0_id, "#text/2")}/<!>${_escape(n)}${_el_resume($scope0_id, "#text/3")}</output>`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#7");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		open,
		n
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		n: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
