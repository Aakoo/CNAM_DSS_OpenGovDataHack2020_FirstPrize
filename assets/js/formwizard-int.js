$(document).ready(function(){
    'use strict';

    var $info_form = $('#info-form');            
    $info_form.validationEngine();            
    $info_form.formToWizard({
        submitButton: 'SaveAccount',
        showProgress: true,
        nextBtnName: 'Next',
        prevBtnName: 'Previous',
        showStepNo: false,
        validateBeforeNext: function() {
            return $info_form.validationEngine('validate');
        }
    });
        
    $('#txt_stepNo').change(function() {
        $info_form.formToWizard('GotoStep', $(this).val());
    });
    
    $('#btn_next').on('click',function() {
        $info_form.formToWizard('NextStep');
    });
    
    $('#btn_prev').on('click',function() {
        $info_form.formToWizard('PreviousStep');
    });
                          
});