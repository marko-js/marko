// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	let lastCount = 0;
	let lastCount2 = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", clickCount)}</button>${_el_resume($scope0_id, "#button/0")}used to be <span>${_text_resume($scope0_id, "#text/2", lastCount)}</span> which should be the same as <span>${_text_resume($scope0_id, "#text/3", lastCount2)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { clickCount }, "__tests__/template.marko", 0, { clickCount: "1:6" });
}, 1);
