// template.marko
function initial(_n) {}
_resume(initial, "__tests__/template.marko_0/initial");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const box = { reveal: initial };
	let out = "none";
	const show = _resume((n) => {
		box.reveal(n);
	}, "__tests__/template.marko_0/show", $scope0_id);
	_html(`<button class=go>go</button>${_el_resume($scope0_id, "#button/0")}<button class=check>check</button>${_el_resume($scope0_id, "#button/1")}<span>${_text_resume($scope0_id, "#text/2", out)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_box#3");
	_scope($scope0_id, {
		box,
		out,
		show
	}, "__tests__/template.marko", 0, {
		box: "2:8",
		out: "3:6",
		show: "4:8"
	});
}, 1);
