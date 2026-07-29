// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 2), $sg__input_tags = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let showDetails = true;
	let clicks = 0;
	_html(`<h1 class=title>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1><button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}<button class=count>clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<ul class=items>`);
	_region(() => {
		forOf(input.items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<li class=item>${_escape(item.label)}${_el_resume($scope2_id, "a", $sg__input_items)}</li>`);
			$sg__input_items && writeScope($scope2_id, {});
		});
	}, $scope0_id, "e", "a1");
	_html(`</ul>${_el_resume($scope0_id, "e", $sg__input_items)}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<section class=details><p class=note>${_escape(input.note)}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 3))}</p><ol class=tags>`);
			_for_of(input.tags, (tag) => {
				const $scope3_id = _scope_id();
				_html(`<li class=tag>${_escape(tag)}${_el_resume($scope3_id, "a", $sg__input_tags)}</li>`);
				$sg__input_tags && writeScope($scope3_id, {});
			}, 0, $scope1_id, "b", $sg__input_tags, $sg__input_tags, $sg__input_tags, "</ol>", 1);
			_html("</section>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "f", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		k: input.note,
		l: input.tags,
		m: _seed_fill(_state_reason() && showDetails),
		n: _seed_fill(_state_reason() && clicks)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>", "D l b Db%l b%c"],
	"a": ["<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>", "D l b Db%l b%c"]
});
