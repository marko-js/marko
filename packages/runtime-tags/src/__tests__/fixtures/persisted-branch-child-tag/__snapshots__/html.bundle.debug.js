// tags/badge.marko
const $template$1 = "<span class=badge><!><!></span>";
const $walks$1 = "D%b%l";
var badge_default = _template_persisted("__tests__/tags/badge.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=badge>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}<!>${_patch_text($scope0_id, "#text/1", input.note ? ` (${_to_text(input.note)})` : "", $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</span>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<em>closed</em>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 3),
				1: _mask_group($scope0_owned, 4)
			});
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			badge_default({
				label: input.title,
				note: input.note
			});
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && writeScope($scope2_id, {}, "__tests__/template.marko", "6:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"]);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_title: input.title,
		input_note: input.note,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
