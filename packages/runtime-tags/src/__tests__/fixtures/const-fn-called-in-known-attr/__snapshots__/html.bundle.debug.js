// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr_class(input.name)}>${_text_resume($scope0_id, "#text/1", input.name, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_onPick#5");
	_scope($scope0_id, { input_onPick: input.onPick }, "__tests__/tags/child.marko", 0, { input_onPick: ["input.onPick"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let max = 1;
	const pick = _resume(function() {
		count++;
	}, "__tests__/template.marko_0/pick", $scope0_id);
	const canPick = _resume(function() {
		return count < max;
	}, "__tests__/template.marko_0/canPick", $scope0_id);
	const inc = _resume(function() {
		count += 10;
	}, "__tests__/template.marko_0/inc", $scope0_id);
	const getHandler = _resume(function() {
		return inc;
	}, "__tests__/template.marko_0/getHandler", $scope0_id);
	const $childScope = _peek_scope_id();
	child_default({
		name: "gated",
		onPick: canPick() ? pick : undefined
	});
	const $childScope2 = _peek_scope_id();
	child_default({
		name: "returned",
		onPick: getHandler()
	});
	_html(`<button id=raise>raise</button>${_el_resume($scope0_id, "#button/2")}<p>${_text_resume($scope0_id, "#text/3", count)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		max,
		pick,
		inc,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		max: "2:6",
		pick: "3:8",
		inc: "5:8"
	});
}, 1);
