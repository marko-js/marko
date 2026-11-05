// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const tag = "select";
	_dynamic_tag($scope0_id, "a", "select", {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "a0", $scope0_id)
	}, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		forOf([
			{ value: "a" },
			{ value: "b" },
			{ value: "c" }
		], (option) => {
			const $scope2_id = _scope_id();
			_html(`<option${_attrs(option, "a", $scope2_id, "option")}>${_escape(option.value.toUpperCase())}</option>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			_scope($scope2_id, {});
		});
	}, $scope0_id));
	_html(`<span>${_text_mark($scope0_id, "b", value)}</span>`);
	_scope($scope0_id, { d: tag });
}, 1);
