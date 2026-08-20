// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D ;<em> </em>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.fn("x"), $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const [fmt] = [_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmt", $scope0_id)];
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		fmt,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		fmt: "1:9",
		show: "2:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", fmt), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
