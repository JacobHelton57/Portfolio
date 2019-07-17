// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	'use strict';
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

//Checks if other is selected for purpose section of form, if so, display textbox
var otherCheckbox = document.getElementById('inputPurposeOther');
var otherText = document.getElementById('inputPurposeOtherText');

var checkboxes = document.getElementById('purposeCheckGroup');
checkboxes.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
  } else {
    otherText.style.visibility = 'hidden';
  }
};


//Checks if email response is selected
// var emailResponse = document.getElementById('emailResponse');
//
// emailResponse.onchange = function() {
// 	if (emailResponse.checked) {
// 		emailResponse.value = "true";
// 	} else {
// 		emailResponse.value = "false";
// 	}
// };
