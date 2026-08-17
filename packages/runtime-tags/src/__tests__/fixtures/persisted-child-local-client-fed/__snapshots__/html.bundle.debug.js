// tags/child.marko
const $template$1 = "<div><!><button id=c>c</button></div>";
const $walks$1 = "D%b l";
_shells({ "__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell __tests__/tags/child.marko_1_c#6/init;D ;<p> </p>" });
var child_default = _template_persisted("__tests__/tags/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const l = input.label + "!";
			_owned_guard($scope0_owned, 1) ? _patch_value($scope1_id, "__tests__/tags/child.marko1", l) : _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_label#5/init");
			_html(`<p>${_escape(l + "#" + c)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {
				l,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "3:4", { l: "4:12" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/child.marko_1*shell"]);
	_html(`<button id=c>c</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_value($scope0_id, "__tests__/tags/child.marko0", c, 1);
	$scope0_reason && writeScope($scope0_id, {
		input_label: input.label,
		c
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		c: "1:6"
	});
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 1
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({
		show: input.show,
		label: n ? "X" : "Y"
	});
	_html(`<button id=p>p</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [child_default]);
