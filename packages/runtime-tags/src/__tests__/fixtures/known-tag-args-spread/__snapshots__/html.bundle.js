// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input__closures = /* @__PURE__ */ new Set();
	let x = 1;
	const args = [x, 2];
	const MyTag = { content: _content("a0", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_escape(a)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))}|${_sep($sg__b)}${_escape(b)}${_el_resume($scope1_id, "b", $sg__b)}|${_sep($sg__input)}${_escape(JSON.stringify(input))}${_el_resume($scope1_id, "c", $sg__input)}</div>`);
		(_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0)) && _subscribe($si__input && $input__closures, writeScope($scope1_id, { _: $si__input && _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	MyTag.content(...args);
	MyTag.content(7, 8, 9);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	let $cgrp;
	$cgrp = attrTag({ y: 1 });
	MyTag.content(...args, {
		cgrp: $cgrp,
		row: attrTag({ r: x })
	});
	_html(`<button>inc <!>${_escape(x)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		h: x,
		Bg: $si__input && $input__closures,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
