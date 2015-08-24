var Board = Backbone.Model.extend({

  initialize: function () {

      //also TEMPORARY until Anthony shows me how to search all scrabble words
    this.words = ["AA","AB","AD","AE","AG","AH","AI","AL","AM","AN","AR","AS","AT","AW","AX","AY","BA","BE","BI","BO","BY","DE","DO","ED","EF","EH","EL","EM","EN","ER","ES","ET","EX","FA","FE","GO","HA","HE","HI","HM","HO","ID","IF","IN","IS","IT","JO","KA","KI","LA","LI","LO","MA","ME","MI","MM","MO","MU","MY","NA","NE","NO","NU","OD","OE","OF","OH","OI","OM","ON","OP","OR","OS","OW","OX","OY","PA","PE","PI","QI","RE","SH","SI","SO","TA","TI","TO","UH","UM","UN","UP","US","UT","WE","WO","XI","XU","YA","YE","YO","ZA", "AAH","AAL","AAS","ABA","ABO","ABS","ABY","ACE","ACT","ADD","ADO","ADS","ADZ","AFF","AFT","AGA","AGE","AGO","AGS","AHA","AHI","AHS","AID","AIL","AIM","AIN","AIR","AIS","AIT","ALA","ALB","ALE","ALL","ALP","ALS","ALT","AMA","AMI","AMP","AMU","ANA","AND","ANE","ANI","ANT","ANY","APE","APO","APP","APT","ARB","ARC","ARE","ARF","ARK","ARM","ARS","ART","ASH","ASK","ASP","ASS","ATE","ATT","AUK","AVA","AVE","AVO","AWA","AWE","AWL","AWN","AXE","AYE","AYS","AZO","BAA","BAD","BAG","BAH","BAL","BAM","BAN","BAP","BAR","BAS","BAT","BAY","BED","BEE","BEG","BEL","BEN","BES","BET","BEY","BIB","BID","BIG","BIN","BIO","BIS","BIT","BIZ","BOA","BOB","BOD","BOG","BOO","BOP","BOS","BOT","BOW","BOX","BOY","BRA","BRO","BRR","BUB","BUD","BUG","BUM","BUN","BUR","BUS","BUT","BUY","BYE","BYS","CAB","CAD","CAM","CAN","CAP","CAR","CAT","CAW","CAY","CEE","CEL","CEP","CHI","CIG","CIS","COB","COD","COG","COL","CON","COO","COP","COR","COS","COT","COW","COX","COY","COZ","CRU","CRY","CUB","CUD","CUE","CUM","CUP","CUR","CUT","CWM","DAB","DAD","DAG","DAH","DAK","DAL","DAM","DAN","DAP","DAW","DAY","DEB","DEE","DEF","DEL","DEN","DEV","DEW","DEX","DEY","DIB","DID","DIE","DIF","DIG","DIM","DIN","DIP","DIS","DIT","DOC","DOE","DOG","DOL","DOM","DON","DOR","DOS","DOT","DOW","DRY","DUB","DUD","DUE","DUG","DUH","DUI","DUN","DUO","DUP","DYE","EAR","EAT","EAU","EBB","ECU","EDH","EDS","EEK","EEL","EFF","EFS","EFT","EGG","EGO","EKE","ELD","ELF","ELK","ELL","ELM","ELS","EME","EMS","EMU","END","ENG","ENS","EON","ERA","ERE","ERG","ERN","ERR","ERS","ESS","ETA","ETH","EVE","EWE","EYE","FAB","FAD","FAG","FAN","FAR","FAS","FAT","FAX","FAY","FED","FEE","FEH","FEM","FEN","FER","FES","FET","FEU","FEW","FEY","FEZ","FIB","FID","FIE","FIG","FIL","FIN","FIR","FIT","FIX","FIZ","FLU","FLY","FOB","FOE","FOG","FOH","FON","FOP","FOR","FOU","FOX","FOY","FRO","FRY","FUB","FUD","FUG","FUN","FUR","GAB","GAD","GAE","GAG","GAL","GAM","GAN","GAP","GAR","GAS","GAT","GAY","GED","GEE","GEL","GEM","GEN","GET","GEY","GHI","GIB","GID","GIE","GIG","GIN","GIP","GIT","GNU","GOA","GOB","GOD","GOO","GOR","GOS","GOT","GOX","GOY","GUL","GUM","GUN","GUT","GUV","GUY","GYM","GYP","HAD","HAE","HAG","HAH","HAJ","HAM","HAO","HAP","HAS","HAT","HAW","HAY","HEH","HEM","HEN","HEP","HER","HES","HET","HEW","HEX","HEY","HIC","HID","HIE","HIM","HIN","HIP","HIS","HIT","HMM","HOB","HOD","HOE","HOG","HON","HOP","HOS","HOT","HOW","HOY","HUB","HUE","HUG","HUH","HUM","HUN","HUP","HUT","HYP","ICE","ICH","ICK","ICY","IDS","IFF","IFS","IGG","ILK","ILL","IMP","INK","INN","INS","ION","IRE","IRK","ISM","ITS","IVY","JAB","JAG","JAM","JAR","JAW","JAY","JEE","JET","JEU","JEW","JIB","JIG","JIN","JOB","JOE","JOG","JOT","JOW","JOY","JUG","JUN","JUS","JUT","KAB","KAE","KAF","KAS","KAT","KAY","KEA","KEF","KEG","KEN","KEP","KEX","KEY","KHI","KID","KIF","KIN","KIP","KIR","KIS","KIT","KOA","KOB","KOI","KOP","KOR","KOS","KUE","KYE","LAB","LAC","LAD","LAG","LAM","LAP","LAR","LAS","LAT","LAV","LAW","LAX","LAY","LEA","LED","LEE","LEG","LEI","LEK","LES","LET","LEU","LEV","LEX","LEY","LEZ","LIB","LID","LIE","LIN","LIP","LIS","LIT","LOB","LOG","LOO","LOP","LOT","LOW","LOX","LUG","LUM","LUV","LUX","LYE","MAC","MAD","MAE","MAG","MAN","MAP","MAR","MAS","MAT","MAW","MAX","MAY","MED","MEG","MEL","MEM","MEN","MET","MEW","MHO","MIB","MIC","MID","MIG","MIL","MIM","MIR","MIS","MIX","MOA","MOB","MOC","MOD","MOG","MOL","MOM","MON","MOO","MOP","MOR","MOS","MOT","MOW","MUD","MUG","MUM","MUN","MUS","MUT","MYC","NAB","NAE","NAG","NAH","NAM","NAN","NAP","NAW","NAY","NEB","NEE","NEG","NET","NEW","NIB","NIL","NIM","NIP","NIT","NIX","NOB","NOD","NOG","NOH","NOM","NOO","NOR","NOS","NOT","NOW","NTH","NUB","NUN","NUS","NUT","OAF","OAK","OAR","OAT","OBA","OBE","OBI","OCA","ODA","ODD","ODE","ODS","OES","OFF","OFT","OHM","OHO","OHS","OIL","OKA","OKE","OLD","OLE","OMS","ONE","ONO","ONS","OOH","OOT","OPE","OPS","OPT","ORA","ORB","ORC","ORE","ORS","ORT","OSE","OUD","OUR","OUT","OVA","OWE","OWL","OWN","OXO","OXY","PAC","PAD","PAH","PAL","PAM","PAN","PAP","PAR","PAS","PAT","PAW","PAX","PAY","PEA","PEC","PED","PEE","PEG","PEH","PEN","PEP","PER","PES","PET","PEW","PHI","PHT","PIA","PIC","PIE","PIG","PIN","PIP","PIS","PIT","PIU","PIX","PLY","POD","POH","POI","POL","POM","POO","POP","POT","POW","POX","PRO","PRY","PSI","PST","PUB","PUD","PUG","PUL","PUN","PUP","PUR","PUS","PUT","PYA","PYE","PYX","QAT","QIS","QUA","RAD","RAG","RAH","RAI","RAJ","RAM","RAN","RAP","RAS","RAT","RAW","RAX","RAY","REB","REC","RED","REE","REF","REG","REI","REM","REP","RES","RET","REV","REX","RHO","RIA","RIB","RID","RIF","RIG","RIM","RIN","RIP","ROB","ROC","ROD","ROE","ROM","ROT","ROW","RUB","RUE","RUG","RUM","RUN","RUT","RYA","RYE","SAB","SAC","SAD","SAE","SAG","SAL","SAP","SAT","SAU","SAW","SAX","SAY","SEA","SEC","SEE","SEG","SEI","SEL","SEN","SER","SET","SEW","SEX","SHA","SHE","SHH","SHY","SIB","SIC","SIM","SIN","SIP","SIR","SIS","SIT","SIX","SKA","SKI","SKY","SLY","SOB","SOD","SOL","SOM","SON","SOP","SOS","SOT","SOU","SOW","SOX","SOY","SPA","SPY","SRI","STY","SUB","SUE","SUK","SUM","SUN","SUP","SUQ","SYN","TAB","TAD","TAE","TAG","TAJ","TAM","TAN","TAO","TAP","TAR","TAS","TAT","TAU","TAV","TAW","TAX","TEA","TED","TEE","TEG","TEL","TEN","TET","TEW","THE","THO","THY","TIC","TIE","TIL","TIN","TIP","TIS","TIT","TOD","TOE","TOG","TOM","TON","TOO","TOP","TOR","TOT","TOW","TOY","TRY","TSK","TUB","TUG","TUI","TUN","TUP","TUT","TUX","TWA","words","TYE","UDO","UGH","UKE","ULU","UMM","UMP","UNS","UPO","UPS","URB","URD","URN","URP","USE","UTA","UTE","UTS","VAC","VAN","VAR","VAS","VAT","VAU","VAV","VAW","VEE","VEG","VET","VEX","VIA","VID","VIE","VIG","VIM","VIS","VOE","VOW","VOX","VUG","VUM","WAB","WAD","WAE","WAG","WAN","WAP","WAR","WAS","WAT","WAW","WAX","WAY","WEB","WED","WEE","WEN","WET","WHA","WHO","WHY","WIG","WIN","WIS","WIT","WIZ","WOE","WOG","WOK","WON","WOO","WOP","WOS","WOT","WOW","WRY","WUD","WYE","WYN","XIS","YAG","YAH","YAK","YAM","YAP","YAR","YAW","YAY","YEA","YEH","YEN","YEP","YES","YET","YEW","YID","YIN","YIP","YOB","YOD","YOK","YOM","YON","YOU","YOW","YUK","YUM","YUP","ZAG","ZAP","ZAS","ZAX","ZED","ZEE","ZEK","ZEP","ZIG","ZIN","ZIP","ZIT","ZOA","ZOO","ZUZ","ZZZ"];
    this.checkWord = function (word) {
      for (var i = 0; i < this.words.length; i++) {
        if (this.words[i] === word) {
          return true;
        }
      }
      return false;
    };

    this.removePiece = function (x, y) {
      var piece = this.matrix(x, y);
      this.matrix(x, y, 0);
      this.blueLetterMatrix[y][x] = 0;
      this.redLetterMatrix[y][x] = 0;
      this.updateWords(x, y);
      return piece;
    };

    this.updateWords = function (x, y) {
      this.colorWord(x+1, y);
      this.colorWord(x-1, y);
      this.colorWord(x, y+1);
      this.colorWord(x, y-1);
    },

    this.addPiece = function (x, y, letter) {
      this.matrix(x, y, letter);
      this.colorWord(x, y);
    };

    this.switchPieces = function (x, y, X, Y) {
      var hold = this.matrix(x, y);
      this.addPiece(x, y, this.matrix(X, Y));
      this.addPiece(X, Y, hold);
    };

    this.moveToEmptySpot = function (x, y, X, Y) {
      var hold = this.removePiece(x, y);
      this.addPiece(X, Y, hold);
    };

    this.matrix = function (x, y, value) {
      if (value !== undefined) {
        this.letterMatrix[y][x] = value;
      } else if (x < 20 && x > -1 && y < 20 && y > -1) {
        return this.letterMatrix[y][x];
      } else {
        return 0;
      }
    };

    this.blueWord = function (word) {
      for (var i = 1; i < word.length; i++) {
        var x = word[i][0], y = word[i][1];
        if (x < 20 && x > -1 && y < 20 && y > -1) {
          this.blueLetterMatrix[y][x] = 1;
        }
      }
    };

    this.unblueWord = function (word) {
      for (var i = 1; i < word.length; i++) {
        var x = word[i][0], y = word[i][1];
        if (x < 20 && x > -1 && y < 20 && y > -1) {
          this.blueLetterMatrix[y][x] = 0;
        }
      }
    };

    this.redWord = function (word) {
      for (var i = 1; i < word.length; i++) {
        var x = word[i][0], y = word[i][1];
        if (x < 20 && x > -1 && y < 20 && y > -1) {
          this.redLetterMatrix[y][x] = 1;
        }
      }
    };

    this.unredWord = function (word) {
      for (var i = 1; i < word.length; i++) {
        var x = word[i][0], y = word[i][1];
        if (x < 20 && x > -1 && y < 20 && y > -1) {
          this.redLetterMatrix[y][x] = 0;
        }
      }
    };

    this.colorWord = function (x, y) {
      var rowWord = this.grabRowWord(x, y);
      var colWord = this.grabColWord(x, y);
      if (rowWord) {
        if (this.checkWord(rowWord[0])) {
          this.blueWord(rowWord);
        } else {
          this.unblueWord(rowWord);
        }
      }
      if (colWord) {
        if (this.checkWord(colWord[0])) {
          this.redWord(colWord);
        } else {
          this.unredWord(colWord);
        }
      }
    };

    this.grabRowWord = function (x, y) {
      if (this.matrix(x, y) === 0) {
        return;
      }
      var atFirstLetter = this.matrix(x-1, y) === 0 ? true : false;
      while (atFirstLetter === false) {
        x--;
        atFirstLetter = this.matrix(x-1, y) === 0 ? true : false;
      }
      var string = this.matrix(x, y);
      var result = [string, [x, y]];
      var atLastLetter = this.matrix(x+1, y) === 0 ? true : false;
      while (atLastLetter === false) {
        x++;
        result[0] += this.matrix(x, y);
        result.push([x, y]);
        atLastLetter = this.matrix(x+1, y) === 0 ? true : false;
      }
      return result;
    };

    this.grabColWord = function(x, y) {
      if (this.matrix(x, y) === 0) {
        return;
      }
      var atFirstLetter = this.matrix(x, y-1) === 0 ? true : false;
      while (atFirstLetter === false) {
        y--;
        atFirstLetter = this.matrix(x, y-1) === 0 ? true : false;
      }
      var string = this.matrix(x, y);
      var result = [string, [x, y]];
      var atLastLetter = this.matrix(x, y+1) === 0 ? true : false;
      while (atLastLetter === false) {
        y++;
        result[0] += this.matrix(x, y);
        result.push([x, y]);
        atLastLetter = this.matrix(x, y+1) === 0 ? true : false;
      }
      return result;
    };

    this.makeEmptyMatrix = function (size) {
      var i, j, matrix = [];
      for (i = 0; i < size; i++) {
        var row = [];
        for (j = 0; j < size; j++) {
          row.push(0);
        }
        matrix.push(row);
      }
      return matrix;
    }

    //TEMPORARY until multiplayer server funcionality complete
    this.frequency = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","I","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z"];
    this.randomLetter = function () {
      return this.frequency[Math.floor(Math.random() * this.frequency.length)];
    };
    this.letterMatrix = this.makeEmptyMatrix(20);
    this.blueLetterMatrix = this.makeEmptyMatrix(20);
    this.redLetterMatrix = this.makeEmptyMatrix(20);
    for (i = 0; i < 7; i++) {
      var letter = this.randomLetter();
      this.addPiece(i, 0, letter);
    }
    
  } // end of initialize

});