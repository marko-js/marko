// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let volume = 1;
	let muted = false;
	const audioOff = muted || volume === 0;
	_html(`<div>${audioOff ? "off" : volume < .5 ? "low" : "high"}${_el_resume($scope0_id, "#text/0")}</div><button>zero</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { muted }, "__tests__/template.marko", 0, { muted: "2:6" });
	_resume_branch($scope0_id);
}, 1);
