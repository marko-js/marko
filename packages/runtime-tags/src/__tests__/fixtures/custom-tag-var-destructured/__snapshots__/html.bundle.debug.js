// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const $return = {
		count,
		inc: _resume(function() {
			count++;
		}, "__tests__/tags/child.marko_0/_return", $scope0_id),
		countChange: _resume(function(value) {
			count = value;
		}, "__tests__/tags/child.marko_0/_return2", $scope0_id)
	};
	_html(`<span>child:<!>${_escape(count)}${_el_resume($scope0_id, "#text/0")}</span>`);
	writeScope($scope0_id, { count }, "__tests__/tags/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { countChange: $countChange, count, inc, missing: $missing } = child_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_$pattern/var");
	const missing = void 0 !== $missing ? $missing : "fallback";
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/2")}<button class=assign>assign</button>${_el_resume($scope0_id, "#button/3")}<div>${_escape(count)}${_el_resume($scope0_id, "#text/4")}:<!>${_escape(missing)}${_el_resume($scope0_id, "#text/5")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_count_$countChange");
	_script($scope0_id, "__tests__/template.marko_0_inc");
	writeScope($scope0_id, {
		count,
		$countChange,
		inc,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:10",
		$countChange: "3:28",
		inc: "1:17"
	});
}, 1);
