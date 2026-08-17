// tags/badge.marko
const $template$2 = "<b class=badge> </b>";
const $walks$2 = "D l";
var badge_default = _template_persisted("__tests__/tags/badge.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</b>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
}, 0, 0);

// tags/card.marko
const $template$1 = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks$1 = "E lD l D m";
var card_default = _template_persisted("__tests__/tags/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h2><p>${_patch_text($scope0_id, "#text/1", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</p><button class=t>${open ? "hide" : "show"}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card.marko0", open, 1);
	$scope0_reason && writeScope($scope0_id, { open }, "__tests__/tags/card.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			badge_default(input.badge);
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_set_serialize_reason(30);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope2);
	card_default({
		...input.props,
		note: on ? "on" : "off"
	});
	_html(`<button id=o>o</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_props: input.props,
		on,
		input_badge_label: input.badge?.label,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_props: ["input.props"],
		on: "1:6",
		input_badge_label: ["input.badge.label"]
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.props), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.badge?.label));
	_resume_branch($scope0_id);
}, 1, () => [badge_default, card_default]);
