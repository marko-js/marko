// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let count = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<button class=bump>bump</button>${_el_mark($scope0_id, "#button/1")}<button class=a>a</button>${_el_mark($scope0_id, "#button/2")}<button class=b${_attrs_partial(enabled && { onClick: _resume(function() {
		log = `${log}b(${count})`;
	}, "__tests__/template.marko_0/onClick", $scope0_id) }, { class: 1 }, "#button/3", $scope0_id, "button")}>b</button>${_el_mark($scope0_id, "#button/3")}<div class=state>${_text_mark($scope0_id, "#text/4", enabled)}:${_text_mark($scope0_id, "#text/5", count, 2)}</div><div class=log>${_text_mark($scope0_id, "#text/6", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_enabled#7");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		enabled,
		count,
		log
	}, "__tests__/template.marko", 0, {
		enabled: "3:6",
		count: "4:6",
		log: "5:6",
		"EventAttributes:#button/3": ["...enabled && { onClick() { log = `${log}b(${count})`; } }", "10:15"]
	});
}, 1);
