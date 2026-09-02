// tags/box.marko
const $template$1 = "<div class=box> </div>";
const $walks$1 = " D l";
_shells({ "__tests__/tags/box.marko": "__tests__/tags/box.marko; D ;<div class=box> </div>" });
var box_default = _template_persisted("__tests__/tags/box.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const root = _el($scope0_id, "__tests__/tags/box.marko_0_#div#0");
	_html(`<div class=box>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_owned, 0)}</div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = root;
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/box.marko", 0);
	return $return;
}, 0, 0);

// template.marko
const $template = "<main><!><button id=c> </button></main>";
const $walks = "D%b D m";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button id=c> </button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			let el = box_default({ label: input.label });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_el#3/var");
			_html(`<button id=read>read</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				el,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4", { el: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, [0], $scope0_owned, 1);
	_html(`<button id=c>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [box_default]);
