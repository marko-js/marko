// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const getCount = _resume(() => count, "__tests__/template.marko_0/getCount", $scope0_id);
	const promise = Promise.resolve(getCount);
	_html(`<button>inc:<!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<div id=ref>0</div>`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	_script($scope0_id, "__tests__/template.marko_0_promise");
	writeScope($scope0_id, {
		count,
		promise
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		promise: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
