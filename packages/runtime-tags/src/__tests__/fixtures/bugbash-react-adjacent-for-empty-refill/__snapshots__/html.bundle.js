// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = [1, 2];
	let b = [8, 9];
	_html("<div id=wrap>");
	_for_of(a, (x) => {
		const $scope1_id = _scope_id();
		_html(`<i>a<!>${_escape(x)}${_el_resume($scope1_id, "a")}</i>`);
		writeScope($scope1_id, {});
	}, (x) => x, $scope0_id, "a", 1, 1, 1, 0, 1);
	_for_of(b, (x) => {
		const $scope2_id = _scope_id();
		_html(`<b>b<!>${_escape(x)}${_el_resume($scope2_id, "a")}</b>`);
		writeScope($scope2_id, {});
	}, (x) => x, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`</div><button id=empty-a>empty a</button>${_el_resume($scope0_id, "c")}<button id=refill-a>refill a</button>${_el_resume($scope0_id, "d")}<button id=empty-both>empty both</button>${_el_resume($scope0_id, "e")}<button id=refill-both>refill both</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
