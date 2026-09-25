// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const box = { reveal: _resume(function(_n) {}, "__tests__/template.marko_0/box") };
	let out = "none";
	const show = _resume((n) => {
		box.reveal(n);
	}, "__tests__/template.marko_0/show", $scope0_id);
	const call = _resume((n) => {
		const reveal = box.reveal;
		reveal(n);
	}, "__tests__/template.marko_0/call", $scope0_id);
	_html(`<button class=show>show</button>${_el_resume($scope0_id, "#button/0")}<button class=call>call</button>${_el_resume($scope0_id, "#button/1")}<span>${_text_resume($scope0_id, "#text/2", out)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_box#3");
	_scope($scope0_id, {
		box,
		show,
		call
	}, "__tests__/template.marko", 0, {
		box: "1:8",
		show: "3:8",
		call: "6:8"
	});
}, 1);
