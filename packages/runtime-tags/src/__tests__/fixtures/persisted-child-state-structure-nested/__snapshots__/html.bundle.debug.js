// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko !;b%;<!><!><!>",
	"__tests__/tags/panel/index.marko_1*shell": "__tests__/tags/panel/index.marko_1*shell; ;<section></section>",
	"__tests__/tags/panel/index.marko_2*shell": "__tests__/tags/panel/index.marko_2*shell;D ;<em> </em>"
});
var panel_default = _template_persisted("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "#text/0", input.title, void 0, $scope0_owned, 4)}</em>`);
					_subscribe(_source_if($scope0_reason, 4) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel/index.marko", "3:6"));
					return 0;
				}
			}, $scope1_id, "#section/0", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["__tests__/tags/panel/index.marko_2*shell"], $scope0_owned, 3);
			_html(`</section>${_el_resume($scope1_id, "#section/0", $sg__input_inner)}`);
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/panel/index.marko_1*shell"], $scope0_owned, 2);
	$scope0_reason ? _scope($scope0_id, {
		input_inner: input.inner,
		input_title: input.title,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/tags/panel/index.marko", 0, {
		input_inner: ["input.inner"],
		input_title: ["input.title"]
	}) : (_owned_guard($scope0_owned, 3) && _client_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/tags/panel/index.marko0", input.inner), _owned_guard($scope0_owned, 4) && (_client_guard($scope0_owned, 3) || _client_guard($scope0_owned, 2)) && _patch_value($scope0_id, "__tests__/tags/panel/index.marko1", input.title));
}, 0, 0);

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
		0: 3,
		1: 3,
		2: 1,
		3: _mask_group($scope0_owned, 0),
		4: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	panel_default({
		show: count % 2 === 0,
		inner: input.inner,
		title: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" }) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.inner), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.title));
	_resume_branch($scope0_id);
}, 1, () => [panel_default]);
