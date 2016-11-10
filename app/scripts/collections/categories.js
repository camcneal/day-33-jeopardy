import Backbone from 'backbone';
import $ from 'jquery';


export default Backbone.Collection.extend({
  //get function
  customGet (){
      $.ajax({
        type: "GET",
        // url: "http://jservice.io/api/clues",
        url: "http://jservice.io/api/category?id=275",
        success: (response) => {
            this.add(response)
        }
      })
  },


});
