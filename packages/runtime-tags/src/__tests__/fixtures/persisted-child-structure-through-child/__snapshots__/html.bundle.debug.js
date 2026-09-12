// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
_shells({
	"__tests__/tags/leaf.marko": "__tests__/tags/leaf.marko !;b%;<!><!><!>",
	"__tests__/tags/leaf.marko_1*shell": "__tests__/tags/leaf.marko_1*shell;D ;<em> </em>"
});
var leaf_default = _template_persisted("__tests__/tags/leaf.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_flag = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.flag) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_owned, 2)}</em>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/leaf.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_flag, $sg__input_flag, void 0, void 0, ["__tests__/tags/leaf.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { input_label: input.label }, "__tests__/tags/leaf.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/leaf.marko0", input.label);
}, 0, 0);

// tags/mid.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/mid.marko": "__tests__/tags/mid.marko !;b%;<!><!><!>",
	"__tests__/tags/mid.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/mid.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2))
});
var mid_default = _template_persisted("__tests__/tags/mid.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 0),
				1: _mask_group($scope0_owned, 3),
				2: _mask_group($scope0_owned, 4)
			});
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			leaf_default({
				flag: input.flag,
				label: input.label
			});
			_html("</section>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/mid.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/mid.marko_1*shell"], $scope0_owned, 2);
	$scope0_reason ? _scope($scope0_id, {
		input_flag: input.flag,
		input_label: input.label
	}, "__tests__/tags/mid.marko", 0, {
		input_flag: ["input.flag"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_owned, 3) && _client_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/tags/mid.marko0", input.flag), _filled_guard($scope0_owned, 4) && _client_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/tags/mid.marko1", input.label));
}, 0, () => [leaf_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: 3,
		2: 1,
		3: _mask_group($scope0_owned, 1),
		4: _mask_group($scope0_owned, 2)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	mid_default({
		show: count % 2 === 0,
		flag: input.flag,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" }) : _filled_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [mid_default]);
