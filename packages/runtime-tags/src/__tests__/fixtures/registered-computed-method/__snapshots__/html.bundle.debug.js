// template.marko
const key = "bump";
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const handlers = { [key]: _resume(function() {
		n++;
	}, "__tests__/template.marko_0/handlers", $scope0_id) };
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}<div>${_text_resume($scope0_id, "#text/1", n)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_handlers#3");
	_scope($scope0_id, {
		n,
		handlers
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		handlers: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
