<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Puntaje de Examen</title>
    <style>
        /* Agrega estilos CSS aquí para dar formato a la calculadora */
    </style>
</head>
<body>
    <div class="calculator">
        <h2>Calculadora de Puntaje de Examen</h2>
        <label for="correctValue">Valor de Respuestas Correctas:</label>
        <input type="number" id="correctValue" placeholder="Ingrese el valor">
        <label for="correctCount">Cantidad de Respuestas Correctas:</label>
        <input type="number" id="correctCount" placeholder="Ingrese la cantidad">
        <label for="incorrectValue">Valor de Respuestas Incorrectas:</label>
        <input type="number" id="incorrectValue" placeholder="Ingrese el valor">
        <label for="incorrectCount">Cantidad de Respuestas Incorrectas:</label>
        <input type="number" id="incorrectCount" placeholder="Ingrese la cantidad">
        <button onclick="calculateScore()">Calcular Puntaje</button>
        <br>
        <h3>Resultado:</h3>
        <p>Puntaje de Respuestas Correctas: <span id="scoreCorrect"></span></p>
        <p>Puntaje de Respuestas Incorrectas: <span id="scoreIncorrect"></span></p>
    </div>

    <script>
        function calculateScore() {
            // Obtenemos los valores de los campos
            const correctValue = parseFloat(document.getElementById('correctValue').value);
            const correctCount = parseInt(document.getElementById('correctCount').value);
            const incorrectValue = parseFloat(document.getElementById('incorrectValue').value);
            const incorrectCount = parseInt(document.getElementById('incorrectCount').value);

            // Calculamos los puntajes
            const scoreCorrect = correctValue * correctCount;
            const scoreIncorrect = incorrectValue * incorrectCount;

            // Mostramos los resultados en la pantalla
            document.getElementById('scoreCorrect').textContent = scoreCorrect;
            document.getElementById('scoreIncorrect').textContent = scoreIncorrect;
        }
    </script>
</body>
</html>
