// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		0,
		1,
		2
	];
	const sum = function sum(i = 0) {
		return i >= items.length ? 0 : items[i] + sum(i + 1);
	};
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}<div>${_escape(sum())}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
