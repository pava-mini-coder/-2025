
const topicItems = document.querySelectorAll('.topic-item');
const modal = document.getElementById('topicModal');
const modalContent = document.getElementById('topicContent');
const closeModal = document.querySelector('.close');
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');


const topics = {
    
"Одночлени та многочлени": `
<h2><strong>Одночлени та многочлени</strong></h2>
<p>Одночлени та многочлени — це основні поняття алгебри, які використовуються у багатьох математичних задачах. Одночлен — це вираз, який складається з числа, змінної або добутку числа і змінних, піднесених до натурального степеня. Наприклад, <strong>7x²</strong> або <strong>5</strong> є одночленами. Якщо в одночлені немає змінних, його називають константою.</p>
<p>Многочлен — це алгебраїчний вираз, що складається з кількох одночленів, з'єднаних знаками додавання або віднімання. Наприклад, <strong>3x² + 5x - 7</strong> є многочленом, який складається з трьох одночленів: <strong>3x²</strong>, <strong>5x</strong> та <strong>-7</strong>. Кількість одночленів у многочлені визначає його довжину, а степінь многочлена — це найбільший степінь змінної серед одночленів.</p>
<p>Многочлени поділяються на класи залежно від кількості членів: біном (два члени), трином (три члени) тощо. Їх використовують для розв'язування задач, побудови функцій і моделювання реальних процесів. Робота з многочленами включає арифметичні дії, такі як складання, віднімання, множення, ділення та спрощення.</p>
<p>Ці вирази широко застосовуються в математиці, фізиці, економіці та інших науках. Наприклад, многочлени допомагають описати залежність між різними змінними, такими як швидкість, час і відстань.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/одночлени та многочлени.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/NWNQo5KOSjs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Дії з многочленами": `
<h2><strong>Дії з многочленами</strong></h2>
<p>Дії з многочленами є фундаментом для розв'язування алгебраїчних задач. Основні операції включають додавання, віднімання, множення, ділення та спрощення.</p>
<p><strong>Додавання та віднімання:</strong> ці операції виконуються шляхом групування і комбінування коефіцієнтів одночленів з однаковими степенями змінної. Наприклад, <strong>(3x² + 2x) + (5x² - x) = 8x² + x</strong>.</p>
<p><strong>Множення:</strong> виконується за правилом множення одночленів: коефіцієнти множаться між собою, а степені змінної додаються. Якщо множаться два многочлени, кожен член одного множиться на кожен член іншого. Наприклад, <strong>(x + 2)(x - 3) = x² - 3x + 2x - 6 = x² - x - 6</strong>.</p>
<p><strong>Ділення:</strong> включає розподіл многочлена на одночлен або інший многочлен. Для цього використовуються методи поділу "стовпчиком" або за допомогою виділення спільних множників.</p>
<p>Розкладання на множники є важливим методом спрощення. Наприклад, вираз <strong>x² - 9</strong> можна подати як <strong>(x - 3)(x + 3)</strong>.</p>
<p>Ці операції широко застосовуються в алгебраїчних рівняннях, а також у задачах, що включають моделювання процесів у науці та техніці.</p>
<div class="content_Photo_video">
    <img class="photo_diy" src="static/images/дії з многочленами.png" alt="Приклад фото">
    <iframe class="diy" 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/MG0ViPr5b6M" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Формули скороченого множення": `
<h2><strong>Формули скороченого множення</strong></h2>
<p>Формули скороченого множення є інструментом для швидкого виконання алгебраїчних дій. Основні формули включають:</p>
<ul>
<li><strong>Квадрат суми:</strong> <strong>(a + b)² = a² + 2ab + b²</strong>. Наприклад, <strong>(x + 3)² = x² + 6x + 9</strong>.</li>
<li><strong>Квадрат різниці:</strong> <strong>(a - b)² = a² - 2ab + b²</strong>. Наприклад, <strong>(x - 5)² = x² - 10x + 25</strong>.</li>
<li><strong>Різниця квадратів:</strong> <strong>a² - b² = (a - b)(a + b)</strong>. Наприклад, <strong>x² - 16 = (x - 4)(x + 4)</strong>.</li>
<li><strong>Куб суми:</strong> <strong>(a + b)³ = a³ + 3a²b + 3ab² + b³</strong>.</li>
<li><strong>Куб різниці:</strong> <strong>(a - b)³ = a³ - 3a²b + 3ab² - b³</strong>.</li>
</ul>
<p>Ці формули значно скорочують обчислення у випадках розкладання або спрощення виразів.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/формули скороченого множення.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/3viD96kBkow" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

`,
"Розв'язування рівнянь": `
<h2><strong>Розв'язування рівнянь</strong></h2>
<p>Рівняння — це математичні вирази, що містять невідомі змінні, значення яких потрібно знайти. Рівняння використовуються для моделювання реальних задач та розрахунків.</p>
<h3>Типи рівнянь:</h3>
<ul>
    <li><strong>Лінійні рівняння:</strong> мають вигляд ax + b = 0. Розв’язуються методом ізоляції змінної. Наприклад, \(2x - 4 = 0\). Розв'язок: \(x = 2\).</li>
    <li><strong>Квадратні рівняння:</strong> мають вигляд ax² + bx + c = 0. Для їх розв’язання використовують формулу дискримінанта або розкладання на множники. Наприклад, \(x² - 9 = 0\). Розв'язок: \(x = 3\) або \(x = -3\).</li>
    <li><strong>Рівняння з модулями:</strong> мають вигляд |f(x)| = a, де a ≥ 0. Для розв’язання розкривають модуль на два випадки. Наприклад, \(|x - 5| = 3\). Розв'язок: \(x = 8\) або \(x = 2\).</li>
</ul>
<h3>Методи розв'язання:</h3>
<ul>
    <li>Графічний метод: будується графік функції та визначаються точки перетину з віссю абсцис.</li>
    <li>Метод підстановки: використовується у системах рівнянь.</li>
    <li>Дискримінант: застосовується для квадратних рівнянь.</li>
</ul>
<p>Рівняння є фундаментом алгебри, вони допомагають вирішувати задачі в науці, інженерії та повсякденному житті.</p>
<div class="content_Photo_video">
    <img class="rivnana" src="static/images/Розв'язування рівнянь.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/2CsMGI3rzzs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Розв'язування задач за допомогою рівнянь": `
<h2><strong>Розв'язування задач за допомогою рівнянь</strong></h2>
<p>Розв’язування задач базується на перекладі текстових умов у математичну форму:</p>
<h3>Етапи:</h3>
<ol>
    <li>Визначення змінних.</li>
    <li>Складання рівняння.</li>
    <li>Розв’язання рівняння.</li>
    <li>Перевірка результату.</li>
</ol>
<h3>Приклади:</h3>
<ul>
    <li>Миколі 12 років, а його батькові 36 років. Через скільки років батько буде у 2 рази старшим за Миколу? Розв'язок: Через 12 років.</li>
    <li>Задача про відстань: \(s = vt\). Наприклад, якщо швидкість \(v = 60\) км/год, а час \(t = 2\) години, тоді \(s = 120\) км.</li>
    <li>Розрахунок площі квадрата: \(S = a^2\), де \(a = 5\). Тоді \(S = 25\).</li>
</ul>
<div class="content_Photo_video">
    <img class="photo_zadachi" src="static/images/Розв'язування задач за допомогою рівнянь.png" alt="Приклад фото">
    <iframe class="video_zadachi"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/XB2db8-hbtw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Поняття функції": `
<h2><strong>Поняття функції</strong></h2>
<p><strong>Функція</strong> — це залежність однієї змінної від іншої, де кожному значенню однієї змінної відповідає єдине значення іншої.</p>
<h3>Види функцій:</h3>
<ul>
    <li>Лінійна: \(y = kx + b\).</li>
    <li>Квадратна: \(y = ax^2 + bx + c\).</li>
    <li>Обернена пропорційність: \(y = rac{k}{x}\).</li>
    <li>Тригонометричні: \(y = sin(x), y = cos(x), y = 	an(x)\).</li>
</ul>
<h3>Приклади функцій:</h3>
<ul>
    <li>Лінійна: \(y = 2x + 1\). Якщо \(x = 2\), тоді \(y = 5\).</li>
    <li>Квадратна: \(y = x^2 - 3x + 2\). Якщо \(x = 1\), тоді \(y = 0\).</li>
    <li>Обернена пропорційність: \(y = rac{10}{x}\). Якщо \(x = 5\), тоді \(y = 2\).</li>
    <li>Тригонометрична: \(y = sin(π/2)\). Відповідь: \(y = 1\).</li>
</ul>
<h3>Графіки функцій:</h3>
<p>Графік функції — це візуальне представлення залежності між змінними. Наприклад, графік лінійної функції \(y = 2x + 1\) — це пряма.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Поняття функції.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Hd5qHzVhySk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Точки, прямі, промені, кути": `
<h2><strong>Точки, прямі, промені, кути</strong></h2>
<p>У геометрії точки, прямі, промені та кути є основними елементами, що використовуються для побудови фігур і визначення їх властивостей.</p>

<h3>Точки:</h3>
<ul>
<li>Точка — це основний елемент геометрії, який не має розмірів, але має положення у просторі.</li>
<li>Положення точки задається координатами у декартовій системі, наприклад, (x, y).</li>
</ul>

<h3>Прямі:</h3>
<ul>
<li>Пряма — це нескінченна лінія, яка проходить через дві точки і не має товщини.</li>
<li>Рівняння прямої у декартовій системі координат: <strong>y = mx + b</strong>, де m — нахил прямої, b — зсув.</li>
</ul>

<h3>Промені:</h3>
<ul>
<li>Промінь починається з однієї точки (початкової) і тягнеться нескінченно в одному напрямку.</li>
<li>Промені часто використовуються для утворення кутів.</li>
</ul>

<h3>Кути:</h3>
<ul>
<li>Кути утворюються двома променями, які виходять із однієї точки, що називається вершиною кута.</li>
<li>Кути вимірюються в градусах, де повний кут дорівнює 360°, прямий кут — 90°, а розгорнутий кут — 180°.</li>
</ul>

<h3>Приклад:</h3>
<ul>
<li>Знайдіть рівняння прямої, що проходить через точки A(1, 2) і B(4, 6):  
<strong>m = (6 - 2) / (4 - 1) = 4 / 3</strong>, рівняння: <strong>y = (4/3)x + b</strong>.</li>
<li>Визначте величину кута між двома променями, які утворюють прямий кут:  
<strong>90°</strong>.</li>
</ul>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Точки, прямі, промені, кути.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/ifXQXRaKXRQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Вимірювання відрізків і кутів": `
<h2><strong>Вимірювання відрізків і кутів</strong></h2>
<p>У геометрії вимірювання відрізків і кутів є важливими для визначення розмірів і співвідношень між фігурами.</p>
<h3>Вимірювання відрізків:</h3>
<ul>
    <li>Довжина відрізка вимірюється за допомогою лінійки або інших інструментів з поділками.</li>
    <li>Для знаходження відстані між двома точками у декартовій системі координат використовується формула: 
        <strong>d = √((x₂ - x₁)² + (y₂ - y₁)²)</strong>.</li>
</ul>
<h3>Вимірювання кутів:</h3>
<ul>
    <li>Кути вимірюються у градусах за допомогою транспортира.</li>
    <li>Повний кут дорівнює 360°, прямий кут — 90°, а розгорнутий кут — 180°.</li>
</ul>
<h3>Приклад:</h3>
<ul>
    <li>Знайдіть довжину відрізка між точками A(2, 3) і B(5, 7): 
        <strong>d = √((5 - 2)² + (7 - 3)²) = √(3² + 4²) = √(9 + 16) = √25 = 5</strong>.</li>
    <li>Виміряйте кут між променями, які утворюють трикутник, використовуючи транспортир. Наприклад, кут становить 45°.</li>
</ul>
<p>Точні вимірювання важливі для побудови геометричних фігур і розв’язання задач.</p>
<h3>Виміряй мене:)</h3>
<div class="content_Photo_video1">
    <img class="photo_zadachi1" src="static/images/Вимірювання відрізків і кутів.webp" alt="Приклад фото">
    <iframe class="video_zadachi"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/vE3CrLxVW9A" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Види трикутників": `
<h2><strong>Види трикутників</strong></h2>
<p><strong>Трикутники</strong> класифікуються за їх сторонами та кутами.</p>
<h3>Класифікація за сторонами:</h3>
<ul>
    <li><strong>Рівносторонній трикутник</strong> — всі сторони рівні, кути також рівні і дорівнюють 60°.</li>
    <li><strong>Рівнобедрений трикутник</strong> — дві сторони рівні, а кути при основі також рівні.</li>
    <li><strong>Різносторонній трикутник</strong> — всі сторони різні, кути теж різні.</li>
</ul>
<h3>Класифікація за кутами:</h3>
<ul>
    <li><strong>Гострокутний трикутник</strong> — всі кути гострі (менше 90°).</li>
    <li><strong>Прямокутний трикутник</strong> — один із кутів дорівнює 90°.</li>
    <li><strong>Тупокутний трикутник</strong> — один із кутів більший за 90°.</li>
</ul>
<h3>Приклади:</h3>
<ul>
    <li>Трикутник зі сторонами 3 см, 3 см і 3 см — рівносторонній.</li>
    <li>Трикутник зі сторонами 5 см, 5 см і 8 см — рівнобедрений.</li>
    <li>Трикутник зі сторонами 3 см, 4 см і 5 см, де один із кутів 90° — прямокутний.</li>
</ul>
<p>Ці властивості трикутників допомагають класифікувати їх і використовуються в геометричних задачах.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Види трикутників.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/WC3Unu6rJl4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Ознаки рівності трикутників": `
<h2><strong>Ознаки рівності трикутників</strong></h2>
<p>Два трикутники рівні, якщо виконуються такі умови:</p>
<ul>
<li><strong>За трьома сторонами:</strong> якщо три сторони одного трикутника дорівнюють трьом сторонам іншого трикутника.</li>
<li><strong>За двома сторонами і кутом між ними:</strong> якщо дві сторони та кут між ними одного трикутника дорівнюють відповідним сторонам і куту іншого трикутника.</li>
<li><strong>За двома кутами і стороною між ними:</strong> якщо два кути та сторона між ними одного трикутника дорівнюють відповідним кутах і стороні іншого трикутника.</li>
</ul>
<h3>Приклади:</h3>
<p>Дано два трикутники: ΔABC і ΔDEF. Якщо:</p>
<ul>
<li>Сторони: AB = DE, BC = EF, AC = DF — трикутники рівні за трьома сторонами.</li>
<li>Сторони: AB = DE, BC = EF, кут B = кут E — трикутники рівні за двома сторонами і кутом між ними.</li>
<li>Кути: кут A = кут D, кут B = кут E, сторона AB = сторона DE — трикутники рівні за двома кутами і стороною між ними.</li>
</ul>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Ознаки рівності трикутників.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/fT3RRKusjHM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Паралельні прямі та кути":`
<h2><strong>Паралельні прямі та кути</strong></h2>
<p><strong>Паралельні прямі</strong> — це прямі, які лежать в одній площині і ніколи не перетинаються, незалежно від їх довжини.</p>
<h3>Кути, утворені паралельними прямими:</h3>
<ul>
    <li><strong>Відповідні кути</strong> — кути, які знаходяться в однаковому положенні, рівні.</li>
    <li><strong>Перехресні кути</strong> — кути, утворені перетином прямих навпроти, також рівні.</li>
    <li><strong>Сума суміжних кутів</strong> — завжди дорівнює 180°.</li>
