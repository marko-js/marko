// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let count = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}<button class=bump>bump</button>${_el_resume($scope0_id, "#button/1")}<button class=a${_attrs_partial({ onClick: enabled && _resume(() => {
		log = `${log}a(${count})`;
	}, "__tests__/template.marko_0/anonymous", $scope0_id) }, { class: 1 }, "#button/2", $scope0_id, "button")}>a</button>${_el_resume($scope0_id, "#button/2")}<button class=b${_attrs_partial(enabled && { onClick: _resume(function() {
		log = `${log}b(${count})`;
	}, "__tests__/template.marko_0/onClick", $scope0_id) }, { class: 1 }, "#button/3", $scope0_id, "button")}>b</button>${_el_resume($scope0_id, "#button/3")}<div class=state>${_escape(enabled)}${_el_resume($scope0_id, "#text/4")}:<!>${_escape(count)}${_el_resume($scope0_id, "#text/5")}</div><div class=log>${_escape(log)}${_el_resume($scope0_id, "#text/6")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_enabled");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		enabled,
		count,
		log
	}, "__tests__/template.marko", 0, {
		enabled: "3:6",
		count: "4:6",
		log: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
