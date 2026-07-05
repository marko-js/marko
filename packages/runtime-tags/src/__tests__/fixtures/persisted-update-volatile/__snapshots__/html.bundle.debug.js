// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const label = `label:${nextStamp()}`;
	_html(`<h1>${_escape(_hole_value($scope0_id, "#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><div id=stamp>stamp:${_escape(nextStamp())}</div><span id=label>${_escape(label)}</span><button>${_escape(count)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
