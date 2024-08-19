/// ALKU ///
  
  /// Ylimääräisten välilyöntien poistot ///
  
  /* Poista asiakkaan muokkausnäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä*/
  $(document).ready(function() {
    $('body#pat_memberentrygen.pat input').blur(function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');     
       $(this).val(tmp);
    });
  });
  
  /* Poista asiakkaan muokkausnäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä*/
  $(document).ready(function() {
    $('body#pat_memberentrygen.pat textarea').blur(function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');     
       $(this).val(tmp);
    });
  });
  
  /* Poista niteen muokkausnäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä*/
  $(document).ready(function() {
    $('body#cat_additem.cat input').blur(function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');
       $(this).val(tmp);
    });
  });
  
  /* Poista kausijulkaisun vastaanottonäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä*/
  $(document).ready(function() {
    $('body#ser_serials-edit.ser input').blur(function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');
       tmp = tmp.replace(/(^[1-2][0-9]{3}) *: */, '$1 : ');
       $(this).val(tmp);
    });
  });
  
  /* Poista hankinnassa uuden tilauksen niteen muokkausnäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä */
  /* Tämä ei toimi */
  $(document).ready(function() {
    $('body#acq_neworderempty.acq').on("blur", "input", function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');
       $(this).val(tmp);
    });
  });
  
  /* Poista hankinnassa uuden tilauksen niteen muokkausnäytön kentistä välilyönnit alusta, lopusta ja useammat peräkkäiset välilyönnit välistä */ 
  /* Tämä ei toimi */
  $(document).ready(function() {
    $('body#acq_neworderempty.acq').on("blur", "textarea", function() {
       var tmp = $(this).val();
       tmp = tmp.replace(/^ +/, '');
       tmp = tmp.replace(/ +$/, '');
       tmp = tmp.replace(/  */g, ' ');
       $(this).val(tmp);
    });
  });
  
  /// LOPPU ///
