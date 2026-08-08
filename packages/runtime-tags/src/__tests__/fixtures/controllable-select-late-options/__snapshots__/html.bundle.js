// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "b";
	let calls = 0;
	_attr_select_value($scope0_id, "a", v, _resume(function(nv) {
		calls++;
		v = nv;
	}, "a0", $scope0_id), () => {
		_html("<select>");
		_await($scope0_id, "b", resolveAfter([
			"a",
			"b",
			"c"
		]), (opts) => {
			_scope_id();
			forOf(opts, (o) => {
				_scope_id();
				_html(`<option${_attr_option_value(o)}>${_escape(o)}</option>`);
			});
		}, 0);
		_html("</select>");
	});
	_html(`${_el_resume($scope0_id, "a")}<div>${_escape(v)}${_el_resume($scope0_id, "c")}:<!>${_escape(calls)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: v,
		f: calls
	});
	_resume_branch($scope0_id);
}, 1);
