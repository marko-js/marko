// tags/note/index.marko
_shells({ b: "b;D ;<p> </p>" });
var note_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", "n:" + input.text, void 0, $scope0_owned, 0)}</p>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: show,
		g: $input_title__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [note_default]);
