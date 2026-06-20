// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const total = 5;
	const info = {
		label: "step",
		total
	};
	_html(`<button>+2</button>${_el_resume($scope0_id, "a")}<div class=step${_attr("data-total", total)}>step: <!>${_escape(count)}${_el_resume($scope0_id, "c")} / ${_escape(total)}</div><pre>${_escape(info.total)} 18446744073709551616 Infinity <!>${_escape(count)}${_el_resume($scope0_id, "f")}</pre>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: count,
		k: total
	});
	_resume_branch($scope0_id);
}, 1);
