// tags/l1/tags/l2/tags/l3/index.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
var l3_default = _template_persisted("__tests__/tags/l1/tags/l2/tags/l3/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.note, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/l1/tags/l2/tags/l3/index.marko", 0);
}, 0, 0);

// tags/l1/tags/l2/index.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
var l2_default = _template_persisted("__tests__/tags/l1/tags/l2/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	l3_default({ note: input.note });
	_script($scope0_id, "__tests__/tags/l1/tags/l2/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/l1/tags/l2/index.marko0", n, 1);
	$scope0_reason && writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/l1/tags/l2/index.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 0, () => [l3_default]);

// tags/l1/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
var l1_default = _template_persisted("__tests__/tags/l1/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	l2_default({ note: input.note });
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/l1/index.marko", 0);
}, 0, () => [l2_default]);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			l1_default({ note: input.note });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		show
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
	_resume_branch($scope0_id);
}, 1, () => [l1_default]);
