// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const label = `label:${nextStamp()}`;
	_html(`<h1>${_escape(_hole_value($scope0_id, "a", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><div id=stamp>stamp:${_escape(nextStamp())}</div><span id=label>${_escape(label)}</span><button>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { i: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
