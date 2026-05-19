// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0");
	writeScope($scope0_id, { b: input });
});

// tags/source.marko
var source_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => ({
		setHtml(value) {
			((el) => el())(_el_read_error).innerHTML = value;
		},
		addClass(value) {
			((el) => el())(_el_read_error).classList.add(value);
		}
	}), "c0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({ action: _resume(function() {
		((api) => api())(_hoist_read_error).addClass("child");
	}, "a0", $scope0_id) });
	let api = source_default({});
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: api });
}, 1);
