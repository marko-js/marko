// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let count = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}<button class=bump>bump</button>${_el_mark($scope0_id, "b")}<button class=a>a</button>${_el_mark($scope0_id, "c")}<button class=b${_attrs_partial({ onClick: _resume(function() {
		log = `${log}b(${count})`;
	}, "a0", $scope0_id) }, { class: 1 }, "d", $scope0_id, "button")}>b</button>${_el_mark($scope0_id, "d")}<div class=state>${_text_mark($scope0_id, "e", enabled)}:${_text_mark($scope0_id, "f", count, 2)}</div><div class=log>${_text_mark($scope0_id, "g", log)}</div>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: enabled,
		i: count,
		j: log
	});
}, 1);
