
<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <title>Карта Києва з Leaflet</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Підключення стилів Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

    <!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<link rel="stylesheet" href="css/style.css">

<script src="https://cdn.tailwindcss.com"></script> <!-- tailwindcss -->

</head>

<body>

<header>
<h1>Task    </h1>
</header>


<div class= "maps-container"> 
    <div id="map"></div>
    <div id="map2"></div>
</div>



<!-- Кнопка для показу повідомлення -->
<button id="myBtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
  Tailwind css
</button>

<!-- Повідомлення з хрестиком -->
<div id="result" class="bg-green-100 hover:bg-green-300 transition text-green-800 px-4 py-2 mb-3 rounded mt-3 flex justify-between items-center hidden">
  <span>✔️ Операція успішна!</span>
  <button id="closeResult" class="text-green-800  hover:text-blue-400 transition duration-500 ease-in-out font-bold text-xl leading-none">&times;</button>
</div>

<!--knopka bootstrap-->
<button id="btn" class="btn btn-primary">Bootstrap</button>

<!-- alert bootstrap-->
<div id="msg" class=" alert alert-warning alert-dismissible fade show mt-3" style="display:none;">Вітаю з Bootstrap!

<!-- close alert-->
<button type="button" class="close" id="closeMsg">&times;</button></div>

<!-- Кнопка -->
<button class="btn btn-info" data-toggle="modal" data-target="#myModal">Відкрити модальне (Bootstrap)</button>

<!-- Модальне вікно -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Привіт</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">Це вікно модальне.</div>
    </div>
  </div>
</div>




<footer><p>;)</p></footer>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script> <!-- Підключення бібліотеки Leaflet -->

<script src="http://localhost:8080/js/app.js"></script>






<!-- JS -->
<script>
  // показати повідомлення
  document.getElementById('myBtn').addEventListener('click', function () {
    document.getElementById('result').classList.remove('hidden');
  });

  // сховати повідомлення
  document.getElementById('closeResult').addEventListener('click', function () {
    document.getElementById('result').classList.add('hidden');
  });
</script>

<!-- JS з jQuery -->
<script>
  $('#myBtn').click(function() {
    $('#result').fadeIn();
  });
</script>

<script> 
  $('#btn').click(function() {
    $('#msg').fadeIn(); 
  });

$('#closeMsg').click(function (){
    $('#msg').fadeOut();
});

</script> <!-- open alert and ховає алерт но не видаляє -->


</body>
</html>
