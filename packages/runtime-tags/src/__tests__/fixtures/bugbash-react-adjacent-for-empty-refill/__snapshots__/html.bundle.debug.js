// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = [1, 2];
	let b = [8, 9];
	_html("<div id=wrap>");
	_for_of(a, (x) => {
		const $scope1_id = _scope_id();
		_html(`<i>a<!>${_escape(x)}${_el_resume($scope1_id, "#text/0")}</i>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, (x) => x, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_for_of(b, (x) => {
		const $scope2_id = _scope_id();
		_html(`<b>b<!>${_escape(x)}${_el_resume($scope2_id, "#text/0")}</b>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "7:4");
	}, (x) => x, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`</div><button id=empty-a>empty a</button>${_el_resume($scope0_id, "#button/2")}<button id=refill-a>refill a</button>${_el_resume($scope0_id, "#button/3")}<button id=empty-both>empty both</button>${_el_resume($scope0_id, "#button/4")}<button id=refill-both>refill both</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
