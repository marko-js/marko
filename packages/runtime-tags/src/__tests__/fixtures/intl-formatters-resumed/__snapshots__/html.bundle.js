// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<button>${_escape(money.format(n))}${_el_resume($scope0_id, "b")} <!>${_escape(day.format(/* @__PURE__ */ new Date(n)))}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: n,
		e: money,
		g: day
	});
	_resume_branch($scope0_id);
}, 1);
