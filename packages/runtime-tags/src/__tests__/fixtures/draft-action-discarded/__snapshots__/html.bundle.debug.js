// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const _shownSource = count;
	let shown = _shownSource;
	const bump = _act(_resume(function* () {
		shown = shown + 1;
		yield rejectAfter(new Error("refused"));
	}, "__tests__/template.marko_0/bump", $scope0_id));
	_html(`<button>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}<span>${_text_resume($scope0_id, "#text/2", bump.pending ? "pending" : "idle")}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		shown,
		bump
	}, "__tests__/template.marko", 0, {
		shown: "3:8",
		bump: "4:9"
	});
}, 1);
