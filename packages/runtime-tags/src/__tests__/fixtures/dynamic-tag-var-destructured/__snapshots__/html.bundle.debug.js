// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const $return = {
		count,
		inc: _resume(function() {
			count++;
		}, "__tests__/tags/child/index.marko_0/_return", $scope0_id)
	};
	_html(`<span>child:<!>${_escape(count)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, { count }, "__tests__/tags/child/index.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { count, inc } = child_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_$pattern/var");
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/2")}<div>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_inc");
	writeScope($scope0_id, {
		inc,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { inc: "3:20" });
}, 1);
