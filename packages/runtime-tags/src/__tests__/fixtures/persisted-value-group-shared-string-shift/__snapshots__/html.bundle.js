// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_posts = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul class=posts>");
	_for_of(input.posts, (post) => {
		const $scope1_id = _scope_id();
		let faved = false;
		_html(`<li class=post><span class=tag>${_escape(_hole_value($scope1_id, "Qa", post.tag, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_posts | _persisted_reason())}</span>`);
		_if(() => post.flair ? 0 : void 0, $scope1_id, "b", $sg__input_posts | _persisted_reason(), $sg__input_posts | _persisted_reason(), $sg__input_posts | _persisted_reason(), 0, 1, "a0", [() => {
			const $scope2_id = _scope_id();
			_html(`<span class=flair>${_escape(post.flair)}${_el_resume($scope2_id, "a", $sg__input_posts | _persisted_reason())}</span>`);
			$sg__input_posts | _persisted_reason() && writeScope($scope2_id, { _: $sg__input_posts && _scope_with_id($scope1_id) });
		}], [0], "a2");
		_html(`<span class=body>${_escape(_hole_value($scope1_id, "Qc", post.body, _persisted_reason()))}${_el_resume($scope1_id, "c", $sg__input_posts | _persisted_reason())}</span><button class=fave>${_escape(_hole_value($scope1_id, "Qe", "fave", _state_reason()))}${_el_resume($scope1_id, "e")}</button>${_el_resume($scope1_id, "d")}</li>`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, {
			i: (_serialize_if($scope0_reason, 0) || _patch_reason()) && post?.flair,
			k: _seed_fill(_state_reason() && faved)
		});
	}, function(post) {
		return post.id;
	}, $scope0_id, "a", $sg__input_posts, $sg__input_posts, $sg__input_posts, "</ul>", 1, "a4");
	$sg__input_posts && writeScope($scope0_id, {});
}, 1);
_renderer_shells({
	"a4": ["<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>", "E l%bD l D m"],
	"a5": ["<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>", "E l%bD l D m"],
	"a1": ["<ul class=posts></ul>", " b"],
	"a": ["<ul class=posts></ul>", " b"]
});
