(function (ng, crip) {
    'use strict';

    crip.input = ng.module('crip.input', []);
})(angular, window.crip || (window.crip = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIuanMiLCJkaXJlY3RpdmUuYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjcmlwLWlucHV0LmFuZ3VsYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG5nLCBjcmlwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY3JpcC5pbnB1dCA9IG5nLm1vZHVsZSgnY3JpcC5pbnB1dCcsIFtdKTtcbn0pKGFuZ3VsYXIsIHdpbmRvdy5jcmlwIHx8ICh3aW5kb3cuY3JpcCA9IHt9KSk7IiwiKGZ1bmN0aW9uIChuZywgY3JpcCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGNyaXAuaW5wdXRcbiAgICAgICAgLmRpcmVjdGl2ZSgnY3JpcElucHV0JywgY3JpcElucHV0KTtcblxuICAgIGNyaXBJbnB1dC4kaW5qZWN0ID0gWyckdGltZW91dCddO1xuXG4gICAgZnVuY3Rpb24gY3JpcElucHV0KCR0aW1lb3V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6ICc9JyxcbiAgICAgICAgICAgICAgICBjcmlwSW5wdXQ6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogZmFsc2UsXG4gICAgICAgICAgICBsaW5rOiBsaW5rXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBuZy5leHRlbmQoe1xuICAgICAgICAgICAgICAgIGxhYmVsVmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSwgc2NvcGUuc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdjcmlwJyk7XG5cbiAgICAgICAgICAgIHZhciBmb3JtQ29udHJvbCA9IGVsZW1lbnQuZmluZCgnLmZvcm0tY29udHJvbCcpLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xMYWJlbCA9IGVsZW1lbnQuZmluZCgnLmNvbnRyb2wtbGFiZWwnKTtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdjcmlwSW5wdXQnLCBjaGVja1ZhbCk7XG5cbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIG9mIGF1dG9jb21wbGV0ZSBjaGVjayBtb2RlbCB2YWx1ZSB3aXRoIGlucHV0IHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50LCB1cGRhdGUgbW9kZWwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuY3JpcElucHV0ICE9PSBmb3JtQ29udHJvbC52YWwoKSlcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY3JpcElucHV0ID0gZm9ybUNvbnRyb2wudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW50IGZpbmQgb3V0IHBhc3N3b3JkIHZhbHVlLCBzbyB0aGlzIHR5cGUgaW5wdXRzXG4gICAgICAgICAgICAgICAgLy8gY2FudCBiZSBkZXRlY3RldCBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1Db250cm9sLmF0dHIoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJylcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWwodHJ1ZSk7XG4gICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgIGZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1cycsIGZvY3VzRWxlbWVudClcbiAgICAgICAgICAgICAgICAub24oJ2JsdXInLCBibHVyRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvY3VzRWxlbWVudCgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdmb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgY29udHJvbExhYmVsLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gYmx1ckVsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja1ZhbCgpICYmIHNldHRpbmdzLmxhYmVsVmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGFzLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tWYWwoZm9yY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzVmFsdWUgPSAhaXNFbXB0eShzY29wZS5jcmlwSW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNWYWx1ZSB8fCBmb3JjZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sTGFiZWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5sYWJlbFZpc2libGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdoYXMtY29udGVudCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzVmFsdWUgfHwgZm9yY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmcuaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KShhbmd1bGFyLCB3aW5kb3cuY3JpcCB8fCAod2luZG93LmNyaXAgPSB7fSkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
