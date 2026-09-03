// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input__closures = /* @__PURE__ */ new Set();
	let x = 1;
	const args = [x, 2];
	const MyTag = { content: _content("a0", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__a = _serialize_guard($scope1_reason, 1), $sg__b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_text_resume($scope1_id, "a", a, $sg__a)}|${_text_resume($scope1_id, "b", b, $sg__b * 2)}|${_text_resume($scope1_id, "c", JSON.stringify(input), $sg__input * 2)}</div>`);
		(_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0)) && _subscribe($si__input && $input__closures, _scope($scope1_id, { _: $si__input && _scope_with_id($scope0_id) }));
		$sg__input || $sg__a || $sg__b || (_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0)) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	MyTag.content(...args);
	MyTag.content(7, 8, 9);
	_set_serialize_reason(1);
	let $cgrp;
	$cgrp = attrTag({ y: 1 });
	const $childScope2 = _peek_scope_id();
	MyTag.content(...args, {
		cgrp: $cgrp,
		row: attrTag({ r: x })
	});
	_html(`<button>inc ${_text_resume($scope0_id, "e", x, 2)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: x,
		j: $si__input && $input__closures,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
