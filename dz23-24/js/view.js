define (
  'view',
  ['model','jquery','template'],
  function(model){
    function View(model) {
      var self = this;

      function init() {

        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        self.elements = {
          input: $('.item-value'),
          addBtn: $('.item-add'),
          listContainer: $('.item-list')
        };
        self.renderList(model.data);
      };


      self.renderList = function(data) {
        var list = tmpl($('#list-template').html(), {
          data: data
        });
        self.elements.listContainer.html(list);
      };

      init();
    }
    return new View(model);
  });