var cleanMap = {
   //champ and host
    URY: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1930 (<span class='fa fa-users'></span>590,549) <br> <span class='icon-trophy'></span>Won twice: 1930, 1950 <br> <span class='icon-soccer-shoe'></span>Top Player: Diego Forlan(2010)", flag: '../data/flags/uy.png'},
    ITA: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted twice: 1934(<span class='fa fa-users'></span>363,000), 1990(<span class='fa fa-users'></span>) <br> <span class='icon-trophy'></span>Won 4 Times: 1934, 1938, 1982, 2006<br> <span class='icon-soccer-shoe'></span>Top Player: Salvitore Sillacci(1982), Paolo Rossi 1990", flag: '../data/flags/it.png'},
    FRA: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted twice: 1938(<span class='fa fa-users'></span>375,700), 1998(<span class='fa fa-users'></span>2,785,100) <br> <span class='icon-trophy'></span>Won once: 1998<br> <span class='icon-soccer-shoe'></span>Top Player: Thierry Henry(1958)", flag: '../data/flags/fr.png'},
    BRA: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted twice: 1950(<span class='fa fa-users'></span>1,045,246), 2014(<span class='fa fa-users'></span>3,429,873) <br> <span class='icon-trophy'></span>Won 5 times: 1958, 1962, 1970, 1994, 2002 <br> <span class='icon-soccer-shoe'></span>Top Player: Leonidas(1938), Ademir(1950), Garrincha and Vava(1962), Ronaldo(2002)", flag: '../data/flags/br.png'},
    DEU: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted twice: 1974(<span class='fa fa-users'></span>1,865,753), 2006(<span class='fa fa-users'></span>3,359,439) <br> <span class='icon-trophy'></span>Won 4 times: 1954, 1974, 1990, 2014<br> <span class='icon-soccer-shoe'></span>Top Player:Gert Mueller(1970), Miroslav Klose(2006),Thomas Mueller(2010)", flag: '../data/flags/de.png'},
    ARG: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1978(<span class='fa fa-users'></span>1,545,791) <br> <span class='icon-trophy'></span>Won twice: 1978, 1986 <span class='icon-soccer-shoe'></span>Top Player: Guillermo Stabile(1930), Mario Kempes(1978)", flag: '../data/flags/ar.png'},
    ESP: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1982(<span class='fa fa-users'></span>2,109,723) <br> <span class='icon-trophy'></span>Won once: 2010<br> <span class='icon-soccer-shoe'></span>Top Player: David Villa(2010)", flag: '../data/flags/es.png'},
    GBR: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1966(<span class='fa fa-users'></span>1,563,135) <br> <span class='icon-trophy'></span>Won once: 1966<br> <span class='icon-soccer-shoe'></span>Top Player: Gary Linneker(1986)", flag: '../data/flags/gb.png'},

    //hosts
    USA: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1994(<span class='fa fa-users'></span>363,000)", flag: '../data/flags/us.png'},
    MEX: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted twice: 1970(<span class='fa fa-users'></span>1,603,975), 1986(<span class='fa fa-users'></span>2,394,031)", flag: '../data/flags/mx.png'},
    CHE: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1954(<span class='fa fa-users'></span>768,607)", flag: '../data/flags/ch.png'},
    SWE: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1958(<span class='fa fa-users'></span>819,810)", flag: '../data/flags/se.png'},
    CHL: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 1962(<span class='fa fa-users'></span>893,172)<br> <span class='icon-soccer-shoe'></span>Top Player: Alexis Sanchez(1962)", flag: '../data/flags/cl.png'},
    KOR: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 2002(<span class='fa fa-users'></span>2,705,197)", flag: '../data/flags/kr.png'},
    JPN: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 2002(<span class='fa fa-users'></span>2,705,197)", flag: '../data/flags/jp.png'},
    ZAF: { fillKey: "defaultFill2", text: "<span class='icon-soccer-court'></span>Hosted once: 2010(<span class='fa fa-users'></span>3,178,856)", flag: '../data/flags/za.png'},

    //Countries that competed
    HND: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/hn.png'},
    SLV: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sl.png'},
    HTI: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ht.png'},
    JAM: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/jm.png'},
    TTO: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tt.png'},
    CAN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ca.png'},
    CUB: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cu.png'},
    CRI: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cr.png'},
    COL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: James Rodriguez(2014)", flag: '../data/flags/co.png'},
    ECU: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ec.png'},
    PER: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/pe.png'},
    BOL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/bo.png'},
    PRY: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/py.png'},

//asia australasia
    RUS: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Andrei Arshavin(1962),Olag Solenko(1994)", flag: '../data/flags/ru.png'},
    CHN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cn.png'},
    PRK: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/kp.png'},
    AUS: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/au.png'},
    NZL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/nz.png'},

  //africa
  AGO: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ao.png'},
  COD: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cd.png'},
  EGY: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/eg.png'},
  TUN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tn.png'},
  CIV: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ci.png'},
  TGO: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/TG.png'},
  DZA: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/dz.png'},
  MAR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ma.png'},
  NGA: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ng.png'},
  GHA: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/gh.png'},
  CMR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/cm.png'},
  SEN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sn.png'},

  //europe
  SVK: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sk.png'},
  GRC: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/gr.png'},
  SRB: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/rs.png'},
  BIH: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ba.png'},
  SVN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/si.png'},
  CZE: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted <span class='icon-soccer-shoe'></span>Top Player: Oldřich Nejedlý(1934)", flag: '../data/flags/cz.png'},
  NOR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/no.png'},
  HUN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted <span class='icon-soccer-shoe'></span>Top Player: Sándor Kocsis(1954),Flórián Albert(1962)", flag: '../data/flags/no.png'},

  UKR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ua.png'},
  ROU: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ro.png'},
  PRT: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Eusabio(1966)", flag: '../data/flags/pt.png'},
  BEL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/be.png'},
  POL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Robert Lawandowski(1974)", flag: '../data/flags/pl.png'},
  AUT: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/at.png'},
  HRV: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Davor Suker(1998)", flag: '../data/flags/hr.png'},
  BGR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Hristo Stroikov(1994)", flag: '../data/flags/bg.png'},
  TUR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/tr.png'},

  MNE: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/me.png'},
  ISR: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/il.png'},
  IRN: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ir.png'},
  KWT: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/kw.png'},
  DNK: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/dk.png'},
  IRQ: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/iq.png'},
  IRL: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ie.png'},
  ARE: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/ae.png'},
  SAU: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted", flag: '../data/flags/sa.png'},

  NLD: { fillKey: "defaultFill2", text: "Never <span class='icon-trophy'></span>Won and never <span class='icon-soccer-court'></span>Hosted<br> <span class='icon-soccer-shoe'></span>Top Player: Wesley Schneider(2010)", flag: '../data/flags/nl.png'},


};

