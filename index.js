function fetch12() {
  fetch("apikey.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let cells = data.split("\n");
      let headings = cells.shift();
      //console.log(cells);
      //console.log(heading);
      let stri = cells.map((ele) => {
        let i = ele.indexOf("-");
        return ele.substr(i + 2);
      });
      //console.log(stri);
      //console.log(cells);
      let newArray = stri.map((ele) => {
        return ele.split(">");
      });
      // console.log(newArray);

      // First element create
      let div12 = document.getElementById("main1");
      let div23 = document.getElementById("main2");
      let div34 = document.getElementById("main3");
      let div45 = document.getElementById("main4");
      let select12 = document.getElementById("main1max");
      let select23 = document.getElementById("main2max");
      let select34 = document.getElementById("main3max");
      let select45 = document.getElementById("main4max");

      let tempoArray = [];
      let newAr = newArray.map((ele) => {
        //console.log(ele);
        //  console.log(newAr);
        // let i=0;

        //select2.options.length=0;
        let checkele = ele[0].trim();
        // i++;
        if (tempoArray.indexOf(checkele) == -1 && checkele != "") {
          tempoArray.push(checkele);
          let optioncret = document.createElement("option");
          //console.log(checkele);
          optioncret.textContent = checkele;
          select12.append(optioncret);
          div12.append(select12);
        }
      });
      select12.addEventListener("change", () => {
        // newAr=ele[i];
        //   // console.log(newAr);
        // select2.options.length=0;
        select23.options.length = 1;
       
        div34.style.display = "none";
        div45.style.display = "none";
        let chechCondition2 = document.getElementById("secter2Id");
        //let chechCondition3=document.getElementById("secter3Id");
        if (chechCondition2 != null) {
          chechCondition2.remove();
        }

        let arryAnother = [];
        //   // console.log(arryAnother);
        //   //console.log(selectcre.value);
        //   //console.log(newArray);
        let array12 = newArray.map((elemt) => {
          let temp12;

          //     //console.log(elemt);
          if (  elemt.length > 1 && elemt[0].trim() == select12.value &&  elemt[0] != "" ) {
            div23.style.display = "block";
            temp12 = elemt[1].trim();
            //console.log(temp12);

            //     //console.log(temp12);
            if (arryAnother.indexOf(temp12) == -1) {
              //       //console.log(temp12)
              arryAnother.push(temp12);

              let option2 = document.createElement("option");
              //console.log(option2);

              option2.textContent = select12.value + "/" + temp12;

              select23.append(option2);
              //console.log(select23);
            }
          }
        });
        div23.append(select23);
      });
      select23.addEventListener("change", () => {
        select34.options.length = 1;
        // select3.options.length=0;
       
        div45.style.display = "none";
        let valueelement = select23.value;
        let array34 = [];
        let [firstelement, secondelement] = valueelement.split("/");
        //console.log(firstelement);
        //console.log(secondelement);
        let mapagain = newArray.map((elem23) => {
          let temp23;
          //console.log(elem23);
        if(elem23.length > 2){
          
          if (elem23[0].trim() == firstelement &&  elem23[1].trim() == secondelement ) 
          {
            div34.style.display = "block";
            temp23 = elem23[2].trim();
            //console.log(temp23);
            //console.log();
            if (array34.indexOf(temp23) == -1) {
              array34.push(temp23);
              let option3 = document.createElement("option");
              //console.log(option3);
              option3.textContent = select23.value + "/" + temp23;

              select34.append(option3);

              //  console.log(select34);
            }
          }
        }
        

        });
        div34.append(select34);
      });

      select34.addEventListener("change", () => {
        
        select45.options.length = 1;
        let valueelement = select34.value;
        let array45 = [];
        let [firstelement, secondelement, thirdele] = valueelement.split("/");
        //console.log(firstelement);
        //console.log(secondelement);
        // console.log(thirdele);
        let maptemp = newArray.map((elemry) => {
          let temp45;

          //console.log(elemry);
          if ( elemry.length > 3 &&  elemry[0].trim() == firstelement &&  elemry[1].trim() == secondelement && elemry[2].trim() == thirdele ) {
            div45.style.display = "block";
            temp45 = elemry[3].trim();
            //console.log(temp45);
            if (array45.indexOf(temp45) == -1) {
              array45.push(temp45);
              let option4 = document.createElement("option");
              // option4.setAttribute("value","Select Product");
              option4.textContent = select34.value + "/" + temp45;

              select45.append(option4);
              //console.log(select45);
            }
          }
        });
        div45.append(select45);
      });

      //console.log(arryAnother);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetch12();
