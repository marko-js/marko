// tags/card/tags/badge/index.marko
const $template = "<em> </em>";
_shells({ c: "c;D ;<em> </em>" });
var badge_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</em>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/card/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `D l/${_w0}&`)("D l"), ((_w0) => `<h3> </h3>${_w0}`)($template)) });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h3>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	badge_default({ text: input.subtitle });
	$scope0_reason && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 0, () => [badge_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.title,
		f: input.subtitle,
		g: show
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.title), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", input.subtitle));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