var overviewMap = [
  {country: "URY", fillKey: "championAndHost"},
  {country: "ITA", fillKey: "championAndHost"},
  {country: "FRA",fillKey: "championAndHost"},
  {country: "BRA", fillKey: "championAndHost"},
  {country: "DEU", fillKey: "championAndHost"},
    {country: "ARG", fillKey: "championAndHost"},
    {country: "ESP", fillKey: "championAndHost"},
    {country: "GBR", fillKey: "championAndHost"},

    //hosts
    {country: "USA", fillKey: "semifinalistAndHost"},
    {country: "MEX", fillKey: "quarterfinalistAndHost"},
    {country: "CHE", fillKey: "quarterfinalistAndHost"},
    {country: "SWE", fillKey: "finalistAndHost"},
    {country: "CHL", fillKey: "semifinalistAndHost"},
    {country: "KOR", fillKey: "semifinalistAndHost"},
    {country: "JPN", fillKey: "last16AndHost"},
    {country: "ZAF", fillKey: "groupstagesAndHost"},

    //Countries that competed
    {country: "HND", fillKey: "groupstages"},
    {country: "SLV", fillKey: "groupstages"},
    {country: "HTI", fillKey: "groupstages"},
    {country: "JAM", fillKey: "groupstages"},
    {country: "TTO", fillKey: "groupstages"},
    {country: "CAN", fillKey: "groupstages"},
    {country: "CUB", fillKey: "quarterfinalist"},
    {country: "CRI", fillKey: "quarterfinalist"},
    {country: "COL", fillKey: "quarterfinalist"},
    {country: "ECU", fillKey: "last16"},
    {country: "PER", fillKey: "quarterfinalist"},
    {country: "BOL", fillKey: "groupstages"},
    {country: "PRY", fillKey: "quarterfinalist"},

//asia australasia
    {country: "RUS", fillKey: "groupstages"},
    {country: "CHN", fillKey: "groupstages"},
    {country: "PRK", fillKey: "quarterfinalist"},
    {country: "AUS", fillKey: "last16"},
    {country: "NZL", fillKey: "groupstages"},

  //africa
  {country: "AGO", fillKey: "groupstages"},
  {country: "COD",  fillKey: "groupstages"},
  {country: "EGY", fillKey: "groupstages"},
  {country: "TUN", fillKey: "groupstages"},
  {country: "CIV", fillKey: "groupstages"},
  {country: "TGO", fillKey: "groupstages"},
  {country: "DZA", fillKey: "last16"},
  {country: "MAR", fillKey: "last16"},
  {country: "NGA", fillKey: "last16"},
  {country: "GHA", fillKey: "quarterfinalist"},
  {country: "CMR", fillKey: "quarterfinalist"},
  {country: "SEN", fillKey: "quarterfinalist"},

  //europe
  {country: "SVK", fillKey: "groupstages"},
  {country: "GRC", fillKey: "groupstages"},
  {country: "SRB", fillKey: "last16"},
  {country: "BIH", fillKey: "last16"},
  {country: "SVN", fillKey: "last16"},
  {country: "CZE", fillKey: "last16"},
  {country: "NOR", fillKey: "last16"},

  {country: "UKR", fillKey: "quarterfinalist"},
  {country: "ROU", fillKey: "quarterfinalist"},
  {country: "PRT", fillKey: "semifinalist"},
  {country: "BEL", fillKey: "semifinalist"},
  {country: "POL", fillKey: "semifinalist"},
  {country: "AUT", fillKey: "semifinalist"},
  {country: "HRV", fillKey: "semifinalist"},
  {country: "BGR", fillKey: "semifinalist"},
  {country: "TUR", fillKey: "semifinalist"},
  {country: "NLD", fillKey: "finalist"},
  //countries we forgot
  {country: "MNE", fillKey: "defaultFill2"},
  {country: "ISR", fillKey: "groupstages"},
  {country: "IRN", fillKey: "groupstages"},
  {country: "KWT", fillKey: "groupstages"},
  {country: "DNK",  fillKey: "quarterfinalist"},
  {country: "IRQ", fillKey: "groupstages"},
  {country: "IRL", fillKey: "quarterfinalist"},
  {country: "ARE", fillKey: "groupstages"},
  {country: "SAU", fillKey: "last16"},
];


