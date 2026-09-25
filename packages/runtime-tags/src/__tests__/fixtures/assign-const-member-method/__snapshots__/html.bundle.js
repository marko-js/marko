// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const box = { reveal: _resume(function(_n) {}, "a0") };
	let out = "none";
	const show = _resume((n) => {
		box.reveal(n);
	}, "a1", $scope0_id);
	const call = _resume((n) => {
		const reveal = box.reveal;
		reveal(n);
	}, "a2", $scope0_id);
	_html(`<button class=show>show</button>${_el_resume($scope0_id, "a")}<button class=call>call</button>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", out)}</span>`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: box,
		f: show,
		g: call
	});
}, 1);
