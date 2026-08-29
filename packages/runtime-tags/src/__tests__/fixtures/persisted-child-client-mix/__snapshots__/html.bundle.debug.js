// tags/label/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/label/index.marko": "__tests__/tags/label/index.marko;D ;<em> </em>" });
var label_default = _template_persisted("__tests__/tags/label/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.text, void 0, $scope0_owned, 0)}</em>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/label/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button><button class=t>t</button></main>";
const $walks = "D%b b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b b ;<main><!><button>+</button><button class=t>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			label_default({ text: count + input.suffix });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_suffix: input.suffix,
		count,
		show
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6",
		show: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.suffix);
	_resume_branch($scope0_id);
}, 1, () => [label_default]);
