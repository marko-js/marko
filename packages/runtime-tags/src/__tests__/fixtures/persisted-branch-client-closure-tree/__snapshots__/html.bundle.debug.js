// tags/note/index.marko
var note_default = _template_persisted("__tests__/tags/note/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", "n:" + input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</p>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/note/index.marko", 0);
}, 0, 0);

// template.marko
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
					_html(`<span>${_escape("d:" + input.title)}${_el_resume($scope2_id, "#text/0")}</span>`);
					_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "4:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			note_default({ text: input.title });
			writeScope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		show,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [note_default]);
