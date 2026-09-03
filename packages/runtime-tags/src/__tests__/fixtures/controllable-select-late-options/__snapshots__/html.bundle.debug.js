// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "b";
	let calls = 0;
	_attr_select_value($scope0_id, "#select/0", v, _resume(function(nv) {
		calls++;
		v = nv;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html("<select>");
		_await($scope0_id, "#text/1", resolveAfter([
			"a",
			"b",
			"c"
		]), (opts) => {
			const $scope1_id = _scope_id();
			forOf(opts, (o) => {
				const $scope2_id = _scope_id();
				_html(`<option${_attr_option_value(o)}>${_escape(o)}</option>`);
			});
		}, 0);
		_html("</select>");
	});
	_html(`${_el_resume($scope0_id, "#select/0")}<div>${_text_resume($scope0_id, "#text/2", v)}:${_text_resume($scope0_id, "#text/3", calls, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		calls
	}, "__tests__/template.marko", 0, {
		v: "3:6",
		calls: "4:6",
		"ControlledHandler:#select/0": ["valueChange", "5:17"]
	});
}, 1);
