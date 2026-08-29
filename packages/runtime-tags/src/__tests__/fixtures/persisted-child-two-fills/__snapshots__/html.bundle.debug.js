// tags/card/index.marko
const $template$1 = "<h3> </h3><p> </p>";
const $walks$1 = "D lD l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D lD ;<h3> </h3><p> </p>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h3><p>${_patch_text($scope0_id, "#text/1", input.body, void 0, $scope0_owned, 1)}</p>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({
				title: input.title,
				body: input.body
			});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		input_body: input.body,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_body: ["input.body"],
		show: "1:6"
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.title), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko1", input.body));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
