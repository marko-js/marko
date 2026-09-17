// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const _shownSource = count;
	let shown = _shownSource;
	_html(`<button id=guess>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}<button id=set>set</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { shown }, "__tests__/template.marko", 0, { shown: "2:8" });
}, 1);
