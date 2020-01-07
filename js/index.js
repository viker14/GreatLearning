//Form validation
function validate() {
  if (document.myForm.name.value == "") {
    alert("Please provide your name!");
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    alert("Please provide your Email!");
    document.myForm.email.focus();
    return false;
  }

  if (
    document.myForm.mobile.value == "" ||
    isNaN(document.myForm.mobile.value) ||
    document.myForm.mobile.value.length < 10
  ) {
    alert("Please provide a valid Phone Number");
    document.myForm.mobile.focus();
    return false;
  }

  if (document.myForm.workExperience.value == "-1") {
    alert("Please select a valid Work Experience!");
    return false;
  }

  if (document.myForm.designation.value == "") {
    alert("Please provide your Current Desigation!");
    document.myForm.designation.focus();
    return false;
  }

  if (document.myForm.organization.value == "") {
    alert("Please provide your Current Organisation!");
    document.myForm.organization.focus();
    return false;
  }

  if (document.myForm.qualification.value == "-1") {
    alert("Please select your Education Qualification!");
    return false;
  }

  return true;
}

//sticky footer
$(function() {
  $(window).scroll(function() {
    ($(document).scrollTop() + $(window).height()) / $(document).height() > 0.44
      ? $("footer").fadeIn()
      : $("footer").fadeOut();
  });
});

//carousel
$(document).ready(function() {
  $("#quote-carousel").carousel({
    pause: true
  });
});
