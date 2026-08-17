// tags/badge/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({ "__tests__/tags/badge/index.marko_1*shell": "__tests__/tags/badge/index.marko_1*shell;D ;<i> </i>" });
var badge_default = _template_persisted("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_label = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<i>${_patch_text($scope1_id, "#text/0", input.note, $scope0_owned, 2)}${_el_resume($scope1_id, "#text/0")}</i>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/badge/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $sg__input_label, $sg__input_label, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"]);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_label)}`);
	$scope0_reason && writeScope($scope0_id, { input_note: input.note }, "__tests__/tags/badge/index.marko", 0, { input_note: ["input.note"] });
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)(" b");
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	badge_default({
		label: "hi",
		note: input.title
	});
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
