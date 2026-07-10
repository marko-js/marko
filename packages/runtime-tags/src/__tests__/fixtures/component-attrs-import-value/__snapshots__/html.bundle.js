// helpers.ts
const formatNumber = (n) => {
	return "$" + n.toFixed(2);
};

// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_escape(input.format(0))}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		d: input,
		e: void 0
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	counter_default({ format: formatNumber });
}, 1);