</ul>
<h3>Приклади:</h3>
<ul>
    <li>Дві паралельні прямі AB і CD, перетнуті прямою EF, утворюють кути: якщо один із кутів дорівнює 70°, то відповідний кут також 70°.</li>
    <li>Якщо перехресний кут становить 110°, то протилежний йому кут теж дорівнює 110°.</li>
    <li>Суміжні кути на прямій EF становлять 70° і 110°, оскільки їх сума дорівнює 180°.</li>
</ul>
<p>Ці властивості використовуються в задачах для доказів і обчислень у геометрії.</p>
<div class="content_Photo_video">
    <img class="photo_zadachi2" src="static/images/Паралельні прямі та кути.webp" alt="Приклад фото">
    <iframe class="video_zadachi"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/_iKX1Zvo7qg" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Дробові вирази, їх спрощення": `
    <h2><strong>Дробові вирази, їх спрощення</strong></h2>
    <p>Дробові вирази — це алгебраїчні вирази у вигляді дробу, де чисельник і знаменник є многочленами. Наприклад, <strong>(2x + 3) / (x - 1)</strong>.</p>
    <p><strong>Спрощення дробових виразів</strong> включає:</p>
    <ul>
        <li>Винесення спільного множника за дужки.</li>
        <li>Скорочення дробів, якщо чисельник і знаменник мають спільні множники.</li>
    </ul>
    <h3>Приклад:</h3>
    <p>Спростити: <strong>(2x² - 4x) / (x² - 2x)</strong></p>
    <p><strong>Розв’язок:</strong> Винесемо спільний множник: <strong>(2x(x - 2)) / (x(x - 2)) = 2</strong> (за умови, що x ≠ 0 і x ≠ 2).</p>
    <div class="content_Photo_video">
        <img class="photo_formuly" src="static/images/Дробові вирази, їх спрощення.png" alt="Приклад фото">
        <iframe
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/h4Ac1M7Bqi8" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    `,
    
    "Дії з дробовими виразами": `
    <h2><strong>Дії з дробовими виразами</strong></h2>
    <p>Дії з дробовими виразами аналогічні діям із звичайними дробами: додавання, віднімання, множення та ділення.</p>
    <p><strong>Додавання і віднімання:</strong> зводьте дроби до спільного знаменника.</p>
    <p><strong>Приклад:</strong> <strong>(1 / x) + (2 / x²)</strong></p>
    <p><strong>Розв’язок:</strong> Спільний знаменник: <strong>x²</strong>. <strong>(x + 2) / x²</strong>.</p>
    <p><strong>Множення і ділення:</strong> Для множення перемножуються чисельники і знаменники. Для ділення — ділення замінюється множенням на обернений дріб.</p>
    <h3>Приклад:</h3>
    <p><strong>(3 / x) ÷ (6 / x²)</strong></p>
    <p><strong>Розв’язок:</strong> Перемножимо: <strong>(3 / x) * (x² / 6) = (3x²) / (6x) = x / 2</strong>.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Дії з дробовими виразами.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/eUDydlQincI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Арифметичний квадратний корінь": `
    <h2><strong>Арифметичний квадратний корінь</strong></h2>
    <p>Квадратний корінь — це число, квадрат якого дорівнює заданому числу. Наприклад, <strong>√9 = 3</strong>, оскільки <strong>3² = 9</strong>.</p>
    <p><strong>Властивості:</strong></p>
    <ul>
        <li><strong>√(a * b) = √a * √b</strong>.</li>
        <li><strong>√(a / b) = √a / √b</strong>.</li>
        <li><strong>(√a)² = a</strong>.</li>
    </ul>
    <h3>Приклад:</h3>
    <p>Обчислити: <strong>√(16 * 25)</strong>.</p>
    <p><strong>Розв’язок:</strong> √16 * √25 = 4 * 5 = <strong>20</strong>.</p>
    <div class="content_Photo_video">
    <img class="photo_zadachi3" src="static/images/Арифметичний квадратний корінь.png" alt="Приклад фото">
    <iframe class="video_zadachi3"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/O3xGsfmV6Q8" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Дії з ірраціональними числами": `
    <h2><strong>Дії з ірраціональними числами</strong></h2>
    <p>Ірраціональні числа — це числа, які не можна представити у вигляді звичайного дробу. Наприклад, <strong>√2, π</strong>.</p>
    <p><strong>Основні дії:</strong></p>
    <ul>
        <li>Додавання і віднімання: можливе лише для однакових радикалів, наприклад, <strong>2√3 + 3√3 = 5√3</strong>.</li>
        <li>Множення і ділення: використовуються властивості коренів. Наприклад, <strong>√2 * √3 = √6</strong>.</li>
        <li>Раціоналізація знаменника: <strong>1 / √2 = √2 / 2</strong>.</li>
    </ul>
    <h3>Приклад:</h3>
    <p>Спростити: <strong>(√2 + √3)²</strong>.</p>
    <p><strong>Розв’язок:</strong> (√2)² + 2√2√3 + (√3)² = 2 + 2√6 + 3 = <strong>5 + 2√6</strong>.</p>
    <div class="content_Photo_video">
    <img class="photo_zadachi4" src="static/images/Дії з ірраціональними числами.png" alt="Приклад фото">
    <iframe class="video_zadachi3"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/D7ftwpFPoOQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Квадратична функція, її графік і властивості": `
    <h2><strong>Квадратична функція, її графік і властивості</strong></h2>
    <p>Квадратична функція має вигляд <strong>y = ax² + bx + c</strong>, де a ≠ 0. Її графік — парабола.</p>
    <p><strong>Властивості:</strong></p>
    <ul>
        <li>Вершина параболи: <strong>x = -b / (2a)</strong>.</li>
        <li>Вісь симетрії: пряма <strong>x = -b / (2a)</strong>.</li>
        <li>Напрям відкриття параболи залежить від знака a.</li>
    </ul>
    <h3>Приклад:</h3>
    <p>Побудувати графік <strong>y = x² - 4x + 3</strong>.</p>
    <p><strong>Розв’язок:</strong></p>
    <ul>
        <li>Вершина: <strong>x = -(-4) / (2 * 1) = 2</strong>.</li>
        <li>Значення у вершині: <strong>y = 2² - 4*2 + 3 = -1</strong>.</li>
        <li>Графік — парабола з вершиною у точці (2, -1).</li>
    </ul>
    <div class="content_Photo_video">
    <img class="photo_zadachi3" src="static/images/Квадратична функція, її графік і властивості.png" alt="Приклад фото">
    <iframe class="video_zadachi3"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/vaiIVry0-l8" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Паралелограми, трапеції, ромби": `
<h2><strong>Паралелограми, трапеції, ромби</strong></h2>
<p>Паралелограми, трапеції та ромби — це основні види чотирикутників, які мають свої властивості та застосування. Вони широко використовуються у геометрії та практичних задачах.</p>
<p><strong>Паралелограм</strong> — це чотирикутник, у якого протилежні сторони паралельні та рівні. Його діагоналі перетинаються і діляться навпіл.</p>
<ul>
    <li>Протилежні сторони рівні та паралельні.</li>
    <li>Сума кутів, прилеглих до однієї сторони, дорівнює 180°.</li>
</ul>
<p><strong>Приклад:</strong> У паралелограмі зі сторонами 8 см і 6 см, протилежні сторони також дорівнюють 8 см і 6 см. Діагоналі перетинаються і діляться навпіл.</p>

<p><strong>Трапеція</strong> — це чотирикутник, у якого лише одна пара сторін паралельна. Трапеції можуть бути рівнобічними, якщо їх бічні сторони рівні, або довільними.</p>
<ul>
    <li>Середня лінія трапеції дорівнює півсумі основ.</li>
    <li>Рівнобічна трапеція має рівні кути біля основ.</li>
</ul>
<p><strong>Приклад:</strong> У рівнобічній трапеції з основами 10 см і 6 см середня лінія дорівнює (10 + 6) / 2 = 8 см.</p>

<p><strong>Ромб</strong> — це паралелограм, у якого всі сторони рівні. Його діагоналі перетинаються під прямим кутом і ділять кути навпіл.</p>
<ul>
    <li>Усі сторони рівні.</li>
    <li>Діагоналі є бісектрисами кутів.</li>
</ul>
<p><strong>Приклад:</strong> У ромбі зі сторонами по 5 см і діагоналями 6 см і 8 см площа дорівнює (6 × 8) / 2 = 24 см².</p>
<div class="content_Photo_video1">
    <iframe 
        width="660" 
        height="315" 
        src="https://www.youtube.com/embed/_imy9qQi24Q" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    <iframe 
        width="660" 
        height="315" 
        src="https://www.youtube.com/embed/B2OZF_V804M" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    <iframe 
        width="660" 
        height="315" 
        src="https://www.youtube.com/embed/5qGYAZftso4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,

    "Теорема Фалеса": `
