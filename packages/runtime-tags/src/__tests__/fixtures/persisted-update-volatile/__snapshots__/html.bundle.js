// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_title = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const label = `label:${nextStamp()}`;
	_html(`<h1>${_escape(_hole_value($scope0_id, "a", input.title, $sg__input_title))}${_el_resume($scope0_id, "a", $sg__input_title)}</h1><div id=stamp>stamp:${_sep(_persisted_reason())}${_escape(_hole_value($scope0_id, "b", nextStamp(), _persisted_reason()))}${_el_resume($scope0_id, "b", _persisted_reason())}</div><span id=label>${_escape(_hole_value($scope0_id, "c", label, _persisted_reason()))}${_el_resume($scope0_id, "c", _persisted_reason())}</span><button>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { i: count });
	_resume_branch($scope0_id);
}, 1);
