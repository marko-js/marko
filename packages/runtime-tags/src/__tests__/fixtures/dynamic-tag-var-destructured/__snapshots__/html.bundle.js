// tags/child/index.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const $return = {
		count,
		inc: _resume(function() {
			count++;
		}, "b0", $scope0_id)
	};
	_html(`<span>child:<!>${_escape(count)}${_el_resume($scope0_id, "a")}</span>`);
	writeScope($scope0_id, { b: count });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { count, inc } = child_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "c")}<div>${_escape(count)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: inc,
		a: _existing_scope($childScope)
	});
}, 1);
