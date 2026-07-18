// v:template.marko.comptime.1fb1ff30.js
const _fn0 = (step) => function stepper(n) {
	return n + step;
};

// template.marko
_fn0(3);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
