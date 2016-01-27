(function (ng, crip) {
    'use strict';

    crip.input
        .directive('cripInput', cripInput);

    cripInput.$inject = ['$timeout'];

    function cripInput($timeout) {
        return {
            restrict: 'EA',
            scope: {
                settings: '=',
                cripInput: '='
            },
            replace: false,
            transclude: false,
            link: link
        };

        function link(scope, element, attrs, ctrls) {
            var settings = ng.extend({
                labelVisible: true
            }, scope.settings);

            element.addClass('crip');

            var formControl = element.find('.form-control'),
                controlLabel = element.find('.control-label');

            scope.$watch('cripInput', checkVal);

            $timeout(function () {
                // in case of autocomplete check model value with input value
                // if they are different, update model value
                if (scope.cripInput !== formControl.val())
                    scope.cripInput = formControl.val();

                // we cant find out password value, so this type inputs
                // cant be detectet on autocomplete.
                if (formControl.attr('type') === 'password')
                    checkVal(true);
            }, 10);

            formControl
                .on('focus', focusElement)
                .on('blur', blurElement);

            function focusElement() {
                element.addClass('focused');
                controlLabel.removeClass('hidden');
            }

            function blurElement() {
                element.removeClass('focused');

                if (!checkVal() && settings.labelVisible)
                    element.removeClass('has-content');
            }

            function checkVal(force) {
                var hasValue = !isEmpty(scope.cripInput);
                if (hasValue || force) {
                    controlLabel.addClass('hidden');

                    if (settings.labelVisible)
                        element.addClass('has-content');
                }
                return hasValue || force;
            }

            function isEmpty(value) {
                return ng.isUndefined(value) || value === '' || value === null || value !== value;
            }
        }
    }
})(angular, window.crip || (window.crip = {}));