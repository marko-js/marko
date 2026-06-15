// template.marko
var Helper = class Helper {
	static go() {
		Helper.count = (Helper.count || 0) + 1;
	}
};
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const obj = { go: _resume(function() {}, "__tests__/template.marko_0/obj") };
	let n = 1;
	_html(`<button id=a>a <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<button id=b>b</button>${_el_resume($scope0_id, "#button/2")}<button id=c>c</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_n");
	_script($scope0_id, "__tests__/template.marko_0_obj_go");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		obj_go: obj.go,
		n
	}, "__tests__/template.marko", 0, {
		obj_go: ["obj.go", "6:8"],
		n: "7:6"
	});
	_resume_branch($scope0_id);
}, 1);
