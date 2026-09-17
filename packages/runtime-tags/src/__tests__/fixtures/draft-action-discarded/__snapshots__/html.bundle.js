// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shown = 0;
	const bump = _act(_resume(function* () {
		shown = shown + 1;
		yield rejectAfter(/* @__PURE__ */ new Error("refused"));
	}, "a0", $scope0_id));
	_html(`<button>${_text_resume($scope0_id, "b", shown)}</button>${_el_resume($scope0_id, "a")}<span>${_text_resume($scope0_id, "c", bump.pending ? "pending" : "idle")}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: shown,
		h: bump
	});
}, 1);
