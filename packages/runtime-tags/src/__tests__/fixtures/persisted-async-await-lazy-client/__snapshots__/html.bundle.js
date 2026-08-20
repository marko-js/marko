// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,loading",
	a2: "a2;b%;<!><!><!>",
	a: "a !a3;E l%b ;<main><h1> </h1><!><button>Next</button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_try($scope0_id, "b", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", resolveAfter("v0", n), (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_escape(value)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		}, void 0, 0);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("a1", $scope0_id) }) });
	_html(`<button>Next</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason && writeScope($scope0_id, {
		g: n,
		h: $n__closures
	});
	_resume_branch($scope0_id);
}, 1, 0);
