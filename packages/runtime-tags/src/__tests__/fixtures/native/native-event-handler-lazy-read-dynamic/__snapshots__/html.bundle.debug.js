// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let other = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}<button class=bump>bump</button>${_el_resume($scope0_id, "#button/1")}<button class=act>act</button>${_el_resume($scope0_id, "#button/2")}<div class=state>${_text_resume($scope0_id, "#text/3", enabled)}:${_text_resume($scope0_id, "#text/4", other, 2)}</div><div class=log>${_text_resume($scope0_id, "#text/5", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_enabled#6");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		enabled,
		other,
		log
	}, "__tests__/template.marko", 0, {
		enabled: "2:6",
		other: "3:6",
		log: "4:6"
	});
}, 1);
