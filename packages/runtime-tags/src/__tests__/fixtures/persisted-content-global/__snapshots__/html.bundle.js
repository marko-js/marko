// tags/banner/index.marko
var banner_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", $global().brand)}${_el_resume($scope0_id, "a")}</div>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 1);

// tags/widget/index.marko
var widget_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><span>${_patch_text($scope0_id, "a", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</span>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(widget_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "a", $childScope);
		widget_default({
			value: count,
			content: banner_default
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
