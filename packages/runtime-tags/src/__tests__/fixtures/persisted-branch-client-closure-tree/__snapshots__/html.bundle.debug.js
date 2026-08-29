// tags/note/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/note/index.marko": "__tests__/tags/note/index.marko;D ;<p> </p>" });
var note_default = _template_persisted("__tests__/tags/note/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", "n:" + input.text, void 0, $scope0_owned, 0)}</p>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/note/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "#text/0", "d:" + input.title)}</span>`);
					_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			note_default({ text: input.title });
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		show,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [note_default]);
