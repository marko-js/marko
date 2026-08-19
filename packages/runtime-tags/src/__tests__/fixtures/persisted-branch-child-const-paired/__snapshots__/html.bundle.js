// tags/card/index.marko
const $template = "<section><h2> </h2></section>";
const $walks = "D D m";
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2${_patch_attr_class($scope0_id, "a", input.title, $scope0_owned, 0)}>${_patch_text($scope0_id, "b", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "b")}</h2>${_el_resume($scope0_id, "a")}</section>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks), /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({ title: "root" });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope2);
			card_default({ title: "branch" });
			_html(`<p>${_patch_text($scope1_id, "b", input.note, $scope0_owned, 2)}${_el_resume($scope1_id, "b")}</p>`);
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		f: input.note,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
