// a.marko
_shells({ a: "a,<h1>A</h1>" });
var a_default = _template_patch("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
}, 0, 0);

// b.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1,Loading",
	b2: "b2;D ;<p> </p>",
	b3: "b3;b%;<!><!><!>",
	b: "b !b4; b%;<button>go</button><!><!>"
});
var b_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("b3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope3_id, {});
		}, 1, "b2", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("b1", $scope0_id) }) }, 1);
	_script($scope0_id, "b4");
	$scope0_page && _scope($scope0_id, { f: $input_promise__closures });
}, 0, 0);

// template.marko
_shells({ c: "c;D%;<main><!></main>" });
var template_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_page__OR__input_promise = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.page === "b" ? b_default : a_default;
	const $input2 = { promise: input.promise };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $sg__input_page__OR__input_promise, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.page,
		e: _source_if($scope0_reason, 1) && input.promise
	});
}, 1, 1);
