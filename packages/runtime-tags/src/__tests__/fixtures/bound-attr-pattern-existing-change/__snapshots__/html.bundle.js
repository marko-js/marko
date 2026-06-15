// tags/show/index.marko
var show_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { a, aChange } = {
		a: "A",
		aChange(v) {}
	};
	const { "b": b, "bChange": bChange } = {
		b: "B",
		bChange(v) {}
	};
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	show_default({ value: a });
	show_default({ value: b });
	_script($scope0_id, "a0");
	writeScope($scope0_id, { i: n });
	_resume_branch($scope0_id);
}, 1);
