// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let shown = count;
	const bump = _act(_resume(() => {
		shown = shown + 1;
	}, "a0", $scope0_id));
	_html(`<button id=claimed>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}<button id=unclaimed>${_text_resume($scope0_id, "d", bump.pending ? "pending" : "idle")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: count,
		f: shown,
		h: bump
	});
}, 1);
