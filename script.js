document.addEventListener("DOMContentLoaded", () => {
  // --- COMIENZO DE LA ZONA DE CONFIGURACIÓN ---
  // Pega tus claves de EmailJS aquí
  const EMAILJS_SERVICE_ID = "service_6yn0lqe"; // Reemplazado con tu Service ID
  const EMAILJS_TEMPLATE_ID = "template_d3bdnx4"; // Reemplazado con tu Template ID
  const EMAILJS_PUBLIC_KEY = "DBEJGOx8i0f087iB6"; // Reemplazado con tu Public Key
  // --- FIN DE LA ZONA DE CONFIGURACIÓN ---

  const examData = [
    // SECCIÓN I
    {
      id: 1,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Si x + 5 = 12, entonces x =",
      options: { a: "5", b: "7", c: "17", d: "12" },
      correct: "b",
      explanation: "x = 12 - 5",
    },
    {
      id: 2,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "¿Cuál es el valor de y cuando 3y - 6 = 15?",
      options: { a: "3", b: "5", c: "7", d: "9" },
      correct: "c",
      explanation: "3y = 21, y = 7",
    },
    {
      id: 3,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Si 2x + 3 = 11, entonces 4x + 6 =",
      options: { a: "16", b: "22", c: "24", d: "28" },
      correct: "b",
      explanation:
        "Si 2x + 3 = 11, entonces 2(2x+3) = 2(11), lo que da 4x + 6 = 22",
    },
    {
      id: 4,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Resuelve el sistema: x + y = 8, x - y = 2",
      options: {
        a: "x = 5, y = 3",
        b: "x = 3, y = 5",
        c: "x = 4, y = 4",
        d: "x = 6, y = 2",
      },
      correct: "a",
      explanation: "Sumando las dos ecuaciones se obtiene 2x = 10",
    },
    {
      id: 5,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Si f(x) = 2x + 1, entonces f(3) =",
      options: { a: "5", b: "6", c: "7", d: "8" },
      correct: "c",
      explanation: "f(3) = 2(3) + 1 = 7",
    },
    {
      id: 6,
      section: "I",
      category: "A. ÁLGEBRA",
      question:
        "¿Cuál es la pendiente de la línea que pasa por (2, 3) y (4, 7)?",
      options: { a: "1", b: "2", c: "3", d: "4" },
      correct: "b",
      explanation: "Pendiente = (7-3)/(4-2) = 4/2 = 2",
    },
    {
      id: 7,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Si 3x - 2y = 12 y x = 2, entonces y =",
      options: { a: "-3", b: "-1", c: "1", d: "3" },
      correct: "a",
      explanation: "3(2) - 2y = 12, entonces 6 - 2y = 12, y = -3",
    },
    {
      id: 8,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Resuelve: 2(x + 3) = 3x - 1",
      options: { a: "x = 5", b: "x = 7", c: "x = 9", d: "x = 11" },
      correct: "b",
      explanation: "2x + 6 = 3x - 1, entonces 7 = x",
    },
    {
      id: 9,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Si |x - 3| = 5, entonces x puede ser:",
      options: { a: "Solo 8", b: "Solo -2", c: "8 o -2", d: "3 o 5" },
      correct: "c",
      explanation: "x - 3 = 5 da x = 8; x - 3 = -5 da x = -2",
    },
    {
      id: 10,
      section: "I",
      category: "A. ÁLGEBRA",
      question: "Resuelve la inequidad: 2x + 1 < 7",
      options: { a: "x < 2", b: "x < 3", c: "x < 4", d: "x < 5" },
      correct: "b",
      explanation: "2x < 6, entonces x < 3",
    },
    {
      id: 11,
      section: "I",
      category: "A. ÁLGEBRA",
      question:
        "Si el sistema 2x + 3y = 12 y 4x + 6y = 24, entonces el sistema:",
      options: {
        a: "Tiene una solución única",
        b: "No tiene solución",
        c: "Tiene infinitas soluciones",
        d: "Es inconsistente",
      },
      correct: "c",
      explanation:
        "La segunda ecuación es un múltiplo de la primera, lo que significa que son la misma recta",
    },
    {
      id: 12,
      section: "I",
      category: "A. ÁLGEBRA",
      question:
        "Para qué valor de k la ecuación kx + 2 = 3x + 5 no tiene solución?",
      options: { a: "k = 0", b: "k = 2", c: "k = 3", d: "k = 5" },
      correct: "c",
      explanation:
        "Para que no haya solución, los coeficientes de x deben ser iguales, k = 3, lo que resulta en 2 = 5, una contradicción",
    },
    {
      id: 13,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Si f(x) = x², entonces f(-3) =",
      options: { a: "-9", b: "-3", c: "3", d: "9" },
      correct: "d",
      explanation: "f(-3) = (-3)² = 9",
    },
    {
      id: 14,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "¿Cuál es el vértice de la parábola y = x² - 4x + 3?",
      options: { a: "(2, -1)", b: "(2, 1)", c: "(-2, -1)", d: "(-2, 1)" },
      correct: "a",
      explanation:
        "El vértice x se encuentra en -b/2a = -(-4)/2(1) = 2. Sustituyendo x=2 da y = -1",
    },
    {
      id: 15,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Simplifica: (2x³)(3x²)",
      options: { a: "5x⁵", b: "6x⁵", c: "6x⁶", d: "8x⁶" },
      correct: "b",
      explanation: "(2*3)(x³x²) = 6x^(3+2) = 6x⁵",
    },
    {
      id: 16,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Si 2ˣ = 16, entonces x =",
      options: { a: "2", b: "3", c: "4", d: "8" },
      correct: "c",
      explanation: "2⁴ = 16",
    },
    {
      id: 17,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Factoriza: x² - 9",
      options: {
        a: "(x - 3)(x + 3)",
        b: "(x - 9)(x + 1)",
        c: "(x - 3)²",
        d: "No se puede factorizar",
      },
      correct: "a",
      explanation: "Diferencia de cuadrados",
    },
    {
      id: 18,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Resuelve: x² - 5x + 6 = 0",
      options: {
        a: "x = 2, x = 3",
        b: "x = 1, x = 6",
        c: "x = -2, x = -3",
        d: "x = 2, x = -3",
      },
      correct: "a",
      explanation: "(x - 2)(x - 3) = 0",
    },
    {
      id: 19,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Simplifica: √(16x⁴)",
      options: { a: "4x²", b: "8x²", c: "4x⁴", d: "16x²" },
      correct: "a",
      explanation: "√16 = 4 y √x⁴ = x²",
    },
    {
      id: 20,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Si f(x) = 3ˣ y g(x) = 2x, entonces f(2) + g(3) =",
      options: { a: "13", b: "15", c: "17", d: "19" },
      correct: "b",
      explanation: "f(2) = 3² = 9; g(3) = 2(3) = 6. 9 + 6 = 15",
    },
    {
      id: 21,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "¿Cuál es el dominio de f(x) = 1/(x - 2)?",
      options: { a: "Todos los reales", b: "x ≠ 2", c: "x > 2", d: "x < 2" },
      correct: "b",
      explanation: "El denominador no puede ser cero",
    },
    {
      id: 22,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Resuelve: √(2x + 1) = 5",
      options: { a: "x = 12", b: "x = 13", c: "x = 24", d: "x = 25" },
      correct: "a",
      explanation: "Elevando al cuadrado ambos lados: 2x + 1 = 25",
    },
    {
      id: 23,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Si (x + 2)² = 25, entonces x =",
      options: { a: "3 o -7", b: "5 o -5", c: "7 o -3", d: "23 o -27" },
      correct: "a",
      explanation: "Tomando la raíz cuadrada: x + 2 = ±5",
    },
    {
      id: 24,
      section: "I",
      category: "B. MATEMÁTICAS AVANZADAS",
      question: "Simplifica: (x² - 4)/(x - 2)",
      options: { a: "x - 2", b: "x + 2", c: "x² - 2", d: "2x" },
      correct: "b",
      explanation: "Factorizando el numerador: (x-2)(x+2)/(x-2)",
    },
    {
      id: 25,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Si 3 de cada 5 estudiantes prefieren pizza, ¿qué porcentaje prefiere pizza?",
      options: { a: "30%", b: "50%", c: "60%", d: "80%" },
      correct: "c",
      explanation: "3/5 = 0.6",
    },
    {
      id: 26,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Un auto viaja 240 millas en 4 horas. ¿Cuál es su velocidad promedio?",
      options: { a: "50 mph", b: "60 mph", c: "70 mph", d: "80 mph" },
      correct: "b",
      explanation: "Velocidad = 240 millas / 4 horas",
    },
    {
      id: 27,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "Si x:y = 3:4 y x = 15, entonces y =",
      options: { a: "12", b: "18", c: "20", d: "24" },
      correct: "c",
      explanation: "15/y = 3/4, entonces 3y = 60",
    },
    {
      id: 28,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "¿Cuál es el 25% de 80?",
      options: { a: "15", b: "20", c: "25", d: "30" },
      correct: "b",
      explanation: "0.25 * 80 = 20",
    },
    {
      id: 29,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Si el precio de un artículo aumenta de $40 a $50, ¿cuál es el porcentaje de aumento?",
      options: { a: "20%", b: "25%", c: "30%", d: "35%" },
      correct: "b",
      explanation:
        "Aumento de $10 sobre el original de $40 es 10/40 = 1/4 = 25%",
    },
    {
      id: 30,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "La media de 4, 6, 8, 10, 12 es:",
      options: { a: "6", b: "7", c: "8", d: "9" },
      correct: "c",
      explanation: "Suma = 40; 40 / 5 = 8",
    },
    {
      id: 31,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "Si 1 pie = 12 pulgadas, ¿cuántas pulgadas hay en 2.5 pies?",
      options: { a: "24", b: "30", c: "36", d: "42" },
      correct: "b",
      explanation: "2.5 pies * 12 pulgadas/pie",
    },
    {
      id: 32,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Una caja contiene 3 pelotas rojas y 7 azules. ¿Cuál es la probabilidad de sacar una pelota roja?",
      options: { a: "0.3", b: "0.7", c: "0.4", d: "0.6" },
      correct: "a",
      explanation: "Probabilidad = 3 rojas / 10 pelotas totales",
    },
    {
      id: 33,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Si y es inversamente proporcional a x, y y = 6 cuando x = 2, entonces y cuando x = 3 es:",
      options: { a: "4", b: "6", c: "8", d: "9" },
      correct: "a",
      explanation: "xy = k. 2*6 = 12. Entonces y = 12/3 = 4",
    },
    {
      id: 34,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "El rango de los datos 5, 8, 12, 15, 20 es:",
      options: { a: "10", b: "12", c: "15", d: "20" },
      correct: "c",
      explanation: "Rango = 20 - 5",
    },
    {
      id: 35,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question:
        "Si una receta para 4 personas requiere 2 tazas de harina, ¿cuántas tazas se necesitan para 10 personas?",
      options: { a: "4", b: "5", c: "6", d: "8" },
      correct: "b",
      explanation: "Se necesita 0.5 tazas por persona. 0.5 * 10 = 5",
    },
    {
      id: 36,
      section: "I",
      category: "C. ANÁLISIS DE DATOS Y RESOLUCIÓN DE PROBLEMAS",
      question: "La mediana de 3, 7, 9, 12, 15 es:",
      options: { a: "7", b: "9", c: "12", d: "15" },
      correct: "b",
      explanation: "Es el número del medio en el conjunto de datos ordenado",
    },
    {
      id: 37,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "El área de un rectángulo con base 6 y altura 4 es:",
      options: { a: "10", b: "20", c: "24", d: "30" },
      correct: "c",
      explanation: "Área = 6 * 4",
    },
    {
      id: 38,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question:
        "¿Cuál es la circunferencia de un círculo con radio 3? (π ≈ 3.14)",
      options: { a: "6π", b: "9π", c: "12π", d: "18π" },
      correct: "a",
      explanation: "Circunferencia = 2πr = 2π(3)",
    },
    {
      id: 39,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question:
        "Si un triángulo tiene lados de 3, 4, y 5, ¿es un triángulo rectángulo?",
      options: {
        a: "Sí",
        b: "No",
        c: "No se puede determinar",
        d: "Depende del ángulo",
      },
      correct: "a",
      explanation: "Cumple el teorema de Pitágoras: 3² + 4² = 9 + 16 = 25 = 5²",
    },
    {
      id: 40,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "El volumen de un cubo con lado 4 es:",
      options: { a: "16", b: "32", c: "48", d: "64" },
      correct: "d",
      explanation: "Volumen = 4³",
    },
    {
      id: 41,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question:
        "En un triángulo rectángulo, si un ángulo es 30°, el otro ángulo agudo es:",
      options: { a: "30°", b: "45°", c: "60°", d: "90°" },
      correct: "c",
      explanation: "180° - 90° - 30° = 60°",
    },
    {
      id: 42,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "La distancia entre los puntos (1, 2) y (4, 6) es:",
      options: { a: "3", b: "4", c: "5", d: "6" },
      correct: "c",
      explanation:
        "Usando la fórmula de la distancia, √((4-1)² + (6-2)²) = √(3² + 4²) = √25",
    },
    {
      id: 43,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "Si sen(30°) = 1/2, entonces sen(30°) × 4 =",
      options: { a: "1", b: "2", c: "3", d: "4" },
      correct: "b",
      explanation: "(1/2) * 4",
    },
    {
      id: 44,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "El área de un triángulo con base 8 y altura 5 es:",
      options: { a: "13", b: "20", c: "40", d: "80" },
      correct: "b",
      explanation: "Área = (1/2) * 8 * 5",
    },
    {
      id: 45,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "¿Cuántos grados hay en un pentágono regular?",
      options: { a: "540°", b: "720°", c: "900°", d: "1080°" },
      correct: "a",
      explanation:
        "La suma de los ángulos internos es (n-2) * 180° = (5-2) * 180°",
    },
    {
      id: 46,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "Si cos(θ) = 3/5, entonces sen²(θ) + cos²(θ) =",
      options: { a: "9/25", b: "16/25", c: "1", d: "34/25" },
      correct: "c",
      explanation:
        "Esta es la identidad pitagórica fundamental: sen²(θ) + cos²(θ) = 1",
    },
    {
      id: 47,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question: "El área de un círculo con diámetro 10 es:",
      options: { a: "25π", b: "50π", c: "100π", d: "200π" },
      correct: "a",
      explanation: "Si el diámetro es 10, el radio es 5. Área = πr² = π(5)²",
    },
    {
      id: 48,
      section: "I",
      category: "D. GEOMETRÍA Y TRIGONOMETRÍA",
      question:
        "En el triángulo rectángulo con catetos 6 y 8, la hipotenusa es:",
      options: { a: "8", b: "10", c: "12", d: "14" },
      correct: "b",
      explanation:
        "Usando el teorema de Pitágoras: 6² + 8² = 36 + 64 = 100. √100 = 10",
    },
    // SECCIÓN II
    {
      id: 49,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "3/4 + 1/2 =",
      options: { a: "4/6", b: "5/4", c: "1/4", d: "2/3" },
      correct: "b",
      explanation: "3/4 + 2/4 = 5/4",
    },
    {
      id: 50,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "2/3 × 3/4 =",
      options: { a: "1/2", b: "5/12", c: "6/12", d: "5/7" },
      correct: "a",
      explanation: "6/12, que se simplifica a 1/2",
    },
    {
      id: 51,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "5/6 ÷ 2/3 =",
      options: { a: "10/18", b: "5/4", c: "4/5", d: "3/4" },
      correct: "b",
      explanation: "5/6 * 3/2 = 15/12, que se simplifica a 5/4",
    },
    {
      id: 52,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "¿Cuál es el 30% de 150?",
      options: { a: "30", b: "45", c: "50", d: "60" },
      correct: "b",
      explanation: "0.30 * 150 = 45",
    },
    {
      id: 53,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "Si 40% de un número es 20, ¿cuál es el número?",
      options: { a: "8", b: "30", c: "50", d: "80" },
      correct: "c",
      explanation: "0.40x = 20, entonces x = 20/0.4 = 50",
    },
    {
      id: 54,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "Usando la propiedad distributiva: 3(x + 4) =",
      options: { a: "3x + 4", b: "3x + 12", c: "x + 12", d: "3x + 7" },
      correct: "b",
      explanation: "Propiedad distributiva",
    },
    {
      id: 55,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "(-5) + 8 =",
      options: { a: "-13", b: "-3", c: "3", d: "13" },
      correct: "c",
      explanation: "Suma simple",
    },
    {
      id: 56,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "(-7) × (-3) =",
      options: { a: "-21", b: "-10", c: "10", d: "21" },
      correct: "d",
      explanation: "Multiplicación de negativos",
    },
    {
      id: 57,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "15 ÷ (-3) =",
      options: { a: "-5", b: "-12", c: "5", d: "12" },
      correct: "a",
      explanation: "División con negativo",
    },
    {
      id: 58,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "(-4) - (-9) =",
      options: { a: "-13", b: "-5", c: "5", d: "13" },
      correct: "c",
      explanation: "-4 + 9 = 5",
    },
    {
      id: 59,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "234 × 56 =",
      options: { a: "13,104", b: "13,004", c: "12,104", d: "12,004" },
      correct: "a",
      explanation: "Multiplicación directa",
    },
    {
      id: 60,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "127 × 43 =",
      options: { a: "5,361", b: "5,461", c: "5,261", d: "5,161" },
      correct: "b",
      explanation: "Multiplicación directa",
    },
    {
      id: 61,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "876 ÷ 12 =",
      options: { a: "73", b: "72", c: "74", d: "71" },
      correct: "a",
      explanation: "División directa",
    },
    {
      id: 62,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "945 ÷ 15 =",
      options: { a: "61", b: "62", c: "63", d: "64" },
      correct: "c",
      explanation: "División directa",
    },
    {
      id: 63,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "Propiedad conmutativa: a + b =",
      options: { a: "a - b", b: "b + a", c: "ab", d: "a/b" },
      correct: "b",
      explanation: "Definición de propiedad conmutativa",
    },
    {
      id: 64,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "Propiedad asociativa: (a + b) + c =",
      options: {
        a: "a + (b + c)",
        b: "a + b + c",
        c: "(a + b) × c",
        d: "a + (b × c)",
      },
      correct: "a",
      explanation: "Definición de propiedad asociativa",
    },
    {
      id: 65,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "3/8 como decimal es:",
      options: { a: "0.375", b: "0.325", c: "0.425", d: "0.475" },
      correct: "a",
      explanation: "3 ÷ 8",
    },
    {
      id: 66,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "0.75 como fracción es:",
      options: { a: "3/4", b: "7/5", c: "75/100", d: "3/5" },
      correct: "a",
      explanation: "75/100 se simplifica a 3/4",
    },
    {
      id: 67,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "(-8) + (-5) =",
      options: { a: "-3", b: "3", c: "-13", d: "13" },
      correct: "c",
      explanation: "Suma de negativos",
    },
    {
      id: 68,
      section: "II",
      category: "E. OPERACIONES BÁSICAS",
      question: "12 - (-7) =",
      options: { a: "5", b: "-5", c: "19", d: "-19" },
      correct: "c",
      explanation: "12 + 7",
    },
  ];

  // --- REFERENCIAS AL DOM ---
  const welcomeScreen = document.getElementById("welcome-screen");
  const examScreen = document.getElementById("exam-screen");
  const resultsScreen = document.getElementById("results-screen");
  const studentNameInput = document.getElementById("student-name");
  // CAMBIO: Referencia al nuevo campo de email
  const parentEmailInput = document.getElementById("parent-email");
  const examDateInput = document.getElementById("exam-date");
  const startExamBtn = document.getElementById("start-exam-btn");
  const sectionTitle = document.getElementById("section-title");
  const timerDisplay = document.getElementById("timer");
  const questionsContainer = document.getElementById("questions-container");
  const nextSectionBtn = document.getElementById("next-section-btn");
  const finishExamBtn = document.getElementById("finish-exam-btn");
  const summaryContainer = document.getElementById("summary-container");
  const resultsBreakdown = document.getElementById("results-breakdown");
  const downloadSendBtn = document.getElementById("download-send-btn");

  // --- VARIABLES DE ESTADO ---
  let currentSection = "I";
  let userAnswers = {};
  let timerInterval;
  let timeRemaining = 0;

  // --- LÓGICA DE LA APLICACIÓN ---

  const loadInitialData = () => {
    const savedAnswers = localStorage.getItem("userAnswers");
    if (savedAnswers) userAnswers = JSON.parse(savedAnswers);

    const savedName = localStorage.getItem("studentName");
    if (savedName) studentNameInput.value = savedName;

    // CAMBIO: Cargar el email del padre si ya está guardado
    const savedParentEmail = localStorage.getItem("parentEmail");
    if (savedParentEmail) parentEmailInput.value = savedParentEmail;

    examDateInput.value = new Date().toISOString().slice(0, 10);
  };

  const startExam = () => {
    const studentName = studentNameInput.value.trim();
    const parentEmail = parentEmailInput.value.trim();

    if (studentName === "") {
      alert("Por favor, ingresa tu nombre completo para comenzar.");
      return;
    }

    // CAMBIO: Validación para el campo de email del padre/encargado
    // Esta es una validación simple de formato de email.
    if (parentEmail === "" || !/^\S+@\S+\.\S+$/.test(parentEmail)) {
      alert(
        "Por favor, ingresa un correo electrónico válido del padre/encargado."
      );
      return;
    }

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("parentEmail", parentEmail); // Guardar email del padre
    localStorage.setItem("examDate", examDateInput.value);

    welcomeScreen.classList.add("hidden");
    examScreen.classList.remove("hidden");
    nextSectionBtn.classList.remove("hidden");

    renderQuestions("I");
    startTimer(60); // 60 minutos para la Sección I
  };

  const renderQuestions = (section) => {
    questionsContainer.innerHTML = "";
    sectionTitle.textContent = `SECCIÓN ${section}`;
    const questionsToRender = examData.filter((q) => q.section === section);

    questionsToRender.forEach((q) => {
      const questionBlock = document.createElement("div");
      questionBlock.className = "question-block";
      questionBlock.id = `question-${q.id}`;

      let optionsHTML = "";
      for (const key in q.options) {
        const isChecked = userAnswers[q.id] === key ? "checked" : "";
        optionsHTML += `
                    <div class="option">
                        <input type="radio" name="question${q.id}" id="option${
          q.id
        }${key}" value="${key}" ${isChecked}>
                        <label for="option${
                          q.id
                        }${key}"><strong>${key.toUpperCase()})</strong> ${
          q.options[key]
        }</label>
                    </div>`;
      }

      questionBlock.innerHTML = `
                <p class="question-text">${q.id}. ${q.question}</p>
                <div class="options-grid">
                    ${optionsHTML}
                </div>`;
      questionsContainer.appendChild(questionBlock);
    });

    document
      .querySelectorAll('#quiz-form input[type="radio"]')
      .forEach((radio) => {
        radio.addEventListener("change", saveProgress);
      });
  };

  const startTimer = (minutes) => {
    timeRemaining = minutes * 60;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeRemaining--;
      const mins = Math.floor(timeRemaining / 60);
      const secs = timeRemaining % 60;
      timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(
        secs
      ).padStart(2, "0")}`;

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("El tiempo se ha agotado. El examen se finalizará.");
        finishExam();
      }
    }, 1000);
  };

  const addTimeToTimer = (minutes) => {
    timeRemaining += minutes * 60;
  };

  const saveProgress = () => {
    const formData = new FormData(document.getElementById("quiz-form"));
    for (let [key, value] of formData.entries()) {
      const questionId = key.replace("question", "");
      userAnswers[questionId] = value;
    }
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  };

  const validateAndProceed = (action) => {
    saveProgress();
    const questionsOnScreen = examData.filter(
      (q) => q.section === currentSection
    );
    const unanswered = questionsOnScreen.filter((q) => !userAnswers[q.id]);

    if (unanswered.length > 0) {
      const unansweredNumbers = unanswered.map((q) => q.id).join(", ");
      if (
        !confirm(
          `Dejaste las siguientes preguntas sin responder: ${unansweredNumbers}. ¿Deseas continuar de todos modos?`
        )
      ) {
        return;
      }
    }
    action();
  };

  const goToNextSection = () => {
    currentSection = "II";
    renderQuestions("II");
    addTimeToTimer(30);
    nextSectionBtn.classList.add("hidden");
    finishExamBtn.classList.remove("hidden");
    window.scrollTo(0, 0);
  };

  const finishExam = () => {
    clearInterval(timerInterval);
    saveProgress();
    examScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    renderResults();
  };

  const renderResults = () => {
    let correctCount = 0;
    examData.forEach((q) => {
      if (userAnswers[q.id] === q.correct) correctCount++;
    });

    const totalQuestions = examData.length;
    const percentage =
      totalQuestions > 0
        ? ((correctCount / totalQuestions) * 100).toFixed(2)
        : 0;

    summaryContainer.innerHTML = `
            <h3>Resumen del Desempeño</h3>
            <p><strong>Estudiante:</strong> ${localStorage.getItem(
              "studentName"
            )}</p>
            <p><strong>Email del Padre/Encargado:</strong> ${localStorage.getItem(
              "parentEmail"
            )}</p>
            <p><strong>Fecha:</strong> ${localStorage.getItem("examDate")}</p>
            <div id="score-container">
                <p><strong>Puntuación:</strong> <span id="score">${correctCount} / ${totalQuestions}</span></p>
                <p><strong>Porcentaje de Aciertos:</strong> <span id="percentage">${percentage}%</span></p>
            </div>
        `;

    resultsBreakdown.innerHTML = "<h3>Desglose de Respuestas</h3>";
    examData.forEach((q) => {
      const userAnswer = userAnswers[q.id];
      const isCorrect = userAnswer === q.correct;
      let userAnswerText = "No respondida";
      if (userAnswer)
        userAnswerText = `${userAnswer.toUpperCase()}) ${
          q.options[userAnswer]
        }`;

      const resultItem = document.createElement("div");
      resultItem.className = `result-item ${
        isCorrect ? "correct" : "incorrect"
      }`;
      resultItem.innerHTML = `
                <p><strong>${q.id}. ${q.question}</strong></p>
                <p class="user-answer ${
                  isCorrect ? "" : "incorrect-text"
                }">Tu respuesta: ${userAnswerText}</p>
                ${
                  !isCorrect
                    ? `
                    <p class="correct-answer-text">Respuesta correcta: ${q.correct.toUpperCase()}) ${
                        q.options[q.correct]
                      }</p>
                    <div class="explanation"><strong>Explicación:</strong> ${
                      q.explanation
                    }</div>
                `
                    : ""
                }
            `;
      resultsBreakdown.appendChild(resultItem);
    });
  };

  const handleDownloadAndSend = async () => {
    const button = downloadSendBtn;
    button.disabled = true;
    button.textContent = "Procesando...";

    try {
      alert("Se iniciará la descarga del PDF.");
      await downloadPdfReport();

      alert("Ahora se enviarán los resultados por correo.");
      await sendEmailReport();

      alert(
        "¡Proceso completado! El PDF ha sido descargado y los resultados enviados."
      );
      button.textContent = "Descargado y Enviado";
    } catch (error) {
      console.error("Ocurrió un error en el proceso:", error);
      alert(
        `Hubo un error: ${
          error.text || error.message || "Revisa la consola para más detalles."
        }`
      );
      button.textContent = "Error, intenta de nuevo";
      button.disabled = false;
    }
  };

  const downloadPdfReport = () => {
    const studentName = localStorage.getItem("studentName").replace(/ /g, "_");
    const element = document.getElementById("results-screen");
    const opt = {
      margin: 0.5,
      filename: `Reporte_Resultados_${studentName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    return html2pdf().set(opt).from(element).save();
  };

  const sendEmailReport = () => {
    const studentName = localStorage.getItem("studentName");
    const parentEmail = localStorage.getItem("parentEmail");
    const examDate = localStorage.getItem("examDate");
    const score = document.getElementById("score").textContent;
    const percentage = document
      .getElementById("percentage")
      .textContent.replace("%", "");

    let resultsText = "";
    examData.forEach((q) => {
      const userAnswer = userAnswers[q.id];
      const isCorrect = userAnswer === q.correct;
      let userAnswerText = "No respondida";
      if (userAnswer)
        userAnswerText = `${userAnswer.toUpperCase()}) ${
          q.options[userAnswer]
        }`;
      const correctAnswerText = `${q.correct.toUpperCase()}) ${
        q.options[q.correct]
      }`;

      resultsText += `Pregunta ${q.id}: ${q.question}\n`;
      resultsText += `Tu Respuesta: ${userAnswerText} ${
        isCorrect ? "(Correcta)" : "(Incorrecta)"
      }\n`;
      if (!isCorrect) {
        resultsText += `Respuesta Correcta: ${correctAnswerText}\n`;
        resultsText += `Explicación: ${q.explanation}\n`;
      }
      resultsText += "------------------------------------\n\n";
    });

    const templateParams = {
      student_name: studentName,
      // CAMBIO: Esta variable es para que la uses en tu plantilla de EmailJS.
      parent_email_info: parentEmail,
      exam_date: examDate,
      score: score,
      percentage: percentage,
      results_breakdown: resultsText,
    };

    // ¡ACCIÓN REQUERIDA!
    // Asegúrate de que en tu plantilla de EmailJS (template_d3bdnx4)
    // hayas añadido la variable {{parent_email_info}} para que se muestre.

    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    return emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
  };

  // --- EVENT LISTENERS ---
  startExamBtn.addEventListener("click", startExam);
  nextSectionBtn.addEventListener("click", () =>
    validateAndProceed(goToNextSection)
  );
  finishExamBtn.addEventListener("click", () => validateAndProceed(finishExam));
  downloadSendBtn.addEventListener("click", handleDownloadAndSend);

  // Iniciar la aplicación
  loadInitialData();
});
