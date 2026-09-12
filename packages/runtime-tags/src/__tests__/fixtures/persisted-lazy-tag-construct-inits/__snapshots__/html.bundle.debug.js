// child.marko
const $template$1 = "<button>+</button><!><!>";
const $walks$1 = " b%c";
_shells({
	"__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; b%;<button>+</button><!><!>",
	"__tests__/child.marko_1*shell": "__tests__/child.marko_1*shell __tests__/child.marko_1_count#5/init;D%c%;<span><!>:<!></span>"
});
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_patch_value($scope1_id, "__tests__/child.marko1", i);
		_html(`<span>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope1_id, "#text/1", count + i, 2)}</span>`);
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/child.marko", "3:2", { i: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, 1, 0, void 0, void 0, "__tests__/child.marko_1*shell", 0, 0);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko0", count, 1);
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<button class=n> </button><main></main><p> </p>";
const $walks = " D l bD l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l bD ;<button class=n> </button><main></main><p> </p>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $sg__input_show)}<p>${_patch_text($scope0_id, "#text/3", input.label, void 0, $scope0_owned, 2)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_label: _source_if($scope0_reason, 1) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "3:6"
	});
}, 1, () => [$Child_withLoadAssets]);
