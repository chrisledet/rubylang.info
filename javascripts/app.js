$('#download').live('click', function(e){
  var WIN_INSTALLER = 'http://rubyinstaller.org/downloads/';
  var SRC = 'http://ftp.ruby-lang.org/pub/ruby/1.9/ruby-1.9.2-p290.tar.gz';
  if (navigator.userAgent.indexOf("Mac") != -1) {
    window.location = SRC;
  }
  else if (navigator.userAgent.indexOf("Win") != -1) {
    window.location = 'http://rubyinstaller.org/downloads/';
  }
  else if (navigator.userAgent.indexOf("Linux") != -1) {
    window.location = SRC;
  }
});