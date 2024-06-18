const columns = 0

let col1 = 0
let col2 = 0
let col3 = 0
let col4 = 0
let col5 = 0
let col6 = 0
let col7 = 0

col3
function redwin(){
  winner.innerText = "Winner is RED!"

}
function yellowwin(){
  winner.innerText = "Winner is YELLOW"
}

let O17 =("O")
let O16 =("O")
let O15 =("O")
let O14 =("O")
let O13 =("O")
let O12 =("O")
let O11 =("O")
let O10=("O")
let O27=("O")
let O26=("O")
let O25=("O")
let O24=("O")
let O23=("O")
let O22=("O")
let O21=("O")
let O20=("O")
let O37=("O")
let O36=("O")
let O35=("O")
let O34=("O")
let O33=("O")
let O32=("O")
let O31=("O")
let O30=("O")
let O47=("O")
let O46=("O")
let O45=("O")
let O44=("O")
let O43=("O")
let O42=("O")
let O41=("O")
let O57=("O")
let O56=("O")
let O55=("O")
let O54=("O")
let O53=("O")
let O52=("O")
let O51=("O")
let O67=("O")
let O66=("O")
let O65=("O")
let O64=("O")
let O63=("O")
let O62=("O")
let O61=("O")
let O77=("O")
let O76=("O")
let O75=("O")
let O74=("O")
let O73=("O")
let O72=("O")
let O71=("O")

let playerturn = ("red")

document.getElementById("column1").addEventListener("click", col1add)
document.getElementById("column2").addEventListener("click", col2add)
document.getElementById("column3").addEventListener("click", col3add)
document.getElementById("column4").addEventListener("click", col4add)
document.getElementById("column5").addEventListener("click", col5add)
document.getElementById("column6").addEventListener("click", col6add)
document.getElementById("column7").addEventListener("click", col7add)


console.log(col1);