var attendanceMap = [
  {country: "URY", fillKey: "attendance2"},
  {country: "ITA", fillKey: "attendance6"},
  {country: "FRA",fillKey: "attendance6"},
  {country: "BRA", fillKey: "attendance7"},
  {country: "DEU", fillKey: "attendance7"},
    {country: "ARG", fillKey: "attendance4"},
    {country: "ESP", fillKey: "attendance5"},
    {country: "GBR", fillKey: "attendance4"},

    //hosts
    {country: "USA", fillKey: "attendance8"},
    {country: "MEX", fillKey: "attendance5"},
    {country: "CHE", fillKey: "attendance2"},
    {country: "SWE", fillKey: "attendance2"},
    {country: "CHL", fillKey: "attendance2"},
    {country: "KOR", fillKey: "attendance6"},
    {country: "JPN", fillKey: "attendance6"},
    {country: "ZAF", fillKey: "attendance7"},
];

var topScorerMap = [
  {country: "BRA", fillKey: "topScorer5"}, //5, 1938(Leonidas),1950(Ademir),1962X2(Garrincha,Vava),2002(Ronaldo)
  {country: "ARG", fillKey: "topScorer2"},//2
  {country: "CZE", fillKey: "topScorer1"},//1
  {country: "HUN", fillKey: "topScorer1"},//1
  {country: "FRA",fillKey: "topScorer1"},//1
  {country: "CHL", fillKey: "topScorer1"},//1
  {country: "RUS", fillKey: "topScorer2"},//2
  {country: "PRT", fillKey: "topScorer1"},//1
  {country: "DEU", fillKey: "topScorer3"},//3
  {country: "POL", fillKey: "topScorer1"},//1
  {country: "ITA", fillKey: "topScorer2"},//2
  {country: "GBR", fillKey: "topScorer1"},//1
  {country: "BGR", fillKey: "topScorer1"},//1
  {country: "HRV", fillKey: "topScorer1"},//1
  {country: "ESP", fillKey: "topScorer1"},//1
  {country:"NLD", fillKey: "topScorer1"},//1
  {country: "URY", fillKey:"topScorer1"},//1
  {country: "COL", fillKey: "topScorer1"},//1
];

