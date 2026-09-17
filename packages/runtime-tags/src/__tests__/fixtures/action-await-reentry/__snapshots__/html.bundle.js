// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shown = 0;
	const late = _act(_resume(function* () {
		yield resolveAfter(0);
		shown = 7;
		yield resolveAfter(0);
	}, "a0", $scope0_id));
	const native = _act(_resume(async function() {
		arguments;
		shown = 8;
		await resolveAfter(0);
		shown = 9;
	}, "a1", $scope0_id));
	_html(`<button id=late>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}<button id=native>${_text_resume($scope0_id, "d", late.pending ? "late" : "-")} ${_text_resume($scope0_id, "e", native.pending ? "native" : "-", 2)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: shown,
		j: late,
		l: native
	});
}, 1);
