// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = _resume("b2", /*@__PURE__*/ _load_ready("_a", 1, /*@__PURE__*/ _load_setup(0, 1, /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")))));

// child.marko
const $template = "<button>go</button>";
const $setup = () => {};
const $input_title__OR__handler__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $handler = ($scope) => (event) => event.target.dataset.seen = $scope.d;
_resume("a0", $handler);

// v:child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
