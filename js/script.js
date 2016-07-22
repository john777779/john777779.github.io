
(function(){
    var info= document.querySelector('.info'),
        filmBox = document.querySelector('.films'),
        load = document.querySelector('.boxInfo'),
        li = document.createElement('li'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        spinner = document.createElement("div");

    var id = 1;

    loadHero(id);

    function nextHero(e) {
      if ( id < 88 ) {
        id++;
        removeInfo();
        loadHero(id);
      } if ( id === 2 ) {
        prev.removeAttribute('disabled');
      } if ( id === 88 ) {
        next.setAttribute('disabled', 'disabled');
      };
    };

    function prevHero(e) {
      if ( id > 1 ) {
        id--;
        removeInfo();
        loadHero(id);
      } if ( id === 1 ) {
        prev.setAttribute('disabled', 'disabled');
      } if ( id === 87 ) {
        next.removeAttribute('disabled');
      };
    };

    function removeInfo (){
      info.textContent = '';
      filmBox.textContent = '';
    };

    function loader() {
      load.setAttribute('style', 'opacity: 0');
      spinner.classList.add("loading");
      document.body.appendChild(spinner);
    };

    function removeLoader() {
      load.setAttribute('style', 'opacity: 1');
      load.setAttribute('style', 'transition: all 1s ease-out');
      spinner.remove();
    };

    function loadHero(id) {
      loader();
      return fetch('http://swapi.co/api/people/'+ id + '/', {method: 'get'})
        .then(function(response){
          return response.json();
        })
        .then(function(heroes) {
          createHeroInfo(heroes);
            return heroes.films;
        })
        .then(function(films){
          return Promise.all(films.map(function(film){
              return loadFilm(film);
            })
          );
        })
        .then(function(episodes){
          var filmsName = episodes.map(function(f) {
            return f.name;
          });
          createFilmInfo(filmsName);
        })
        .then(function(){
          removeLoader();
        })
        .catch(function() {
          removeLoader();
          info.textContent = 'Hero not found. Click next';
        });
    };

    function loadFilm(url) {
      return fetch(url, {method: 'get'})
        .then(function(response){
          return response.json();
        })
        .then(function(films) {
          return {
            name: "Episode " + films.episode_id + ": " + films.title
          };
        });
    };

    function createHeroInfo(heroes) {
      var heroesArr = ["Name: " + heroes.name, "Height: " + heroes.height, "Mass: " + heroes.mass, "Hair Color: " + heroes.hair_color,
        "Skin Color: " + heroes.skin_color, "Eye Color: " + heroes.eye_color, "Birth Year: " + heroes.birth_year, "Gender: " + heroes.gender];
      var ul = document.createElement('ul');
      heroesArr.forEach(function(val){
        var li = document.createElement('li');
        li.textContent = val;
        ul.appendChild(li);
      });
      info.appendChild(ul);
    };

    function createFilmInfo(films) {
      var ul = document.createElement('ul');
      films.forEach(function(film) {
        var li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
      });
      filmBox.appendChild(ul);
    };

    next.addEventListener('click', nextHero);
    prev.addEventListener('click', prevHero);

})();
