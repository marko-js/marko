// template.marko
function initial(_n) {}
_resume(initial, "a0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const box = { reveal: initial };
	let out = "none";
	const show = _resume((n) => {
		box.reveal(n);
	}, "a1", $scope0_id);
	_html(`<button class=go>go</button>${_el_resume($scope0_id, "a")}<button class=check>check</button>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", out)}</span>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: box,
		e: out,
		f: show
	});
}, 1);
