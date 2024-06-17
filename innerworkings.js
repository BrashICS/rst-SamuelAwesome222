const columns = 0

let col1 = 0
let col2 = 0
let col3 = 0
let col4 = 0
let col5 = 0
let col6 = 0
let col7 = 0
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

  col1 = col1+1
  console.log(col1);

  document.getElementById("column1Count").innerText = col1;
  if(col1 == 1){
    if(playerturn == "red"){
      document.getElementById("17").innerHTML = "R"
      console.log("hi red")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("17").innerHTML = "Y"
        console.log("hi yellow")
        playerturn = ("red")
    }

  } else if(col1 == 2){
    if(playerturn == "red"){
      document.getElementById("16").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("16").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col1 == 3){
    if(playerturn == "red"){
      document.getElementById("15").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("15").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col1 == 4){
  if(playerturn == "red"){
    document.getElementById("14").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("14").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col1 == 5){
  if(playerturn == "red"){
    document.getElementById("13").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("13").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col1 == 6){
  if(playerturn == "red"){
    document.getElementById("12").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("12").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col1 == 7){
  if(playerturn == "red"){
    document.getElementById("11").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("11").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}

function col2add(){
  col2 = col2+1
document.getElementById("column2Count").innerText = col2;
  if(col2 == 1){
    if(playerturn == "red"){
      document.getElementById("27").innerHTML = "R"
      console.log("hi red")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("27").innerHTML = "Y"
        console.log("hi yellow")
        playerturn = ("red")
    }

  } else if(col2 == 2){
    if(playerturn == "red"){
      document.getElementById("26").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("26").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col2 == 3){
    if(playerturn == "red"){
      document.getElementById("25").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("25").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col2 == 4){
  if(playerturn == "red"){
    document.getElementById("24").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("24").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col2 == 5){
  if(playerturn == "red"){
    document.getElementById("23").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("23").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col2 == 6){
  if(playerturn == "red"){
    document.getElementById("22").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("22").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col2 == 7){
  if(playerturn == "red"){
    document.getElementById("21").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("21").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}
function col3add(){
  col3 = col3+1
document.getElementById("column3Count").innerText = col3;
  if(col3 == 1){
    if(playerturn == "red"){
      document.getElementById("37").innerHTML = "R"
      console.log("hi red")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("37").innerHTML = "Y"
        console.log("hi yellow")
        playerturn = ("red")
    }

  } else if(col3 == 2){
    if(playerturn == "red"){
      document.getElementById("36").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("36").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col3 == 3){
    if(playerturn == "red"){
      document.getElementById("35").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("35").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col3 == 4){
  if(playerturn == "red"){
    document.getElementById("34").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("34").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col3 == 5){
  if(playerturn == "red"){
    document.getElementById("33").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("33").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col3 == 6){
  if(playerturn == "red"){
    document.getElementById("32").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("32").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col3 == 7){
  if(playerturn == "red"){
    document.getElementById("31").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("31").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}

function col4add(){
  col4 = col4+1
document.getElementById("column4Count").innerText = col4;
  if(col4 == 1){
    if(playerturn == "red"){
      document.getElementById("47").innerHTML = "R"
      console.log("hi red")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("47").innerHTML = "Y"
        console.log("hi yellow")
        playerturn = ("red")
    }

  } else if(col4 == 2){
    if(playerturn == "red"){
      document.getElementById("46").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 2")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("46").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 2")
        playerturn = ("red")
    }
  }else if(col4 == 3){
    if(playerturn == "red"){
      document.getElementById("45").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 3")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("45").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 3")
        playerturn = ("red")
    }
}else if(col4 == 4){
  if(playerturn == "red"){
    document.getElementById("44").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 4")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("44").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 4")
      playerturn = ("red")
  }
}else if(col4 == 5){
  if(playerturn == "red"){
    document.getElementById("43").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 5")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("43").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 5")
      playerturn = ("red")
  }
}else if(col4 == 6){
  if(playerturn == "red"){
    document.getElementById("42").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 6")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("42").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 6")
      playerturn = ("red")
  }
}else if(col4 == 7){
  if(playerturn == "red"){
    document.getElementById("41").innerHTML = "R"
    console.log("hi red")
    console.log("red turn 7")
    playerturn = ("yellow")
  }else if(playerturn == "yellow"){
      document.getElementById("41").innerHTML = "Y"
      console.log("hi yellow")
      console.log("yellow turn 7")
      playerturn = ("red")
  }
}
}
function col5add(){
  col5 = col5+1
  document.getElementById("column5Count").innerText = col5;
    if(col5 == 1){
      if(playerturn == "red"){
        document.getElementById("57").innerHTML = "R"
        console.log("hi red")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("57").innerHTML = "Y"
          console.log("hi yellow")
          playerturn = ("red")
      }

    } else if(col5 == 2){
      if(playerturn == "red"){
        document.getElementById("56").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 2")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("56").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 2")
          playerturn = ("red")
      }
    }else if(col5 == 3){
      if(playerturn == "red"){
        document.getElementById("55").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 3")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("55").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 3")
          playerturn = ("red")
      }
  }else if(col5 == 4){
    if(playerturn == "red"){
      document.getElementById("54").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 4")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("54").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 4")
        playerturn = ("red")
    }
  }else if(col5 == 5){
    if(playerturn == "red"){
      document.getElementById("53").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 5")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("53").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 5")
        playerturn = ("red")
    }
  }else if(col5 == 6){
    if(playerturn == "red"){
      document.getElementById("52").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 6")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("52").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 6")
        playerturn = ("red")
    }
  }else if(col5 == 7){
    if(playerturn == "red"){
      document.getElementById("51").innerHTML = "R"
      console.log("hi red")
      console.log("red turn 7")
      playerturn = ("yellow")
    }else if(playerturn == "yellow"){
        document.getElementById("51").innerHTML = "Y"
        console.log("hi yellow")
        console.log("yellow turn 7")
        playerturn = ("red")
    }
  }
  }

  function col6add(){
    col6 = col6+1
    document.getElementById("column7Count").innerText = col6;
      if(col6 == 1){
        if(playerturn == "red"){
          document.getElementById("67").innerHTML = "R"
          console.log("hi red")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("67").innerHTML = "Y"
            console.log("hi yellow")
            playerturn = ("red")
        }

      } else if(col6 == 2){
        if(playerturn == "red"){
          document.getElementById("66").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 2")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("66").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 2")
            playerturn = ("red")
        }
      }else if(col6 == 3){
        if(playerturn == "red"){
          document.getElementById("65").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 3")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("65").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 3")
            playerturn = ("red")
        }
    }else if(col6 == 4){
      if(playerturn == "red"){
        document.getElementById("64").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 4")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("64").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 4")
          playerturn = ("red")
      }
    }else if(col6 == 5){
      if(playerturn == "red"){
        document.getElementById("63").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 5")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("63").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 5")
          playerturn = ("red")
      }
    }else if(col6 == 6){
      if(playerturn == "red"){
        document.getElementById("62").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 6")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("62").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 6")
          playerturn = ("red")
      }
    }else if(col6 == 7){
      if(playerturn == "red"){
        document.getElementById("61").innerHTML = "R"
        console.log("hi red")
        console.log("red turn 7")
        playerturn = ("yellow")
      }else if(playerturn == "yellow"){
          document.getElementById("61").innerHTML = "Y"
          console.log("hi yellow")
          console.log("yellow turn 7")
          playerturn = ("red")
      }
    }
    }

    function col7add(){
      col7 = col7+1
      document.getElementById("column6Count").innerText = col7;
        if(col7 == 1){
          if(playerturn == "red"){
            document.getElementById("77").innerHTML = "R"
            console.log("hi red")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("77").innerHTML = "Y"
              console.log("hi yellow")
              playerturn = ("red")
          }

        } else if(col7 == 2){
          if(playerturn == "red"){
            document.getElementById("76").innerHTML = "R"
            console.log("hi red")
            console.log("red turn 2")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("76").innerHTML = "Y"
              console.log("hi yellow")
              console.log("yellow turn 2")
              playerturn = ("red")
          }
        }else if(col7 == 3){
          if(playerturn == "red"){
            document.getElementById("75").innerHTML = "R"
            console.log("hi red")
            console.log("red turn 3")
            playerturn = ("yellow")
          }else if(playerturn == "yellow"){
              document.getElementById("75").innerHTML = "Y"
              console.log("hi yellow")
              console.log("yellow turn 3")
              playerturn = ("red")
          }
      }else if(col7 == 4){
        if(playerturn == "red"){
          document.getElementById("74").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 4")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("74").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 4")
            playerturn = ("red")
        }
      }else if(col7 == 5){
        if(playerturn == "red"){
          document.getElementById("73").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 5")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("73").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 5")
            playerturn = ("red")
        }
      }else if(col7 == 6){
        if(playerturn == "red"){
          document.getElementById("62").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 6")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("62").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 6")
            playerturn = ("red")
        }
      }else if(col7 == 7){
        if(playerturn == "red"){
          document.getElementById("71").innerHTML = "R"
          console.log("hi red")
          console.log("red turn 7")
          playerturn = ("yellow")
        }else if(playerturn == "yellow"){
            document.getElementById("71").innerHTML = "Y"
            console.log("hi yellow")
            console.log("yellow turn 7")
            playerturn = ("red")
        }
      }
      }
