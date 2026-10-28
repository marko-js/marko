// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, () => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</p>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $wg__input_label);
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/5": $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		resolve,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { resolve: "2:6" });
}, 1);
