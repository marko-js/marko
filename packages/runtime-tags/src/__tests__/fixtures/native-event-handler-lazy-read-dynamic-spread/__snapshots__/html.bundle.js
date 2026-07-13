// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let count = 0;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}<button class=bump>bump</button>${_el_resume($scope0_id, "b")}<button class=a${_attrs_partial({ onClick: _resume(() => {
		log = `${log}a(${count})`;
	}, "a0", $scope0_id) }, { class: 1 }, "c", $scope0_id, "button")}>a</button>${_el_resume($scope0_id, "c")}<button class=b${_attrs_partial({ onClick: _resume(function() {
		log = `${log}b(${count})`;
	}, "a1", $scope0_id) }, { class: 1 }, "d", $scope0_id, "button")}>b</button>${_el_resume($scope0_id, "d")}<div class=state>${_escape(enabled)}${_el_resume($scope0_id, "e")}:<!>${_escape(count)}${_el_resume($scope0_id, "f")}</div><div class=log>${_escape(log)}${_el_resume($scope0_id, "g")}</div>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		h: enabled,
		i: count,
		j: log
	});
	_resume_branch($scope0_id);
}, 1);
