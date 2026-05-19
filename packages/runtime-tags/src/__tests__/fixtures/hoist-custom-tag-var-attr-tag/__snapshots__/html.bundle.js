// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// tags/thing.marko
var thing_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.what, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $what_content__subscribers = /* @__PURE__ */ new Set();
	thing_default({ what: attrTag({ content: _content("a1", () => {
		_scope_reason();
		_subscribe($what_content__subscribers, writeScope(_scope_id(), { c: child_default({}) }));
	}) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, { B1: $what_content__subscribers });
}, 1);
