// tags/make.marko
var make_default = _template("__tests__/tags/make.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const get = _resume(() => input.v, "__tests__/tags/make.marko_0/get", $scope0_id);
	_html(`<p></p>${_el_resume($scope0_id, "#p/0")}`);
	const $return = get;
	_script($scope0_id, "__tests__/tags/make.marko_0_get#4");
	_scope($scope0_id, {
		input_v: input.v,
		get
	}, "__tests__/tags/make.marko", 0, {
		input_v: ["input.v"],
		get: "1:8"
	});
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let fn = make_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_fn#6/var");
	_html(`<div>${_text_resume($scope0_id, "#text/2", fn(), $wg__input_v)}</div>`);
	$wi__input_v && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
