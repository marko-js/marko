// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const _shownSource = count;
	let shown = _shownSource;
	const late = _act(_resume(function* () {
		yield resolveAfter(0);
		shown = 7;
		yield resolveAfter(0);
	}, "__tests__/template.marko_0/late", $scope0_id));
	const native = _act(_resume(async function() {
		void arguments;
		shown = 8;
		await resolveAfter(0);
		shown = 9;
	}, "__tests__/template.marko_0/native", $scope0_id));
	_html(`<button id=late>${_text_resume($scope0_id, "#text/1", shown)}</button>${_el_resume($scope0_id, "#button/0")}<button id=native>${_text_resume($scope0_id, "#text/3", late.pending ? "late" : "-")} ${_text_resume($scope0_id, "#text/4", native.pending ? "native" : "-", 2)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		shown,
		late,
		native
	}, "__tests__/template.marko", 0, {
		count: "2:6",
		shown: "3:8",
		late: "4:9",
		native: "9:9"
	});
}, 1);