var ScorerByYear = {"1930":[
  {country: "ARG", fillKey:"topScorer1"},
],
"1934":[
  {country:"CZE", fillKey: "topScorer1"},
],
"1962":[
  {country: "BRA", fillKey: "topScorer2"},//2
  {country: "HUN", fillKey: "topScorer1"},//1
  {country: "CHL", fillKey: "topScorer1"},//1
  {country: "RUS", fillKey: "topScorer1"},//2
]}

var compByYear = {"1930":[
  {country: "URY", fillKey:"championAndHost"},
  {country: "ARG", fillKey:"finalist"},
  {country: "USA", fillKey:"semifinalist"},
  {country: "ROU", fillKey:"semifinalist"},
  {country: "BEL", fillKey:"groupstages"},
  {country: "FRA", fillKey:"groupstages"},
  {country: "MEX", fillKey:"groupstages"},
  {country: "BRA", fillKey:"groupstages"},
  {country: "CHL", fillKey:"groupstages"},
  {country: "PER", fillKey:"groupstages"},
  {country: "BOL", fillKey:"groupstages"},
  {country: "PRY", fillKey:"groupstages"}
],
"1934":[
  {country:"ITA", fillKey: "championAndHost"},
  {country:"CZE", fillKey: "semifinalist"},
  {country:"AUT", fillKey: "semifinalist"},
  {country:"DEU", fillKey: "semifinalist"},
  {country:"HUN", fillKey: "quarterfinalist"},
  {country:"SWE", fillKey: "quarterfinalist"},
  {country:"ESP", fillKey: "quarterfinalist"},
  {country:"CHE", fillKey: "quarterfinalist"},
  {country:"USA", fillKey: "groupstages"},
  {country:"BRA", fillKey: "groupstages"},
  {country:"ARG", fillKey: "groupstages"},
  {country:"EGY", fillKey: "groupstages"},
  {country:"ROU", fillKey: "groupstages"},
  {country:"BEL", fillKey: "groupstages"},
  {country:"NLD", fillKey: "groupstages"},
  {country:"FRA", fillKey: "groupstages"}
]}

