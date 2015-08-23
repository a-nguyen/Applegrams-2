var BoardView = Backbone.View.extend({

  initialize: function () {
    this.render();

    var X = Y = 0, config = this.model, that = this;
    $('rect').on('click', function (event) {
      if (X === 0 && $(event.currentTarget).attr('fill') !== 'white') {
        X = Number($(event.currentTarget).attr('config_x'));
        Y = Number($(event.currentTarget).attr('config_y'));
      } else {
        if ($(event.currentTarget).attr('fill') === 'white') {
          var x = Number($(event.currentTarget).attr('config_x'));
          var y = Number($(event.currentTarget).attr('config_y'));
          config.moveToEmptySpot(X, Y, x, y);
          X = Y = 0;
          that.initialize();
        } else {
          var x = Number($(event.currentTarget).attr('config_x'));
          var y = Number($(event.currentTarget).attr('config_y'));
          config.switchPieces(x, y, X, Y);
          X = Y = 0;
          that.initialize();
        }
      }
    });
   

  },

  render: function () {
    this.$el.html('');

    this.dim = 1200;
    this.svgIt();
    this.tileIt();

  },

  svgIt: function () {
    d3.select('body').append('svg')
              .attr({
                'width': this.dim,
                'height': this.dim,
              });

    var space = this.spacing = this.dim / 20;
    // for (var i = 0; i < 20; i++) {
    //   d3.select('svg').append('line').attr({
    //     'x1': space,
    //     'x2': space,
    //     'y1': 0,
    //     'y2': this.dim,
    //     'stroke-width': 2,
    //     'stroke': 'black'
    //   });
    //   d3.select('svg').append('line').attr({
    //     'x1': 0,
    //     'x2': this.dim,
    //     'y1': space,
    //     'y2': space,
    //     'stroke-width': 2,
    //     'stroke': 'black'
    //   });
    //   space += this.spacing;
    // }
  },

  tileIt: function () {
    d3.selectAll('rect').remove();
    d3.selectAll('text').remove();
    var greenCount = letterCount = 0;
    var lettersOnGrid = this.model.letterMatrix;
    var colors = this.model.colorMatrix;
    for (var y = 0; y < 20; y++) {
      for (var x = 0; x < 20; x++) {
          d3.select('svg').append('rect').attr({
            'x': x * this.spacing,
            'y': y * this.spacing,
            'height': this.spacing,
            'width': this.spacing,
            'fill': 'white',
            'config_y': y,
            'config_x': x
          });
        if (lettersOnGrid[y][x] !== 0) {
          letterCount++
          d3.select('svg').append('text').attr({
            'x': x * this.spacing + this.spacing * .05,
            'y': y * this.spacing + this.spacing * .80,
            'font-size': this.spacing
          }).text(lettersOnGrid[y][x]);
          d3.select('svg').append('rect').attr({
            'x': x * this.spacing,
            'y': y * this.spacing,
            'height': this.spacing,
            'width': this.spacing,
            'fill': 'yellow',
            'fill-opacity': .3,
            'rx': 15,
            'ry': 15,
            'config_y': y,
            'config_x': x
          });
          if (colors[y][x] > 0) {
            d3.select('svg').append('rect').attr({
              'x': x * this.spacing,
              'y': y * this.spacing,
              'height': this.spacing,
              'width': this.spacing,
              'fill': 'green',
              'fill-opacity': .3,
              'rx': 15,
              'rc': 15,
              'config_y': y,
              'config_x': x
            });
            greenCount++;
          }
        }
      }
    }
    if (letterCount === greenCount) {
      window.alert('You finished!');
    }
  }

});