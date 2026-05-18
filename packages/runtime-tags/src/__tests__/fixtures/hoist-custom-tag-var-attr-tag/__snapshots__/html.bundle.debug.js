// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// tags/thing.marko
var thing_default = _template("__tests__/tags/thing.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.what, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/thing.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $setHtml_getter = _hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
	const $what_content__subscribers = new Set();
	thing_default({ what: attrTag({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let setHtml = child_default({});
		_subscribe($what_content__subscribers, writeScope($scope1_id, { setHtml }, "__tests__/template.marko", "3:4", { setHtml: "4:12" }));
		_assert_hoist(setHtml);
	}) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "ClosureScopes:1": $what_content__subscribers }, "__tests__/template.marko", 0);
}, 1);
