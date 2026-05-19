// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=count>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:5" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = "div";
	_dynamic_tag($scope0_id, "#text/0", tagName, {}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		counter_default({});
	}, $scope0_id));
	_html(`<button id=changeTag></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_tagName");
	writeScope($scope0_id, { tagName }, "__tests__/template.marko", 0, { tagName: "1:6" });
	_resume_branch($scope0_id);
}, 1);
