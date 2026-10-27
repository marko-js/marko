// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	let d = n;
	const act = _action($scope0_id, "__tests__/template.marko_0_act#6/action");
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<button>after await</button>${_el_resume($scope0_id, "#button/1")}<div>${_text_resume($scope0_id, "#text/2", d)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_act#6");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		d,
		act,
		"TagVariableChange:act": _resume(async () => {
			await 0;
			d = 7;
		}, "__tests__/template.marko_0/act", $scope0_id) || void 0
	}, "__tests__/template.marko", 0, {
		d: "2:8",
		act: "3:9",
		"TagVariableChange:act": ["actFn", "3:9"]
	});
}, 1);
