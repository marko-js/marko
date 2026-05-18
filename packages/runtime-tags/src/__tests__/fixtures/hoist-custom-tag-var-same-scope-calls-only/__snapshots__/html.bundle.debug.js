// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
});

// tags/source.marko
var source_default = _template("__tests__/tags/source.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => ({
		setHtml(value) {
			((el) => el())(_el_read_error).innerHTML = value;
		},
		addClass(value) {
			((el) => el())(_el_read_error).classList.add(value);
		}
	}), "__tests__/tags/source.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/source.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ action: _resume(function() {
		((api) => api())(_hoist_read_error).addClass("child");
	}, "__tests__/template.marko_0/action", $scope0_id) });
	let api = source_default({});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { api }, "__tests__/template.marko", 0, { api: "3:9" });
	_assert_hoist(api);
}, 1);
