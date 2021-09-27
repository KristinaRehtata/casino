<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/img/fvcon.ico" type="image/png">
  <link rel="stylesheet" href="/assets/css/normalize.css">
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="stylesheet" href="/assets/css/media.css">
  <title>Casino Play</title >
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="logo">
        <img src="assets/img/logo.png" alt="">
      </div>
      <div class="content-info">
        <h1 class="content-info__main">TOP 5 REAL Money Online Casino Bonus List!</h1>
        <h4 class="content-info__description">Play online slots for real money at trusted onine casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!</h4>
        <h3 class="content-info__bonus">10,302 Claimed Bonuses And Counting!</h3>
      </div>
      <div class="menu__container">
        <div class="menu__list">
          <div class="menu__item-title">casino</div>
          <div class="menu__item-title">welcome bonus</div>
          <div class="menu__item-title">user rating</div>
          <div class="menu__item-title">rating</div>
          <div class="menu__item-title">play now</div>
        </div>
        <div class="game__container"></div>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/assets/js/main.js"></script>
  <?php 
   $data = $_GET['data'];
   $log = data . print_r($data, true);
   file_put_contents(__DIR__ . '/click.log', $log . PHP_EOL, FILE_APPEND);
  ?>
</body>
</html>