
var selectUser = function() {
  $('#tagged').val($(this).attr('data-value'));
  $('#userList li a, .ui-input-search').not($(this)).hide();
  $(this).buttonMarkup({ icon: 'delete', iconpos: 'right'});

  $('#userList li a').off('click');
  $(this).on('click', unselectUser);
};

var unselectUser = function() {
  $(this).buttonMarkup({ icon: false});
  $('#userList li a, .ui-input-search').not($(this)).show();
  $('#tagged').val("");

  $(this).off('click');
  $('#userList li a').on('click', selectUser);
};

// $('#userList').delegate('li a', 'click', selectUser);

$('#saveButton').click(function() {
  if ($('#tagged').val() !== "") {
    $('#tagForm').submit();
  }
  else {
    $('#popup').popup('open');
  }
});

var users = ["Asif", "Cameron", "Pat", "Demo"];


var usersHtml = function() {
  return users.map(function(name) {
    return '<li data-icon="false"><a href="#" data-value="'+name+'">'+name+'</a></li>'
  });
};

$('#userList').on('filterablebeforefilter', function(e, data) {
  $(this).html(usersHtml());
  $('#userList li a').on('click', selectUser);
});
