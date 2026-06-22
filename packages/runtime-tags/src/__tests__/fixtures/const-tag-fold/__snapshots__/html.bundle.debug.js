// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const total = 2 + 3;
	const info = {
		label: "step",
		total
	};
	_html(`<button>+2</button>${_el_resume($scope0_id, "#button/0")}<div class=step${_attr("data-total", total)}>step: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")} / ${_escape(total)}</div><pre>${_escape(info.total)} 18446744073709551616 Infinity <!>${_escape(void 0 ?? count)}${_el_resume($scope0_id, "#text/5")}</pre>`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		total
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		total: "4:8"
	});
	_resume_branch($scope0_id);
}, 1);
