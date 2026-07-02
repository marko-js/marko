// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let log = "";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "a")}<button class=act${_attrs_partial({ onClick: _resume(function() {
		log = `${log}[${count}]`;
	}, "a0", $scope0_id) }, { class: 1 }, "b", $scope0_id, "button")}>act</button>${_el_resume($scope0_id, "b")}<div class=log>${_escape(log)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: count,
		e: log
	});
	_resume_branch($scope0_id);
}, 1);
