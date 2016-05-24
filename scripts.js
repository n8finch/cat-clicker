(function ($) {

  $(document).ready(function () {
    var $counter = '#number-clicks';
    var $currentNum = 0;
    var $catPic = '#cat-pic';

    $($counter).text($currentNum);

    $($catPic).click(function () {
      $currentNum += 1;
      $($counter).text($currentNum);
    })

  });

}(jQuery));