function col1add(){
  if(O16 && O15 && O14 && O13 =="R"){

    console.log("AWWAHAWHHWAHAWH")
redwin()
  } else if(O16 && O15 && O14 && O13 =="Y"){
yellowwin()
  }

  col1 = col1+1
  console.log(col1);

  document.getElementById("column1Count").innerText = col1;
  if(col1 == 1){
    if(playerturn == "red"){
      document.getElementById("17").innerHTML = "R"
      O17 = ("R")
      playerturn = ("yellow")
      O17 = ("R")
    }else if(playerturn == "yellow"){
        document.getElementById("17").innerHTML = "Y"
      O17 = ("Y")
        playerturn = ("red")
    }

  } else if(col1 == 2){
    if(playerturn == "red"){
      document.getElementById("16").innerHTML = "R"
      O16 = ("R")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("16").innerHTML = "Y"
      O16 = ("Y")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col1 == 3){
    if(playerturn == "red"){
      document.getElementById("15").innerHTML = "R"
      O15 = ("R")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("15").innerHTML = "Y"
      O15 = ("Y")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col1 == 4){
  if(playerturn == "red"){
    document.getElementById("14").innerHTML = "R"
    O14 = ("R")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("14").innerHTML = "Y"
    O14 = ("Y")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col1 == 5){
  if(playerturn == "red"){
    document.getElementById("13").innerHTML = "R"
    O13 = ("R")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("13").innerHTML = "Y"
    O13 = ("Y")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col1 == 6){
  if(playerturn == "red"){
    document.getElementById("12").innerHTML = "R"
    O12 = ("R")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("12").innerHTML = "Y"
    O12 = ("Y")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col1 == 7){
  if(playerturn == "red"){
    document.getElementById("11").innerHTML = "R"
    O11 = ("R")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("11").innerHTML = "Y"
    O11 = ("Y")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}

function col2add(){
  if(O26 && O25 && O24 && O23 =="R"){

    console.log("AWWAHAWHHWAHAWH")
redwin()
  } else if(O26 && O25 && O24 && O23 =="Y"){
yellowwin()
  }
  col2 = col2+1
document.getElementById("column2Count").innerText = col2;
  if(col2 == 1){
    if(playerturn == "red"){
      document.getElementById("27").innerHTML = "R"
      O27 = ("R")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("27").innerHTML = "Y"
      O27 = ("Y")
        playerturn = ("red")
    }

  } else if(col2 == 2){
    if(playerturn == "red"){
      document.getElementById("26").innerHTML = "R"
      O26 = ("R")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("26").innerHTML = "Y"
      O26 = ("Y")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col2 == 3){
    if(playerturn == "red"){
      document.getElementById("25").innerHTML = "R"
      O25 = ("R")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("25").innerHTML = "Y"
      O25 = ("Y")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col2 == 4){
  if(playerturn == "red"){
    document.getElementById("24").innerHTML = "R"
    O24 = ("R")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("24").innerHTML = "Y"
    O24 = ("Y")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col2 == 5){
  if(playerturn == "red"){
    document.getElementById("23").innerHTML = "R"
    O23 = ("R")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("23").innerHTML = "Y"
    O23 = ("Y")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col2 == 6){
  if(playerturn == "red"){
    document.getElementById("22").innerHTML = "R"
    O22 = ("R")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("22").innerHTML = "Y"
    O2 = ("Y")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col2 == 7){
  if(playerturn == "red"){
    document.getElementById("21").innerHTML = "R"
    O21 = ("R")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("21").innerHTML = "Y"
    O21 = ("Y")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}
function col3add(){
  console.log(O36)

  if(O36 && O35 && O34 && O33 =="R"){

    console.log("AWWAHAWHHWAHAWH")
redwin()
  } else if(O36 && O35 && O34 && O33 =="Y"){
yellowwin()
  }

  col3 = col3+1
document.getElementById("column3Count").innerText = col3;
  if(col3 == 1){
    if(playerturn == "red"){
      document.getElementById("37").innerHTML = "R"
      O37 = ("R")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("37").innerHTML = "Y"
      O37 = ("Y")
        playerturn = ("red")
    }

  } else if(col3 == 2){
    if(playerturn == "red"){
      document.getElementById("36").innerHTML = "R"
      O36 = ("R")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("36").innerHTML = "Y"
      O36 = ("Y")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col3 == 3){
    if(playerturn == "red"){
      document.getElementById("35").innerHTML = "R"
      O35 = ("R")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("35").innerHTML = "Y"
      O35 = ("Y")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col3 == 4){
  if(playerturn == "red"){
    document.getElementById("34").innerHTML = "R"
    O34 = ("R")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("34").innerHTML = "Y"
    O34 = ("Y")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col3 == 5){
  if(playerturn == "red"){
    document.getElementById("33").innerHTML = "R"
    O33 = ("R")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("33").innerHTML = "Y"
    O33 = ("Y")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col3 == 6){
  if(playerturn == "red"){
    document.getElementById("32").innerHTML = "R"
    O32 = ("R")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("32").innerHTML = "Y"
    O32 = ("Y")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col3 == 7){
  if(playerturn == "red"){
    document.getElementById("31").innerHTML = "R"
    O31 = ("R")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("31").innerHTML = "Y"
    O31 = ("Y")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}

function col4add(){
  if(O46 && O45 && O44 && O43 =="R"){

    console.log("AWWAHAWHHWAHAWH")
redwin()
  } else if(O46 && O45 && O44 && O43 =="Y"){
yellowwin()
  }
  col4 = col4+1
document.getElementById("column4Count").innerText = col4;
  if(col4 == 1){
    if(playerturn == "red"){
      document.getElementById("47").innerHTML = "R"
      O47 = ("R")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("47").innerHTML = "Y"
      O47 = ("Y")
        playerturn = ("red")
    }

  } else if(col4 == 2){
    if(playerturn == "red"){
      document.getElementById("46").innerHTML = "R"
      O46 = ("R")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("46").innerHTML = "Y"
      O46 = ("Y")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col4 == 3){
    if(playerturn == "red"){
      document.getElementById("45").innerHTML = "R"
      O45 = ("R")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("45").innerHTML = "Y"
      O45 = ("Y")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col4 == 4){
  if(playerturn == "red"){
    document.getElementById("44").innerHTML = "R"
    O44 = ("R")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("44").innerHTML = "Y"
    O44 = ("Y")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col4 == 5){
  if(playerturn == "red"){
    document.getElementById("43").innerHTML = "R"
    O43 = ("R")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("43").innerHTML = "Y"
    O43 = ("Y")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col4 == 6){
  if(playerturn == "red"){
    document.getElementById("42").innerHTML = "R"
    O42 = ("R")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("42").innerHTML = "Y"
    O42 = ("Y")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col4 == 7){
  if(playerturn == "red"){
    document.getElementById("41").innerHTML = "R"
    O41 = ("R")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("41").innerHTML = "Y"
    O41 = ("Y")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}
function col5add(){
  if(O56 && O55 && O54 && O53 =="R"){

    console.log("AWWAHAWHHWAHAWH")
redwin()
  } else if(O56 && O55 && O54 && O53 =="Y"){
yellowwin()
  }
  col5 = col5+1
  document.getElementById("column5Count").innerText = col5;
    if(col5 == 1){
      if(playerturn == "red"){
        document.getElementById("57").innerHTML = "R"
        O57 = ("R")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("57").innerHTML = "Y"
        O57 = ("Y")
          playerturn = ("red")
      }

    } else if(col5 == 2){
      if(playerturn == "red"){
        document.getElementById("56").innerHTML = "R"
        O56 = ("R")
        console.log("red turn 2")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("56").innerHTML = "Y"
        O56 = ("Y")
          console.log("yellow turn 2")
          playerturn = ("red")
      }
    }else if(col5 == 3){
      if(playerturn == "red"){
        document.getElementById("55").innerHTML = "R"
        O55 = ("R")
        console.log("red turn 3")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("55").innerHTML = "Y"
        O55 = ("Y")
          console.log("yellow turn 3")
          playerturn = ("red")
      }
  }else if(col5 == 4){
    if(playerturn == "red"){
      document.getElementById("54").innerHTML = "R"
      O54 = ("R")
      console.log("red turn 4")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("54").innerHTML = "Y"
      O54 = ("Y")
        console.log("yellow turn 4")
        playerturn = ("red")
    }
  }else if(col5 == 5){
    if(playerturn == "red"){
      document.getElementById("53").innerHTML = "R"
      O53 = ("R")
      console.log("red turn 5")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("53").innerHTML = "Y"
      O53 = ("Y")
        console.log("yellow turn 5")
        playerturn = ("red")
    }
  }else if(col5 == 6){
    if(playerturn == "red"){
      document.getElementById("52").innerHTML = "R"
      O52 = ("R")
      console.log("red turn 6")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("52").innerHTML = "Y"
      O52 = ("Y")
        console.log("yellow turn 6")
        playerturn = ("red")
    }
  }else if(col5 == 7){
    if(playerturn == "red"){
      document.getElementById("51").innerHTML = "R"
      O51 = ("R")
      console.log("red turn 7")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("51").innerHTML = "Y"
      O51 = ("Y")
        console.log("yellow turn 7")
        playerturn = ("red")
    }
  }
  }

  function col6add(){
    if(O66 && O65 && O64 && O63 =="R"){

      console.log("AWWAHAWHHWAHAWH")
  redwin()
    } else if(O66 && O65 && O64 && O63 =="Y"){
  yellowwin()
    }
    col6 = col6+1
    document.getElementById("column7Count").innerText = col6;
      if(col6 == 1){
        if(playerturn == "red"){
          document.getElementById("67").innerHTML = "R"
          O67 = ("R")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("67").innerHTML = "Y"
          O67 = ("Y")
            playerturn = ("red")
        }

      } else if(col6 == 2){
        if(playerturn == "red"){
          document.getElementById("66").innerHTML = "R"
          O66 = ("R")
          console.log("red turn 2")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("66").innerHTML = "Y"
          O66 = ("Y")
            console.log("yellow turn 2")
            playerturn = ("red")
        }
      }else if(col6 == 3){
        if(playerturn == "red"){
          document.getElementById("65").innerHTML = "R"
          O65 = ("R")
          console.log("red turn 3")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("65").innerHTML = "Y"
          O65 = ("Y")
            console.log("yellow turn 3")
            playerturn = ("red")
        }
    }else if(col6 == 4){
      if(playerturn == "red"){
        document.getElementById("64").innerHTML = "R"
        O64 = ("R")
        console.log("red turn 4")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("64").innerHTML = "Y"
        O64 = ("Y")
          console.log("yellow turn 4")
          playerturn = ("red")
      }
    }else if(col6 == 5){
      if(playerturn == "red"){
        document.getElementById("63").innerHTML = "R"
        O63 = ("R")
        console.log("red turn 5")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("63").innerHTML = "Y"
        O63 = ("Y")
          console.log("yellow turn 5")
          playerturn = ("red")
      }
    }else if(col6 == 6){
      if(playerturn == "red"){
        document.getElementById("62").innerHTML = "R"
        O62 = ("R")
        console.log("red turn 6")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("62").innerHTML = "Y"
        O62 = ("Y")
          console.log("yellow turn 6")
          playerturn = ("red")
      }
    }else if(col6 == 7){
      if(playerturn == "red"){
        document.getElementById("61").innerHTML = "R"
        O61 = ("R")
        console.log("red turn 7")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("61").innerHTML = "Y"
        O61 = ("Y")
          console.log("yellow turn 7")
          playerturn = ("red")
      }
    }
    }

    function col7add(){
      if(O76 && O75 && O74 && O73 =="R"){

        console.log("AWWAHAWHHWAHAWH")
    redwin()
      } else if(O76 && O75 && O74 && O73 =="Y"){
    yellowwin()
      }
      col7 = col7+1
      document.getElementById("column6Count").innerText = col7;
        if(col7 == 1){
          if(playerturn == "red"){
            document.getElementById("77").innerHTML = "R"
            O77 = ("R")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("77").innerHTML = "Y"
            O77 = ("Y")
              playerturn = ("red")
          }

        } else if(col7 == 2){
          if(playerturn == "red"){
            document.getElementById("76").innerHTML = "R"
            O76 = ("R")
            console.log("red turn 2")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("76").innerHTML = "Y"
            O76 = ("Y")
              console.log("yellow turn 2")
              playerturn = ("red")
          }
        }else if(col7 == 3){
          if(playerturn == "red"){
            document.getElementById("75").innerHTML = "R"
            O75 = ("R")
            console.log("red turn 3")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("75").innerHTML = "Y"
            O75 = ("Y")
              console.log("yellow turn 3")
              playerturn = ("red")
          }
      }else if(col7 == 4){
        if(playerturn == "red"){
          document.getElementById("74").innerHTML = "R"
          O74 = ("R")
          console.log("red turn 4")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("74").innerHTML = "Y"
          O74 = ("Y")
            console.log("yellow turn 4")
            playerturn = ("red")
        }
      }else if(col7 == 5){
        if(playerturn == "red"){
          document.getElementById("73").innerHTML = "R"
          O73 = ("R")
          console.log("red turn 5")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("73").innerHTML = "Y"
          O73 = ("Y")
            console.log("yellow turn 5")
            playerturn = ("red")
        }
      }else if(col7 == 6){
        if(playerturn == "red"){
          document.getElementById("72").innerHTML = "R"
          O72 = ("R")
          console.log("red turn 6")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("72").innerHTML = "Y"
          O72 = ("Y")
            console.log("yellow turn 6")
            playerturn = ("red")
        }
      }else if(col7 == 7){
        if(playerturn == "red"){
          document.getElementById("71").innerHTML = "R"
          O71 = ("R")
          console.log("red turn 7")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("71").innerHTML = "Y"
          O71 = ("Y")
            console.log("yellow turn 7")
            playerturn = ("red")
        }
      }
      }

      