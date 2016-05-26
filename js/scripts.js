(function ($) {

  $(document).ready(function () {

    /**
     * Create a Cat Class
     */

    class Cat {
      constructor(name, img, id, clicks) {
        this.name = name;
        this.img = img;
        this.ID = 'cat-' + id;
        this.clicks = clicks;
      }

      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    /**
     * Get all cat objects into an array
     */

    var cats = [];

    var numMenuCats = 5;

    for (i = 1; i < numMenuCats + 1; i++) {

      var names = ['Bo Jangles', 'Fluffy', 'Bigs & Figs', 'Mittens', 'Frank']

      var name = names[i - 1];
      var img = 'img/cat' + i + '.jpg';

      cats.push(new Cat(name, img, i, 0));
    }

    /**
     * Append each Cat to the
     */
    cats.forEach(function (cat) {
      var menuItem = '';
      var catName = cat.name;
      var liString = catName.replace(/ /g, '').toLowerCase();

      menuItem += '<li id="' + cat.ID + '" class="menu-item">';
      menuItem += '<img class="menu-item-img" src="' + cat.img + '"/>';
      menuItem += '<span class="menu-item-name"> ' + catName + ' </span>';
      menuItem += '</li>';

      $('#cat-menu').append(menuItem);

    });

    /**
     * Add click listener and add this to the right side box
     */

    $('.menu-item').click(function () {

      // First, remove the cat flavor if it exists
      $('.cat-flavor').hide();

      //Get the current ID for the cat
      var idThis = this.id;
      idThis = parseInt(idThis.slice(-1));
      idThis = idThis - 1;

      //Get the current Cat from the cats array
      var currentCat = cats[idThis];

      var catFlavor = '';

      //Create the element to append
      catFlavor += '<div class="cat-flavor">';
      catFlavor += '<h2>' + currentCat.name + '</h2>'
      catFlavor += '<h3>Click Count: <span class="click-count">' + currentCat.clicks + '</span></h3>';
      catFlavor += '<img id="current-flavor-img" src=' + currentCat.img + '/>';
      catFlavor += '</div>';

      $('#intro-text').append(catFlavor);

      /**
       * On clicking the cat pic, show and store the new click count
       */

      $('#current-flavor-img').click(function () {

        //TODO fix the click counts after the switch!!! The count is stored in the cats array, and can be referenced, but the clicks on new cat flavors aren't showing or recording.

        currentCat.clicks += 1;
        
        $('.click-count').text(currentCat.clicks);
        console.log(currentCat.clicks);
      });

      console.log(currentCat);
    });


  }); //end document.ready(function)...

}(jQuery));