// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const obj = new class {
		#hidden() {}
		go = this.#hidden;
	}();
	let n = 1;
	_html(`<button id=a>a</button>${_el_resume($scope0_id, "#button/0")}<button id=b>b <!>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_obj_go");
	writeScope($scope0_id, {
		obj_go: obj.go,
		n
	}, "__tests__/template.marko", 0, {
		obj_go: ["obj.go", "1:8"],
		n: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
