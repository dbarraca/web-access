meteor mongo
db.duts.update(
  {"index" : "1"},
  {$set:
    {
      "temp" : 150 * Math.random(),
      "VDD" : Math.random(),
      "VCC" : Math.random(),
      "VIO" : Math.random(),
      "NPOR" : Math.random(),
      "INT" : Math.random(),
      "EWOK" : Math.random(),
      "SLAVE" : Math.random(),
      "ADC3" : Math.random(),
      "PSR1" : Math.random(),
      "PSR2" : Math.random(),
      "PSR3" : Math.random(),
      "NSR" : Math.random(),
      "D5V" : Math.random(),
      "VLDO" : Math.random(),
      "VCP" : Math.random(),
      "VISO" : Math.random(),
      "BSR" : Math.random(),
      "PLR" : Math.random(),
      "SPABC" : Math.random(),
      "VCM" : Math.random(),
      "DSA12" : Math.random(),
    }
  }
);
timeout 5 > NUL