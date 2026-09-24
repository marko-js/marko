// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Picker = { content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button${_attr_class(input.name)}>${_text_resume($scope1_id, "b", input.name, _serialize_guard($scope1_reason, 0))}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		_scope($scope1_id, { f: input.onPick });
	}, $scope0_id) };
	const inc = _resume(function() {
		n++;
	}, "a0", $scope0_id);
	Picker.content({
		name: "inline",
		onPick: _resume(function() {
			n += 10;
		}, "a1", $scope0_id)
	});
	Picker.content({
		name: "const",
		onPick: inc
	});
	_html(`<p>${_text_resume($scope0_id, "c", n)}</p>`);
	_scope($scope0_id, { d: n });
}, 1);
