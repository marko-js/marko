// tags/reveal/index.marko
var reveal_default = _template("__tests__/tags/reveal/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/reveal/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	reveal_default({ value: a });
	reveal_default({ value: b });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "3:6" });
	_resume_branch($scope0_id);
}, 1);
