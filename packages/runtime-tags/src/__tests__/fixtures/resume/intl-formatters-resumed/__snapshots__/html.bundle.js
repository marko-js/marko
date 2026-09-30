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
	_html(`<button>${_text_resume($scope0_id, "b", money.format(n))} ${_text_resume($scope0_id, "c", day.format(/* @__PURE__ */ new Date(n)), 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: n,
		e: money,
		g: day
	});
}, 1);
