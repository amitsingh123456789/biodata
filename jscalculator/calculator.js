let display = document.getElementById('result');

        function append(value) {
            display.innerText += value;
        }

        function clear() {
            display.value = '';
        }

        function delete() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }