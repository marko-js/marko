// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const day = new Intl.DateTimeFormat("ja", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
		timeZone: "UTC"
	});
	_html(`<button>${_escape(day.format(new Date(n)))}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		day
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		day: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
