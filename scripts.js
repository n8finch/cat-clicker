(function ($) {

  $(document).ready(function () {

    //Write a Cat class with an incrementing function

    var $cat1NameElm = '#cat-1-name',
        $cat1CounterElm = '#number-clicks-cat-1',
        $cat1ImgElem = '#cat-1-pic',
        $cat2NameElm = '#cat-2-name',
        $cat2CounterElm = '#number-clicks-cat-2',
        $cat2ImgElem = '#cat-2-pic';

    var cat1 = {
      name: 'Nate',
      count: 0,
      nameblock: '#cat-1-name',
      counterblock: 'number-clicks-cat-1'
    };

    var cat2 = {
      name: 'Megan',
      count: 0,
      nameblock: '#cat-1-name',
      counterblock: 'number-clicks-cat-1'
    };

    console.log(cat1.count);

    $($cat1NameElm).text(cat1.name);
    $($cat1CounterElm).text(cat1.count);
    $($cat2NameElm).text(cat2.name);
    $($cat2CounterElm).text(cat2.count);

    $($cat1ImgElem).click(function () {
      cat1.count += 1;
      $($cat1CounterElm).text(cat1.count);
    });

    $($cat2ImgElem).click(function () {
      cat2.count += 1;
      $($cat2CounterElm).text(cat2.count);
    });

  });

}(jQuery));