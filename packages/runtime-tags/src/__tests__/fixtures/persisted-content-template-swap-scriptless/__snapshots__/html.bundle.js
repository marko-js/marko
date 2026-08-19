// tags/body-a/index.marko
var body_a_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<em>A</em>");
}, 0, 0);

// tags/body-b/index.marko
var body_b_default = _template_persisted("c", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<strong>B</strong>");
}, 0, 0);

// tags/card/index.marko
var card_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		title: input.title,
		content: input.alt ? body_b_default : body_a_default
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [card_default]);
