// tags/recurse.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_level = _write_guard($scope0_reason, 0), $wi__input_level = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_level__closures = new Set();
	_if(() => {
		if (input.level) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr("data-level", input.level)}>`);
			_try($scope1_id, "#text/1", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", resolveAfter(0), () => {
					const $scope3_id = _scope_id();
					_set_scope_reason($wg__input_level << 1);
					const $childScope = _peek_scope_id();
					$content({ level: input.level - 1 });
					$wi__input_level && _subscribe($input_level__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/tags/recurse.marko", "7:7"), "__tests__/tags/recurse.marko_3_input_level#0:3/subscribe", $wg__input_level);
					$wg__input_level || $wi__input_level && _resume_branch($scope3_id);
				}, $wg__input_level);
				$wi__input_level && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/recurse.marko", "5:5");
			}, () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("LOADING...");
			}, void 0, "__tests__/tags/recurse.marko_4*content");
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_level)}`);
			$wi__input_level && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/recurse.marko", "3:1");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_level, $wg__input_level, $wg__input_level, 0, 1);
	$wi__input_level && _scope($scope0_id, { "ClosureScopes:input_level/4": $input_level__closures }, "__tests__/tags/recurse.marko", 0);
};
var recurse_default = _template("__tests__/tags/recurse.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	recurse_default({ level: 4 });
}, 1);