var goalsScoredMap = [
{country:"URY", fillKey:"goalsScored6"},
{country:"ARG", fillKey:"goalsScored6"},
{country:"USA", fillKey:"goalsScored4"},
{country:"CHL", fillKey:"goalsScored5"},
{country:"BRA", fillKey:"goalsScored7"},
{country:"FRA", fillKey:"goalsScored6"},
{country:"ROU", fillKey:"goalsScored4"},
{country:"PRY", fillKey:"goalsScored4"},
{country:"PER", fillKey:"goalsScored4"},
{country:"BEL", fillKey:"goalsScored5"},
{country:"BOL", fillKey:"goalsScored1"},
{country:"MEX", fillKey:"goalsScored5"},
{country:"ITA", fillKey:"goalsScored6"},
{country:"CZE", fillKey:"goalsScored5"},
{country:"DEU", fillKey:"goalsScored6"},
{country:"AUT", fillKey:"goalsScored5"},
{country:"ESP", fillKey:"goalsScored6"},
{country:"HUN", fillKey:"goalsScored6"},
{country:"CHE", fillKey:"goalsScored5"},
{country:"SWE", fillKey:"goalsScored5"},
{country:"NLD", fillKey:"goalsScored6"},
{country:"EGY", fillKey:"goalsScored1"},
{country:"CUB", fillKey:"goalsScored1"},
{country:"POL", fillKey:"goalsScored5"},
{country:"NOR", fillKey:"goalsScored2"},
{country:"GBR", fillKey:"goalsScored5"},
{country:"TUR", fillKey:"goalsScored4"},
{country:"KOR", fillKey:"goalsScored4"},
{country:"COL", fillKey:"goalsScored4"},
{country:"BGR", fillKey:"goalsScored4"},
{country:"PRT", fillKey:"goalsScored5"},
{country:"PRK", fillKey:"goalsScored2"},
{country:"ISR", fillKey:"goalsScored1"},
{country:"MAR", fillKey:"goalsScored3"},
{country:"SLV", fillKey:"goalsScored1"},
{country:"AUS", fillKey:"goalsScored2"},
{country:"HTI", fillKey:"goalsScored1"},
{country:"TUN", fillKey:"goalsScored2"},
{country:"IRN", fillKey:"goalsScored2"},
{country:"DZA", fillKey:"goalsScored3"},
{country:"CMR", fillKey:"goalsScored3"},
{country:"HND", fillKey:"goalsScored1"},
{country:"KWT", fillKey:"goalsScored1"},
{country:"NZL", fillKey:"goalsScored2"},
{country:"DNK", fillKey:"goalsScored4"},
{country:"IRQ", fillKey:"goalsScored1"},
{country:"CAN", fillKey:"goalsScored1"},
{country:"IRL", fillKey:"goalsScored3"},
{country:"CRI", fillKey:"goalsScored4"},
{country:"ARE", fillKey:"goalsScored1"},
{country:"NGA", fillKey:"goalsScored4"},
{country:"SAU", fillKey:"goalsScored3"},
{country:"RUS", fillKey:"goalsScored3"},
{country:"GRC", fillKey:"goalsScored2"},
{country:"HRV", fillKey:"goalsScored3"},
{country:"JAM", fillKey:"goalsScored1"},
{country:"ZAF", fillKey:"goalsScored3"},
{country:"JPN", fillKey:"goalsScored3"},
{country:"SEN", fillKey:"goalsScored2"},
{country:"ECU", fillKey:"goalsScored3"},
{country:"SVN", fillKey:"goalsScored2"},
{country:"CHN", fillKey:"goalsScored1"},
{country:"UKR", fillKey:"goalsScored2"},
{country:"GHA", fillKey:"goalsScored3"},
{country:"CIV", fillKey:"goalsScored3"},
{country:"AGO", fillKey:"goalsScored1"},
{country:"TTO", fillKey:"goalsScored1"},
{country:"TGO", fillKey:"goalsScored1"},
{country:"MNE", fillKey:"goalsScored1"},
{country:"SVK", fillKey:"goalsScored2"},
{country:"SRB", fillKey:"goalsScored1"},
{country:"BIH", fillKey:"goalsScored1"}]

var goalsScoredByYear = {"1930": [
{country:"URY", fillKey:"goalsScored3"},
{country:"ARG", fillKey:"goalsScored3"},
{country:"USA", fillKey:"goalsScored2"},
{country:"CHL", fillKey:"goalsScored2"},
{country:"BRA", fillKey:"goalsScored2"},
{country:"FRA", fillKey:"goalsScored1"},
{country:"ROU", fillKey:"goalsScored1"},
{country:"PRY", fillKey:"goalsScored1"},
{country:"PER", fillKey:"goalsScored1"},
{country:"BEL", fillKey:"goalsScored1"},
{country:"BOL", fillKey:"goalsScored1"},
{country:"MEX", fillKey:"goalsScored1"},
],
"1934": [
{country:"ITA", fillKey:"goalsScored3"},
{country:"CZE", fillKey:"goalsScored2"},
{country:"DEU", fillKey:"goalsScored3"},
{country:"AUT", fillKey:"goalsScored2"},
{country:"ESP", fillKey:"goalsScored1"},
{country:"HUN", fillKey:"goalsScored2"},
{country:"CHE", fillKey:"goalsScored2"},
{country:"SWE", fillKey:"goalsScored1"},
{country:"ARG", fillKey:"goalsScored1"},
{country:"FRA", fillKey:"goalsScored1"},
{country:"NLD", fillKey:"goalsScored1"},
{country:"ROU", fillKey:"goalsScored1"},
{country:"EGY", fillKey:"goalsScored1"},
{country:"BRA", fillKey:"goalsScored1"},
{country:"BEL", fillKey:"goalsScored1"},
{country:"USA", fillKey:"goalsScored1"}],
};
