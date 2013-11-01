// signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('select[name="state"]');
	var option;
	var idx;
	var state;
	for ( idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}
	$('.signup-form').submit(validate);
	$('.cancel-signup').click(cancel);
	$('.btn-abandon').click(function(){
   		window.location = 'http://www.google.com';
	});
}); //on Ready

function cancel(){
	$('.cancel-signup-modal').modal();


	//window.location = 'http://www.google.com';
}// cancel form

function validate(){
	var signupForm = $(this);
	var addrInput = signupForm.find('input[name = "addr-1"]');
	var addrValue = addrInput.val();
	if(addrValue && addrValue.trim().length > 0){
		var zipInput = signupForm.find('input[name = "zip"]');
		var zipValue = zipInput.val();
		if(zipValue && zipValue.trim().length > 0){
			return true;
		}else{
			alert("must enter zip!");
			return false;
		}
	}else{
		return true;
	}
}//form validat