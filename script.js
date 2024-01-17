$("#form").validate({
    rules:{
        name:{
            minlength: 2
        },
        messages: {
            required: "please enteryour name",
            minlength: "name atleast 2 characters"
          }
    }
    
   });