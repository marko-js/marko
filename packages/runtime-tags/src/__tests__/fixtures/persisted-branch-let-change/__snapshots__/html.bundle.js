// template.marko
_shells({ a1: ",`a1 a2;Db%l ;<p>Seen <!></p><button>+</button>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<p>Seen <!>${_escape(count)}${_el_resume($scope1_id, "a")}</p><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			_patch_bind($scope1_id, "d", _resume(function(next) {
				document.querySelector("main").dataset.attempt = String(next);
			}, "a0") || void 0);
			writeScope($scope1_id, {
				c: count,
				d: _resume(function(next) {
					document.querySelector("main").dataset.attempt = String(next);
				}, "a0") || void 0
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
