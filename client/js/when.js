$( function() {
    $( "#datepicker" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        onSelect: function(){
            const date = document.getElementById('dateField')
            var currentDate = $("#datepicker").datepicker("getDate")
            date.value = $.datepicker.formatDate("mm-dd-yy", currentDate)
        }
    });
    
} );

