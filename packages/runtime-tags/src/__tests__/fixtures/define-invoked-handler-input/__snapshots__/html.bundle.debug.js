// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Picker = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button${_attr_class(input.name)}>${_text_resume($scope1_id, "#text/1", input.name, _serialize_guard($scope1_reason, 0))}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { input_onPick: input.onPick }, "__tests__/template.marko", "2:2", { input_onPick: ["input.onPick", "2:16"] });
	}, $scope0_id) };
	const inc = _resume(function() {
		n++;
	}, "__tests__/template.marko_0/inc", $scope0_id);
	Picker.content({
		name: "inline",
		onPick: _resume(function() {
			n += 10;
		}, "__tests__/template.marko_0/onPick", $scope0_id)
	});
	Picker.content({
		name: "const",
		onPick: inc
	});
	_html(`<p>${_text_resume($scope0_id, "#text/2", n)}</p>`);
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
