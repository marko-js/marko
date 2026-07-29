// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_posts = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul class=posts>");
	_for_of(input.posts, (post) => {
		const $scope1_id = _scope_id();
		let faved = false;
		_html(`<li class=post><span class=tag>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", post.tag, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_posts | _persisted_reason())}</span>`);
		_if(() => post.flair ? 0 : undefined, $scope1_id, "#text/1", $sg__input_posts | _persisted_reason(), $sg__input_posts | _persisted_reason(), $sg__input_posts | _persisted_reason(), 0, 1, "__tests__/template.marko_1/update_if_#text/1", [() => {
			const $scope2_id = _scope_id();
			_html(`<span class=flair>${_escape(post.flair)}${_el_resume($scope2_id, "#text/0", $sg__input_posts | _persisted_reason())}</span>`);
			$sg__input_posts | _persisted_reason() && writeScope($scope2_id, { _: $sg__input_posts && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8");
		}], [0], "__tests__/template.marko_r0");
		_html(`<span class=body>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", post.body, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", $sg__input_posts | _persisted_reason())}</span><button class=fave>${_escape(_hole_value($scope1_id, "PatchHole:#text/4", faved ? "faved" : "fave", _state_reason()))}${_el_resume($scope1_id, "#text/4")}</button>${_el_resume($scope1_id, "#button/3")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			post_flair: (_serialize_if($scope0_reason, 0) || _patch_reason()) && post?.flair,
			faved: _seed_fill(_state_reason() && faved)
		}, "__tests__/template.marko", "2:4", {
			post_flair: ["post.flair", "2:8"],
			faved: "3:10"
		});
	}, function(post) {
		return post.id;
	}, $scope0_id, "#ul/0", $sg__input_posts, $sg__input_posts, $sg__input_posts, "</ul>", 1, "__tests__/template.marko_1_update");
	$sg__input_posts && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>", "E l%bD l D m"],
	"__tests__/template.marko_1_content": ["<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>", "E l%bD l D m"],
	"__tests__/template.marko_0_update": ["<ul class=posts></ul>", " b"],
	"__tests__/template.marko": ["<ul class=posts></ul>", " b"]
});