<h2><strong>Теорема Фалеса</strong></h2>
<p><strong>Теорема Фалеса</strong> стверджує, що якщо паралельні прямі перетинають дві сторони кута, то вони відтинають на цих сторонах пропорційні відрізки. Ця теорема використовується для побудови пропорцій і поділу відрізків на рівні частини.</p>
<p><strong>Приклад:</strong> Якщо одна сторона кута ділиться на відрізки 3 см і 6 см, то друга сторона, поділена паралельними прямими, буде пропорційно поділена, наприклад, на відрізки 2 см і 4 см.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Теорема Фалеса.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Ln2M9F4J6VI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,

    "Ознаки подібності трикутників": `
<h2><strong>Ознаки подібності трикутників</strong></h2>
<p>Трикутники є подібними, якщо вони мають однакову форму, але можуть відрізнятися за розмірами. Подібність визначається за кількома ознаками:</p>
<ul>
    <li>Два кути одного трикутника дорівнюють двом кутам іншого трикутника.</li>
    <li>Відношення довжин відповідних сторін трикутників рівні.</li>
</ul>
<p><strong>Приклад:</strong> Якщо в ΔABC кути A і B рівні кутах D і E у ΔDEF, а відношення AB/DE = BC/EF = AC/DF, то ці трикутники подібні.</p>
<div class="content_Photo_video">
    <img class="photo_zadachi5" src="static/images/Ознаки подібності трикутників.png" alt="Приклад фото">
    <iframe class="video_zadachi3"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/QfwVLEHxaaw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    <iframe class="video_zadachi3"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/QrTs8elVL6o" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,

    "Теорема Піфагора та її застосування": `
