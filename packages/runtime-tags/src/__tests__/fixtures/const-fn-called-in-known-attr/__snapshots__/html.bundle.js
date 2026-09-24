// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr_class(input.name)}>${_text_resume($scope0_id, "b", input.name, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: input.onPick });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let max = 1;
	const pick = _resume(function() {
		count++;
	}, "a0", $scope0_id);
	const canPick = _resume(function() {
		return count < max;
	}, "a1", $scope0_id);
	const inc = _resume(function() {
		count += 10;
	}, "a2", $scope0_id);
	const getHandler = _resume(function() {
		return inc;
	}, "a3", $scope0_id);
	const $childScope = _peek_scope_id();
	child_default({
		name: "gated",
		onPick: canPick() ? pick : void 0
	});
	const $childScope2 = _peek_scope_id();
	child_default({
		name: "returned",
		onPick: getHandler()
	});
	_html(`<button id=raise>raise</button>${_el_resume($scope0_id, "c")}<p>${_text_resume($scope0_id, "d", count)}</p>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: count,
		f: max,
		h: pick,
		k: inc,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
