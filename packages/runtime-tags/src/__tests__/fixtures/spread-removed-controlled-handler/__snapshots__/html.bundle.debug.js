// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "init";
	let attrs = {
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "__tests__/template.marko_0/attrs", $scope0_id)
	};
	_html(`<input${_attrs(attrs, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}<span>value=[<!>${_escape(value)}${_el_resume($scope0_id, "#text/1")}]</span><button>drop</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_attrs");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
