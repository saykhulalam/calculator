let currentOutput = "0";

        function updateOutput() {
            document.getElementById("output").innerText = currentOutput;
        }

        function appendNumber(number) {
            if (currentOutput === "0") {
                currentOutput = "";
            }
            currentOutput += number;
            updateOutput();
        }

        function appendOperator(operator) {
            if (!isNaN(currentOutput[currentOutput.length - 1])) {
                currentOutput += operator;
            }
            updateOutput();
        }

        function appendDecimal() {
            if (!currentOutput.includes('.')) {
                currentOutput += '.';
                updateOutput();
            }
        }

        function clearOutput() {
            currentOutput = "0";
            updateOutput();
        }

        function calculate() {
            try {
                currentOutput = eval(currentOutput);
            } catch (error) {
                currentOutput = "Error";
            }
            updateOutput();
        }