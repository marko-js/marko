// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1234.5;
	const money = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"
	});
	const day = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeZone: "UTC"
	});
	_html(`<button>${_escape(money.format(n))}${_el_resume($scope0_id, "#text/1")} <!>${_escape(day.format(new Date(n)))}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		money,
		day
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		money: "2:8",
		day: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
