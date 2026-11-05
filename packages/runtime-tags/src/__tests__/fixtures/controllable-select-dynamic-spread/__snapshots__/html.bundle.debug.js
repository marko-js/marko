// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const tag = "select";
	_dynamic_tag($scope0_id, "#text/0", tag ? "select" : {}, {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		forOf([
			{ value: "a" },
			{ value: "b" },
			{ value: "c" }
		], (option) => {
			const $scope2_id = _scope_id();
			_html(`<option${_attrs(option, "#option/0", $scope2_id, "option")}>${_escape(option.value.toUpperCase())}</option>${_el_mark($scope2_id, "#option/0")}`);
			_script($scope2_id, "__tests__/template.marko_2_option#3");
			_scope($scope2_id, {}, "__tests__/template.marko", "4:4", { "EventAttributes:#option/0": ["...option", "5:16"] });
		});
	}, $scope0_id));
	_html(`<span>${_text_mark($scope0_id, "#text/1", value)}</span>`);
	_scope($scope0_id, { tag }, "__tests__/template.marko", 0, { tag: "2:8" });
}, 1);
