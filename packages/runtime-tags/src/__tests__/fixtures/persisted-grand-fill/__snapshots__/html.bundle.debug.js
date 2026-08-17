// tags/card/tags/badge/index.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
var badge_default = _template_persisted("__tests__/tags/card/tags/badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/tags/badge/index.marko", 0);
}, 0, 0);

// tags/card/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<h3> </h3>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l");
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h3>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	badge_default({ text: input.subtitle });
	$scope0_reason && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/card/index.marko", 0);
}, 0, () => [badge_default]);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({
				title: input.title,
				subtitle: input.subtitle
			});
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		input_subtitle: input.subtitle,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_subtitle: ["input.subtitle"],
		show: "1:6"
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.title), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko1", input.subtitle));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
