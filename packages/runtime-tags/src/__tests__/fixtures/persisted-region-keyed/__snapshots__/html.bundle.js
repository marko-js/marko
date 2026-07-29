// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let opens = 0;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<article class=item><button class=open>${_escape(_hole_value($scope1_id, "Qb", item.title, _persisted_reason()))}${_el_resume($scope1_id, "b", $sg__input_items | _persisted_reason())}</button>${_el_resume($scope1_id, "a")}`);
		_if(() => item.badge ? 0 : void 0, $scope1_id, "c", $sg__input_items | _persisted_reason(), $sg__input_items | _persisted_reason(), $sg__input_items | _persisted_reason(), 0, 1, "a0", [() => {
			const $scope2_id = _scope_id();
			_html(`<span class=badge>${_escape(item.badge)}${_el_resume($scope2_id, "a", $sg__input_items | _persisted_reason())}</span>`);
			$sg__input_items | _persisted_reason() && writeScope($scope2_id, { _: $sg__input_items && _scope_with_id($scope1_id) });
		}], [0], "a2");
		_html("</article>");
		_script($scope1_id, "a3");
		writeScope($scope1_id, {
			g: (_serialize_if($scope0_reason, 0) || _patch_reason()) && item?.badge,
			_: _scope_with_id($scope0_id)
		});
	}, function(item) {
		return item.id;
	}, $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1, "a4");
	_html(`<p class=opens>${_escape(opens)}${_el_resume($scope0_id, "b")} opened</p>`);
	writeScope($scope0_id, { f: _seed_fill(_state_reason() && opens) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<article class=item><button class=open> </button><!></article>", "D D l%l"],
	"a5": ["<article class=item><button class=open> </button><!></article>", "D D l%l"],
	"a1": ["<!><!><p class=opens><!> opened</p>", "b%bD%l"],
	"a": ["<!><!><p class=opens><!> opened</p>", "b%bD%l"]
});
