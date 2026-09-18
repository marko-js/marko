// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const _shownSource = count;
	let shown = _shownSource;
	const bump = _act(_resume(() => {
		shown = shown + 1;
	}, "__tests__/template.marko_0/bump", $scope0_id));
	_html(`<button id=claimed>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}<button id=unclaimed>${_text_resume($scope0_id, "#text/3", bump.pending ? "pending" : "idle")}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_count#4");
	_scope($scope0_id, {
		count,
		shown,
		bump
	}, "__tests__/template.marko", 0, {
		count: "2:6",
		shown: "3:8",
		bump: "4:9"
	});
}, 1);
