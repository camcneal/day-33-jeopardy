import Backbone from 'backbone';
import $ from 'jquery';
import cat from '../models/categoryModel';

export default Backbone.Collection.extend({
  model: cat,
  //get function
  customGet (){
      $.ajax({
        type: "GET",
        url: "http://jservice.io/api/category?id=100",
        success: (response) => {
            // console.log(response);
            this.add(response);
            $.ajax({
              type: "GET",
              url: "http://jservice.io/api/category?id=120",
              success: (response) => {
                  // console.log(response);
                  this.add(response);
                  $.ajax({
                    type: "GET",
                    url: "http://jservice.io/api/category?id=125",
                    success: (response) => {
                        // console.log(response);
                        this.add(response);
                        $.ajax({
                          type: "GET",
                          url: "http://jservice.io/api/category?id=800",
                          success: (response) => {
                              // console.log(response);
                              this.add(response);
                              $.ajax({
                                type: "GET",
                                url: "http://jservice.io/api/category?id=333",
                                success: (response) => {
                                    // console.log(response);
                                    this.add(response);
                                    $.ajax({
                                      type: "GET",
                                      url: "http://jservice.io/api/category?id=78",
                                      success: (response) => {
                                          // console.log(response);
                                          this.add(response);
                                      }
                                    })
                                }
                              })
                          }
                        })
                    }
                  })
              }
            })
        }
      })
  },


});
