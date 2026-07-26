// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	let n = 0;
	const attrs = {
		open,
		openChange: _resume(function(next) {
			open = next;
		}, "a0", $scope0_id),
		"data-n": n
	};
	_html(`<button>bump</button>${_el_resume($scope0_id, "a")}<details${_attrs(attrs, "b", $scope0_id, "details")}><summary>s</summary>body</details>${_el_resume($scope0_id, "b")}<output>${open ? "open" : "closed"}${_el_resume($scope0_id, "c")}/<!>${_escape(n)}${_el_resume($scope0_id, "d")}</output>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: open,
		f: n
	});
	_resume_branch($scope0_id);
}, 1);