<h2><strong>Теорема Піфагора та її застосування</strong></h2>
<p><strong>Теорема Піфагора</strong> стверджує, що в прямокутному трикутнику квадрат гіпотенузи дорівнює сумі квадратів катетів:</p>
<p><strong>c² = a² + b²</strong></p>
<p>Ця теорема є однією з найважливіших у геометрії, оскільки дозволяє обчислювати невідомі сторони трикутників.</p>
<p><strong>Приклад:</strong> У прямокутному трикутнику з катетами 3 см і 4 см, гіпотенуза дорівнює:</p>
<p><strong>c = √(3² + 4²) = √(9 + 16) = √25 = 5 см</strong>.</p>
<p>Теорема Піфагора також використовується в задачах на відстані, наприклад, для обчислення діагоналей прямокутників або відстаней між точками у просторі.</p>
<div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Теорема Піфагора та її застосування.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/kgqpvnkcsFE" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
`,
"Арифметична та геометрична прогресії": `
    <h2><strong>Арифметична та геометрична прогресії</strong></h2>
    <p><strong>Арифметична прогресія</strong> — це послідовність чисел, у якій кожний наступний член утворюється додаванням до попереднього фіксованого числа (різниці прогресії).</p>
    <ul>
        <li><strong>Формула n-го члена:</strong> aₙ = a₁ + (n - 1)d, де a₁ — перший член, d — різниця прогресії.</li>
        <li><strong>Формула суми:</strong> Sₙ = (n/2)(a₁ + aₙ).</li>
    </ul>
    <p><strong>Геометрична прогресія</strong> — це послідовність чисел, у якій кожний наступний член утворюється множенням попереднього на фіксоване число (знаменник прогресії).</p>
    <ul>
        <li><strong>Формула n-го члена:</strong> aₙ = a₁ × qⁿ⁻¹, де a₁ — перший член, q — знаменник прогресії.</li>
        <li><strong>Формула суми:</strong> Sₙ = a₁(1 - qⁿ) / (1 - q) (для q ≠ 1).</li>
    </ul>
    <p><strong>Приклад:</strong> Знайти 10-й член арифметичної прогресії з a₁ = 3 і d = 2: a₁₀ = 3 + (10 - 1) × 2 = 3 + 18 = 21.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Арифметична та геометрична прогресії.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/fcqBCITVjOY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Формули n-го члена та суми": `
    <h2><strong>Формули n-го члена та суми</strong></h2>
    <p>Формули для n-го члена та суми дозволяють швидко знаходити значення будь-якого члена чи обчислювати підсумок декількох членів прогресії.</p>
    <ul>
        <li><strong>Арифметична прогресія:</strong> aₙ = a₁ + (n - 1)d; Sₙ = (n/2)(a₁ + aₙ).</li>
        <li><strong>Геометрична прогресія:</strong> aₙ = a₁ × qⁿ⁻¹; Sₙ = a₁(1 - qⁿ) / (1 - q) (для q ≠ 1).</li>
    </ul>
    <p><strong>Приклад:</strong> Обчислити суму перших 5 членів геометричної прогресії з a₁ = 1, q = 2: S₅ = 1(1 - 2⁵) / (1 - 2) = (1 - 32) / -1 = 31.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Формули n-го члена та суми.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/uDsyEEhBo_k" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Основні поняття ймовірності": `
    <h2><strong>Основні поняття ймовірності</strong></h2>
    <p><strong>Ймовірність</strong> — це числова міра можливості настання певної події. Вона визначається як:</p>
    <p><strong>P(A) = m / n</strong>, де m — кількість сприятливих результатів, n — загальна кількість можливих результатів.</p>
    <p><strong>Приклад:</strong> У коробці 10 кульок: 4 червоні, 6 синіх. Ймовірність витягти червону кульку: P(червона) = 4 / 10 = 0.4 (40%).</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/photo.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/wcPjmi-RpyY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Квадратні нерівності": `
    <h2><strong>Квадратні нерівності</strong></h2>
    <p>Квадратна нерівність має вигляд <strong>ax² + bx + c ≥ 0</strong> (або ≤, >, <). Для її розв’язання:</p>
    <ol>
        <li>Знаходять корені рівняння ax² + bx + c = 0.</li>
        <li>Розбивають область визначення на інтервали, враховуючи корені.</li>
        <li>Аналізують знак виразу на кожному інтервалі.</li>
    </ol>
    <p><strong>Приклад:</strong> Розв’язати x² - 3x + 2 ≥ 0. Корені: x₁ = 1, x₂ = 2. Інтервали: (-∞, 1), (1, 2), (2, ∞). Знаки: +, -, +. Відповідь: x ∈ (-∞, 1] ∪ [2, ∞).</p>
        <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Квадратні нерівності.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/AtJq1HrmMnI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Системи рівнянь другого ступеня": `
    <h2><strong>Системи рівнянь другого ступеня</strong></h2>
    <p>Система рівнянь другого ступеня містить рівняння вигляду ax² + by² = c. Методи розв’язання: підстановка, додавання, графічний метод.</p>
    <p><strong>Приклад:</strong> Розв’язати систему:</p>
    <ul>
        <li>x² + y² = 25</li>
        <li>x + y = 7</li>
    </ul>
    <p>З другого рівняння: y = 7 - x. Підставляємо в перше: x² + (7 - x)² = 25. Розкриваємо дужки: x² + 49 - 14x + x² = 25 → 2x² - 14x + 24 = 0. Розв’язуємо квадратне рівняння: x = 3, x = 4. Тоді y = 4, y = 3. Відповідь: (3, 4), (4, 3).</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Системи рівнянь другого ступеня.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/IIupeEM-lKc" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Дотичні, хорди": `
    <h2><strong>Дотичні, хорди</strong></h2>
    <p><strong>Дотична</strong> до кола — це пряма, яка має з колом одну спільну точку. Цю точку називають точкою дотику. Основна властивість дотичної: вона перпендикулярна до радіуса, проведеного в точку дотику.</p>
    <p><strong>Хорда</strong> — це відрізок, який з'єднує дві точки кола. Хорда є діаметром, якщо проходить через центр кола.</p>
    <ul>
        <li>Дотична завжди знаходиться зовні кола, окрім точки дотику.</li>
        <li>Найбільша хорда кола — це його діаметр.</li>
    </ul>
    <p><strong>Приклад:</strong> У колі з радіусом 5 см дотична проходить через точку А. Якщо точка А є кінцем хорди довжиною 8 см, знайти відстань від центра кола до хорди. Відповідь: відстань дорівнює √(5² - 4²) = 3 см.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Дотичні, хорди.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/bW3k_tlZJLI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,


    "Правильні многокутники": `
    <h2><strong>Правильні многокутники</strong></h2>
    <p><strong>Правильний многокутник</strong> — це многокутник, у якого всі сторони й усі кути рівні. Основні властивості:</p>
    <ul>
        <li>У правильному многокутнику всі зовнішні кути дорівнюють 360° / n, де n — кількість сторін.</li>
        <li>Площа правильного многокутника обчислюється за формулою: S = (1/4) × n × a² × cot(π / n), де a — довжина сторони.</li>
    </ul>
    <p><strong>Приклад:</strong> Знайти площу правильного шестикутника зі стороною 4 см. Відповідь: S = (3√3 / 2) × 4² = 48√3 см².</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Правильні многокутники.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/uiQ7q6jgSGg" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Вписані та описані фігури": `
    <h2><strong>Вписані та описані фігури</strong></h2>
    <p><strong>Вписані фігури:</strong> Це фігури, всі вершини яких лежать на колі. Основна властивість: для вписаних чотирикутників сума протилежних кутів дорівнює 180°.</p>
    <p><strong>Описані фігури:</strong> Це фігури, навколо яких можна описати коло. Для описаних чотирикутників сума довжин протилежних сторін рівна.</p>
    <p><strong>Приклад:</strong> У вписаному чотирикутнику кути дорівнюють 70° і 110°. Знайти решту кутів. Відповідь: 180° - 70° = 110°; 180° - 110° = 70°.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Вписані та описані фігури.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Mc9NdL131Vk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Основи векторної алгебри": `
    <h2><strong>Основи векторної алгебри</strong></h2>
    <p><strong>Вектор</strong> — це напрямлений відрізок, що характеризується довжиною та напрямком. Основні операції з векторами:</p>
    <ul>
        <li><strong>Додавання:</strong> Сума векторів складається за правилом трикутника.</li>
        <li><strong>Множення на скаляр:</strong> Вектор змінює довжину, але не напрямок.</li>
        <li><strong>Скалярний добуток:</strong> a · b = |a| × |b| × cosα.</li>
    </ul>
    <p><strong>Приклад:</strong> Знайти скалярний добуток векторів a = (2, 3) і b = (4, -1). Відповідь: a · b = 2×4 + 3×(-1) = 8 - 3 = 5.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Основи векторної алгебри.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/XtLEw8wZOAw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Властивості та графіки степеневих, показникових і логарифмічних функцій": `
    <h2><strong>Властивості та графіки степеневих, показникових і логарифмічних функцій</strong></h2>
    <p><strong>Степеневі функції:</strong> Функція виду y = xⁿ, де n — дійсне число. Основні властивості:</p>
    <ul>
        <li>При n > 0 функція зростає для x > 0.</li>
        <li>Графіки симетричні відносно осі y, якщо n парне.</li>
    </ul>
    <p><strong>Показникові функції:</strong> Функція виду y = a^x, де a > 0, a ≠ 1:</p>
    <ul>
        <li>При a > 1 функція зростає, а при 0 < a < 1 спадає.</li>
        <li>Графік завжди проходить через точку (0, 1).</li>
    </ul>
    <p><strong>Логарифмічні функції:</strong> Функція виду y = logₐx, де a > 0, a ≠ 1:</p>
    <ul>
        <li>Область визначення: x > 0.</li>
        <li>При a > 1 функція зростає, а при 0 < a < 1 — спадає.</li>
    </ul>
    <p><strong>Приклад:</strong> Побудувати графіки функцій y = 2^x і y = log₂x. Вони симетричні відносно прямої y = x.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Властивості та графіки степеневих, показникових і логарифмічних функцій.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/jOfbggETSN4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Розв'язування рівнянь і нерівностей": `
    <h2><strong>Розв'язування рівнянь і нерівностей</strong></h2>
    <p>Рівняння та нерівності бувають лінійними, квадратними, показниковими, логарифмічними та тригонометричними. Основні етапи розв’язання:</p>
    <ul>
        <li>Перетворення виразу до спрощеного вигляду.</li>
        <li>Застосування властивостей функцій чи формул.</li>
        <li>Пошук коренів або інтервалів розв’язків.</li>
    </ul>
    <p><strong>Приклад:</strong> Розв'язати нерівність 2^x > 8. Розв’язання: 2^x > 2³ → x > 3.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Розв'язування рівнянь і нерівностей.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/wP0l7vVIkKI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Основні тригонометричні функції": `
    <h2><strong>Основні тригонометричні функції</strong></h2>
    <p>До основних тригонометричних функцій належать синус, косинус і тангенс:</p>
    <ul>
        <li><strong>sin x:</strong> Відношення протилежного катета до гіпотенузи.</li>
        <li><strong>cos x:</strong> Відношення прилеглого катета до гіпотенузи.</li>
        <li><strong>tan x:</strong> Відношення sin x до cos x (cos x ≠ 0).</li>
    </ul>
    <p>Графіки синуса й косинуса мають період 2π, тангенса — π.</p>
    <p><strong>Приклад:</strong> Знайти значення sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Основні тригонометричні функції.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/j8GyLHDkjoY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Властивості тригонометричних функцій": `
    <h2><strong>Властивості тригонометричних функцій</strong></h2>
    <p><strong>Основні властивості:</strong></p>
    <ul>
        <li>Функція sin x є непарною та періодичною (період 2π).</li>
        <li>Функція cos x парна та періодична (період 2π).</li>
        <li>Функція tan x непарна, має період π і розриви при x = π/2 + kπ.</li>
    </ul>
    <p>Властивості дозволяють будувати графіки, аналізувати поведінку функцій і розв'язувати рівняння.</p>
    <p><strong>Приклад:</strong> Доведіть, що sin(-x) = -sin x і cos(-x) = cos x.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Властивості тригонометричних функцій.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/NdGCFTuICTo" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Тригонометричні рівняння та нерівності": `
    <h2><strong>Тригонометричні рівняння та нерівності</strong></h2>
    <p>Тригонометричні рівняння мають вигляд sin x = a, cos x = b, tan x = c. Основні методи розв’язання:</p>
    <ul>
        <li>Використання основних тригонометричних тотожностей.</li>
        <li>Зведення рівняння до простішого виду.</li>
        <li>Врахування періодичності функцій.</li>
    </ul>
    <p><strong>Приклад:</strong> Розв'язати рівняння sin x = 1/2. Розв’язання: x = π/6 + 2kπ або x = 5π/6 + 2kπ, де k ∈ Z.</p>
    <p><strong>Тригонометричні нерівності:</strong> Розв’язуються за тими ж принципами, з урахуванням інтервалів, де функція зростає або спадає.</p>
    <p><strong>Приклад:</strong> Розв'язати нерівність cos x > 0. Відповідь: x ∈ (-π/2 + 2kπ, π/2 + 2kπ), де k ∈ Z.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Тригонометричні рівняння та нерівності.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/BAxSYqiqerM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
    "Циліндр, конус, куля": `
    <h2><strong>Циліндр, конус, куля</strong></h2>
    <p><strong>Циліндр</strong> — це тіло, утворене обертанням прямокутника навколо однієї зі сторін. Основні елементи: висота, радіус основи, твірна.</p>
    <p><strong>Конус</strong> — тіло, утворене обертанням прямокутного трикутника навколо одного з катетів. Основні елементи: висота, радіус основи, твірна.</p>
    <p><strong>Куля</strong> — це тіло, утворене обертанням півкола навколо його діаметра. Радіус кулі — відстань від центра до будь-якої точки поверхні.</p>
    <p><strong>Приклад:</strong> Знайти об'єм кулі з радіусом 3 см. Відповідь: V = (4/3)πr³ = (4/3)π3³ = 36π см³.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Циліндр, конус, куля.jpg" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/PfROiucZscE" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Обчислення площ і об'ємів": `
    <h2><strong>Обчислення площ і об'ємів</strong></h2>
    <p>Основні формули:</p>
    <ul>
        <li><strong>Циліндр:</strong> Площа поверхні: S = 2πr(h + r), об'єм: V = πr²h.</li>
        <li><strong>Конус:</strong> Площа поверхні: S = πr(l + r), об'єм: V = (1/3)πr²h.</li>
        <li><strong>Куля:</strong> Площа поверхні: S = 4πr², об'єм: V = (4/3)πr³.</li>
    </ul>
    <p><strong>Приклад:</strong> Знайти площу поверхні конуса з радіусом 4 см і твірною 5 см. Відповідь: S = π × 4 × (5 + 4) = 36π см².</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Обчислення площ і об'ємів.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/qx3npegXIVk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Точки, вектори в просторі": `
    <h2><strong>Точки, вектори в просторі</strong></h2>
    <p>Просторові вектори характеризуються довжиною й напрямом. Координати вектора задаються як різниця координат кінцевої і початкової точок: <strong>AB(x₂ - x₁, y₂ - y₁, z₂ - z₁).</strong></p>
    <p><strong>Операції:</strong></p>
    <ul>
        <li><strong>Додавання:</strong> (x₁, y₁, z₁) + (x₂, y₂, z₂) = (x₁ + x₂, y₁ + y₂, z₁ + z₂).</li>
        <li><strong>Скалярний добуток:</strong> a · b = x₁x₂ + y₁y₂ + z₁z₂.</li>
    </ul>
    <p><strong>Приклад:</strong> Знайти довжину вектора AB(2, 3, 6). Відповідь: |AB| = √(2² + 3² + 6²) = √49 = 7.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Точки, вектори в просторі.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/x5bP6D7JqJ8" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,

    "Рівняння площини та прямої": `
    <h2><strong>Рівняння площини та прямої</strong></h2>
    <p><strong>Рівняння площини:</strong> ax + by + cz + d = 0, де (a, b, c) — координати нормального вектора площини.</p>
    <p><strong>Рівняння прямої в просторі:</strong></p>
    <ul>
        <li>Канонічне рівняння: (x - x₁)/l = (y - y₁)/m = (z - z₁)/n, де (l, m, n) — напрямні косинуси.</li>
        <li>Параметричне рівняння: x = x₁ + lt, y = y₁ + mt, z = z₁ + nt.</li>
    </ul>
    <p><strong>Приклад:</strong> Скласти рівняння прямої, що проходить через точку (1, 2, 3) у напрямі вектора (4, -1, 2). Відповідь: x = 1 + 4t, y = 2 - t, z = 3 + 2t.</p>
    <div class="content_Photo_video">
    <img class="photo_formuly" src="static/images/Рівняння площини та прямої.png" alt="Приклад фото">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/BDcb0-_mfI0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
    `,
};

topicItems.forEach(item => {
    item.addEventListener('click', () => {
        const topic = item.dataset.topic;
        modalContent.innerHTML = topics[topic] || "<p>Матеріал відсутній.</p>";
        modal.style.display = "block";
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});


sendMessage.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (!userMessage) return;


    const userBubble = `<div><strong>Ви:</strong> ${userMessage}</div>`;
    chatBox.innerHTML += userBubble;

    fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, topic: document.getElementById('topicContent').innerText })
    })
        .then(response => response.json())
        .then(data => {
            const botBubble = `<div><strong>Бот:</strong> ${data.response}</div>`;
            chatBox.innerHTML += botBubble;
            chatBox.scrollTop = chatBox.scrollHeight;
        });

    userInput.value = '';
});