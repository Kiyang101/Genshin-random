function select_Aether() {
  if (count_Aether == false){
    document.querySelector(".char .Aether .box").style.cssText = Borders
    count_Aether = true;
    Character[Character.length] = "Aether";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Aether == true){
    document.querySelector(".char .Aether .box").style.border="";
    count_Aether = false;
    let index = Character.indexOf("Aether");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Albedo() {
    if (count_Albedo == false){
      document.querySelector(".char .Albedo .box").style.cssText = Borders
      count_Albedo = true;
      Character[Character.length] = "Albedo";
      if (Character.length == CharCheck.length){
        document.querySelector(".selectall_char").style.cssText = "display: none;"
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
      }
      if(Character.length > 0){
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
      }else{
        document.querySelector(".unselectall_char").style.cssText = "display: none;"
      }
      return
    }
    if (count_Albedo == true){
      document.querySelector(".char .Albedo .box").style.border="";
      count_Albedo = false;
      let index = Character.indexOf("Albedo");
      Character.splice(index,1);
      if (Character.length == CharCheck.length){
        document.querySelector(".selectall_char").style.cssText = "display: none;"
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
      }else{
        document.querySelector(".selectall_char").style.cssText = "display: ;"
      }
      if(Character.length > 0){
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
      }else{
        document.querySelector(".unselectall_char").style.cssText = "display: none;"
      }
      return
    }
}

function select_Alhatham() {
  if (count_Alhaitham == false){
    document.querySelector(".char .Alhaitham .box").style.cssText = Borders
    count_Alhaitham = true;
    Character[Character.length] = "Alhaitham";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Alhaitham == true){
    document.querySelector(".char .Alhaitham .box").style.border="";
    count_Alhaitham = false;
    let index = Character.indexOf("Alhaitham");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Aloy() {
  if (count_Aloy == false){
    document.querySelector(".char .Aloy .box").style.cssText = Borders
    count_Aloy = true;
    Character[Character.length] = "Aloy";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Aloy == true){
    document.querySelector(".char .Aloy .box").style.border="";
    count_Aloy = false;
    let index = Character.indexOf("Aloy");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Amber() {
  if (count_Amber == false){
    document.querySelector(".char .Amber .box").style.cssText = Borders
    count_Amber = true;
    Character[Character.length] = "Amber";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Amber == true){
    document.querySelector(".char .Amber .box").style.border="";
    count_Amber = false;
    let index = Character.indexOf("Amber");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Arataki_Itto() {
  if (count_Arataki_Itto == false){
    document.querySelector(".char .Arataki_Itto .box").style.cssText = Borders
    count_Arataki_Itto = true;
    Character[Character.length] = "Arataki Itto";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Arataki_Itto == true){
    document.querySelector(".char .Arataki_Itto .box").style.border="";
    count_Arataki_Itto = false;
    let index = Character.indexOf("Arataki Itto");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Baizhu() {
  if (count_Baizhu == false){
    document.querySelector(".char .Baizhu .box").style.cssText = Borders
    count_Baizhu = true;
    Character[Character.length] = "Baizhu";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Baizhu == true){
    document.querySelector(".char .Baizhu .box").style.border="";
    count_Baizhu = false;
    let index = Character.indexOf("Baizhu");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Barbara() {
  if (count_Barbara == false){
    document.querySelector(".char .Barbara .box").style.cssText = Borders
    count_Barbara = true;
    Character[Character.length] = "Barbara";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Barbara == true){
    document.querySelector(".char .Barbara .box").style.border="";
    count_Barbara = false;
    let index = Character.indexOf("Barbara");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Beidou() {
  if (count_Beidou == false){
    document.querySelector(".char .Beidou .box").style.cssText = Borders
    count_Beidou = true;
    Character[Character.length] = "Beidou";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Beidou == true){
    document.querySelector(".char .Beidou .box").style.border="";
    count_Beidou = false;
    let index = Character.indexOf("Beidou");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Bennett() {
  if (count_Bennett == false){
    document.querySelector(".char .Bennett .box").style.cssText = Borders
    count_Bennett = true;
    Character[Character.length] = "Bennett";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Bennett == true){
    document.querySelector(".char .Bennett .box").style.border="";
    count_Bennett = false;
    let index = Character.indexOf("Bennett");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Candace() {
  if (count_Candace == false){
    document.querySelector(".char .Candace .box").style.cssText = Borders
    count_Candace = true;
    Character[Character.length] = "Candace";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Candace == true){
    document.querySelector(".char .Candace .box").style.border="";
    count_Candace = false;
    let index = Character.indexOf("Candace");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Chongyun() {
  if (count_Chongyun == false){
    document.querySelector(".char .Chongyun .box").style.cssText = Borders
    count_Chongyun = true;
    Character[Character.length] = "Chongyun";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Chongyun == true){
    document.querySelector(".char .Chongyun .box").style.border="";
    count_Chongyun = false;
    let index = Character.indexOf("Chongyun");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Collei() {
  if (count_Collei == false){
    document.querySelector(".char .Collei .box").style.cssText = Borders
    count_Collei = true;
    Character[Character.length] = "Collei";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Collei == true){
    document.querySelector(".char .Collei .box").style.border="";
    count_Collei = false;
    let index = Character.indexOf("Collei");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Cyno() {
  if (count_Cyno == false){
    document.querySelector(".char .Cyno .box").style.cssText = Borders
    count_Cyno = true;
    Character[Character.length] = "Cyno";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Cyno == true){
    document.querySelector(".char .Cyno .box").style.border="";
    count_Cyno = false;
    let index = Character.indexOf("Cyno");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Dehya() {
  if (count_Dehya == false){
    document.querySelector(".char .Dehya .box").style.cssText = Borders
    count_Dehya = true;
    Character[Character.length] = "Dehya";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Dehya == true){
    document.querySelector(".char .Dehya .box").style.border="";
    count_Dehya = false;
    let index = Character.indexOf("Dehya");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Diluc() {
  if (count_Diluc == false){
    document.querySelector(".char .Diluc .box").style.cssText = Borders
    count_Diluc = true;
    Character[Character.length] = "Diluc";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Diluc == true){
    document.querySelector(".char .Diluc .box").style.border="";
    count_Diluc = false;
    let index = Character.indexOf("Diluc");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Diona() {
  if (count_Diona == false){
    document.querySelector(".char .Diona .box").style.cssText = Borders
    count_Diona = true;
    Character[Character.length] = "Diona";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Diona == true){
    document.querySelector(".char .Diona .box").style.border="";
    count_Diona = false;
    let index = Character.indexOf("Diona");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Dori() {
  if (count_Dori == false){
    document.querySelector(".char .Dori .box").style.cssText = Borders
    count_Dori = true;
    Character[Character.length] = "Dori";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Dori == true){
    document.querySelector(".char .Dori .box").style.border="";
    count_Dori = false;
    let index = Character.indexOf("Dori");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Eula() {
  if (count_Eula == false){
    document.querySelector(".char .Eula .box").style.cssText = Borders
    count_Eula = true;
    Character[Character.length] = "Eula";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Eula == true){
    document.querySelector(".char .Eula .box").style.border="";
    count_Eula = false;
    let index = Character.indexOf("Eula");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Faruzan() {
  if (count_Faruzan == false){
    document.querySelector(".char .Faruzan .box").style.cssText = Borders
    count_Faruzan = true;
    Character[Character.length] = "Faruzan";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Faruzan == true){
    document.querySelector(".char .Faruzan .box").style.border="";
    count_Faruzan = false;
    let index = Character.indexOf("Faruzan");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Fischl() {
  if (count_Fischl == false){
    document.querySelector(".char .Fischl .box").style.cssText = Borders
    count_Fischl = true;
    Character[Character.length] = "Fischl";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Fischl == true){
    document.querySelector(".char .Fischl .box").style.border="";
    count_Fischl = false;
    let index = Character.indexOf("Fischl");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Ganyu() {
  if (count_Ganyu == false){
    document.querySelector(".char .Ganyu .box").style.cssText = Borders
    count_Ganyu = true;
    Character[Character.length] = "Ganyu";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ganyu == true){
    document.querySelector(".char .Ganyu .box").style.border="";
    count_Ganyu = false;
    let index = Character.indexOf("Ganyu");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Gorou() {
  if (count_Gorou == false){
    document.querySelector(".char .Gorou .box").style.cssText = Borders
    count_Gorou = true;
    Character[Character.length] = "Gorou";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Gorou == true){
    document.querySelector(".char .Gorou .box").style.border="";
    count_Gorou = false;
    let index = Character.indexOf("Gorou");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Hutao() {
  if (count_Hutao == false){
    document.querySelector(".char .Hutao .box").style.cssText = Borders
    count_Hutao = true;
    Character[Character.length] = "Hutao";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Hutao == true){
    document.querySelector(".char .Hutao .box").style.border="";
    count_Hutao = false;
    let index = Character.indexOf("Hutao");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Jean() {
  if (count_Jean == false){
    document.querySelector(".char .Jean .box").style.cssText = Borders
    count_Jean = true;
    Character[Character.length] = "Jean";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Jean == true){
    document.querySelector(".char .Jean .box").style.border="";
    count_Jean = false;
    let index = Character.indexOf("Jean");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kaeya() {
  if (count_Kaeya == false){
    document.querySelector(".char .Kaeya .box").style.cssText = Borders
    count_Kaeya = true;
    Character[Character.length] = "Kaeya";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kaeya == true){
    document.querySelector(".char .Kaeya .box").style.border="";
    count_Kaeya = false;
    let index = Character.indexOf("Kaeya");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kaveh() {
  if (count_Kaveh == false){
    document.querySelector(".char .Kaveh .box").style.cssText = Borders
    count_Kaveh = true;
    Character[Character.length] = "Kaveh";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kaveh == true){
    document.querySelector(".char .Kaveh .box").style.border="";
    count_Kaveh = false;
    let index = Character.indexOf("Kaveh");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Ayaka() {
  if (count_Ayaka == false){
    document.querySelector(".char .Ayaka .box").style.cssText = Borders
    count_Ayaka = true;
    Character[Character.length] = "Ayaka";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ayaka == true){
    document.querySelector(".char .Ayaka .box").style.border="";
    count_Ayaka = false;
    let index = Character.indexOf("Ayaka");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Ayato() {
  if (count_Ayato == false){
    document.querySelector(".char .Ayato .box").style.cssText = Borders
    count_Ayato = true;
    Character[Character.length] = "Ayato";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ayato == true){
    document.querySelector(".char .Ayato .box").style.border="";
    count_Ayato = false;
    let index = Character.indexOf("Ayato");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kazuha() {
  if (count_Kazuha == false){
    document.querySelector(".char .Kazuha .box").style.cssText = Borders
    count_Kazuha = true;
    Character[Character.length] = "Kazuha";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kazuha == true){
    document.querySelector(".char .Kazuha .box").style.border="";
    count_Kazuha = false;
    let index = Character.indexOf("Kazuha");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Keqing() {
  if (count_Keqing == false){
    document.querySelector(".char .Keqing .box").style.cssText = Borders
    count_Keqing = true;
    Character[Character.length] = "Keqing";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Keqing == true){
    document.querySelector(".char .Keqing .box").style.border="";
    count_Keqing = false;
    let index = Character.indexOf("Keqing");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kirara() {
  if (count_Kirara == false){
    document.querySelector(".char .Kirara .box").style.cssText = Borders
    count_Kirara = true;
    Character[Character.length] = "Kirara";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kirara == true){
    document.querySelector(".char .Kirara .box").style.border="";
    count_Kirara = false;
    let index = Character.indexOf("Kirara");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Klee() {
  if (count_Klee == false){
    document.querySelector(".char .Klee .box").style.cssText = Borders
    count_Klee = true;
    Character[Character.length] = "Klee";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Klee == true){
    document.querySelector(".char .Klee .box").style.border="";
    count_Klee = false;
    let index = Character.indexOf("Klee");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kujou_Sara() {
  if (count_Kujou_Sara == false){
    document.querySelector(".char .Kujou_Sara .box").style.cssText = Borders
    count_Kujou_Sara = true;
    Character[Character.length] = "Kujou Sara";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kujou_Sara == true){
    document.querySelector(".char .Kujou_Sara .box").style.border="";
    count_Kujou_Sara = false;
    let index = Character.indexOf("Kujou Sara");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kuki_Shinobu() {
  if (count_Kuki_Shinobu == false){
    document.querySelector(".char .Kuki_Shinobu .box").style.cssText = Borders
    count_Kuki_Shinobu = true;
    Character[Character.length] = "Kuki Shinobu";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kuki_Shinobu == true){
    document.querySelector(".char .Kuki_Shinobu .box").style.border="";
    count_Kuki_Shinobu = false;
    let index = Character.indexOf("Kuki Shinobu");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Layla() {
  if (count_Layla == false){
    document.querySelector(".char .Layla .box").style.cssText = Borders
    count_Layla = true;
    Character[Character.length] = "Layla";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Layla == true){
    document.querySelector(".char .Layla .box").style.border="";
    count_Layla = false;
    let index = Character.indexOf("Layla");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Lisa() {
  if (count_Lisa == false){
    document.querySelector(".char .Lisa .box").style.cssText = Borders
    count_Lisa = true;
    Character[Character.length] = "Lisa";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Lisa == true){
    document.querySelector(".char .Lisa .box").style.border="";
    count_Lisa = false;
    let index = Character.indexOf("Lisa");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Mika() {
  if (count_Mika == false){
    document.querySelector(".char .Mika .box").style.cssText = Borders
    count_Mika = true;
    Character[Character.length] = "Mika";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Mika == true){
    document.querySelector(".char .Mika .box").style.border="";
    count_Mika = false;
    let index = Character.indexOf("Mika");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Mona() {
  if (count_Mona == false){
    document.querySelector(".char .Mona .box").style.cssText = Borders
    count_Mona = true;
    Character[Character.length] = "Mona";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Mona == true){
    document.querySelector(".char .Mona .box").style.border="";
    count_Mona = false;
    let index = Character.indexOf("Mona");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Nahida() {
  if (count_Nahida == false){
    document.querySelector(".char .Nahida .box").style.cssText = Borders
    count_Nahida = true;
    Character[Character.length] = "Nahida";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Nahida == true){
    document.querySelector(".char .Nahida .box").style.border="";
    count_Nahida = false;
    let index = Character.indexOf("Nahida");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Nilou() {
  if (count_Nilou == false){
    document.querySelector(".char .Nilou .box").style.cssText = Borders
    count_Nilou = true;
    Character[Character.length] = "Nilou";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Nilou == true){
    document.querySelector(".char .Nilou .box").style.border="";
    count_Nilou = false;
    let index = Character.indexOf("Nilou");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Ningguang() {
  if (count_Ningguang == false){
    document.querySelector(".char .Ningguang .box").style.cssText = Borders
    count_Ningguang = true;
    Character[Character.length] = "Ningguang";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ningguang == true){
    document.querySelector(".char .Ningguang .box").style.border="";
    count_Ningguang = false;
    let index = Character.indexOf("Ningguang");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Noelle() {
  if (count_Noelle == false){
    document.querySelector(".char .Noelle .box").style.cssText = Borders
    count_Noelle = true;
    Character[Character.length] = "Noelle";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Noelle == true){
    document.querySelector(".char .Noelle .box").style.border="";
    count_Noelle = false;
    let index = Character.indexOf("Noelle");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Qiqi() {
  if (count_Qiqi == false){
    document.querySelector(".char .Qiqi .box").style.cssText = Borders
    count_Qiqi = true;
    Character[Character.length] = "Qiqi";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Qiqi == true){
    document.querySelector(".char .Qiqi .box").style.border="";
    count_Qiqi = false;
    let index = Character.indexOf("Qiqi");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Raiden() {
  if (count_Raiden == false){
    document.querySelector(".char .Raiden .box").style.cssText = Borders
    count_Raiden = true;
    Character[Character.length] = "Raiden";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Raiden == true){
    document.querySelector(".char .Raiden .box").style.border="";
    count_Raiden = false;
    let index = Character.indexOf("Raiden");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Razor() {
  if (count_Razor == false){
    document.querySelector(".char .Razor .box").style.cssText = Borders
    count_Razor = true;
    Character[Character.length] = "Razor";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Razor == true){
    document.querySelector(".char .Razor .box").style.border="";
    count_Razor = false;
    let index = Character.indexOf("Razor");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Rosaria() {
  if (count_Rosaria == false){
    document.querySelector(".char .Rosaria .box").style.cssText = Borders
    count_Rosaria = true;
    Character[Character.length] = "Rosaria";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Rosaria == true){
    document.querySelector(".char .Rosaria .box").style.border="";
    count_Rosaria = false;
    let index = Character.indexOf("Rosaria");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Kokomi() {
  if (count_Kokomi == false){
    document.querySelector(".char .Kokomi .box").style.cssText = Borders
    count_Kokomi = true;
    Character[Character.length] = "Kokomi";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Kokomi == true){
    document.querySelector(".char .Kokomi .box").style.border="";
    count_Kokomi = false;
    let index = Character.indexOf("Kokomi");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Sayu() {
  if (count_Sayu == false){
    document.querySelector(".char .Sayu .box").style.cssText = Borders
    count_Sayu = true;
    Character[Character.length] = "Sayu";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Sayu == true){
    document.querySelector(".char .Sayu .box").style.border="";
    count_Sayu = false;
    let index = Character.indexOf("Sayu");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Shenhe() {
  if (count_Shenhe == false){
    document.querySelector(".char .Shenhe .box").style.cssText = Borders
    count_Shenhe = true;
    Character[Character.length] = "Shenhe";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Shenhe == true){
    document.querySelector(".char .Shenhe .box").style.border="";
    count_Shenhe = false;
    let index = Character.indexOf("Shenhe");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Heizou() {
  if (count_Heizou == false){
    document.querySelector(".char .Heizou .box").style.cssText = Borders
    count_Heizou = true;
    Character[Character.length] = "Heizou";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Heizou == true){
    document.querySelector(".char .Heizou .box").style.border="";
    count_Heizou = false;
    let index = Character.indexOf("Heizou");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Sucrose() {
  if (count_Sucrose == false){
    document.querySelector(".char .Sucrose .box").style.cssText = Borders
    count_Sucrose = true;
    Character[Character.length] = "Sucrose";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Sucrose == true){
    document.querySelector(".char .Sucrose .box").style.border="";
    count_Sucrose = false;
    let index = Character.indexOf("Sucrose");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Tartaglia() {
  if (count_Tartaglia == false){
    document.querySelector(".char .Tartaglia .box").style.cssText = Borders
    count_Tartaglia = true;
    Character[Character.length] = "Tartaglia";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Tartaglia == true){
    document.querySelector(".char .Tartaglia .box").style.border="";
    count_Tartaglia = false;
    let index = Character.indexOf("Tartaglia");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Thoma() {
  if (count_Thoma == false){
    document.querySelector(".char .Thoma .box").style.cssText = Borders
    count_Thoma = true;
    Character[Character.length] = "Thoma";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Thoma == true){
    document.querySelector(".char .Thoma .box").style.border="";
    count_Thoma = false;
    let index = Character.indexOf("Thoma");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Tighnari() {
  if (count_Tighnari == false){
    document.querySelector(".char .Tighnari .box").style.cssText = Borders
    count_Tighnari = true;
    Character[Character.length] = "Tighnari";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Tighnari == true){
    document.querySelector(".char .Tighnari .box").style.border="";
    count_Tighnari = false;
    let index = Character.indexOf("Tighnari");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Venti() {
  if (count_Venti == false){
    document.querySelector(".char .Venti .box").style.cssText = Borders
    count_Venti = true;
    Character[Character.length] = "Venti";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Venti == true){
    document.querySelector(".char .Venti .box").style.border="";
    count_Venti = false;
    let index = Character.indexOf("Venti");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Wanderer() {
  if (count_Wanderer == false){
    document.querySelector(".char .Wanderer .box").style.cssText = Borders
    count_Wanderer = true;
    Character[Character.length] = "Wanderer";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Wanderer == true){
    document.querySelector(".char .Wanderer .box").style.border="";
    count_Wanderer = false;
    let index = Character.indexOf("Wanderer");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Xiangling() {
  if (count_Xiangling == false){
    document.querySelector(".char .Xiangling .box").style.cssText = Borders
    count_Xiangling = true;
    Character[Character.length] = "Xiangling";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Xiangling == true){
    document.querySelector(".char .Xiangling .box").style.border="";
    count_Xiangling = false;
    let index = Character.indexOf("Xiangling");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Xiao() {
  if (count_Xiao == false){
    document.querySelector(".char .Xiao .box").style.cssText = Borders
    count_Xiao = true;
    Character[Character.length] = "Xiao";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Xiao == true){
    document.querySelector(".char .Xiao .box").style.border="";
    count_Xiao = false;
    let index = Character.indexOf("Xiao");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Xingqiu() {
  if (count_Xingqiu == false){
    document.querySelector(".char .Xingqiu .box").style.cssText = Borders
    count_Xingqiu = true;
    Character[Character.length] = "Xingqiu";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Xingqiu == true){
    document.querySelector(".char .Xingqiu .box").style.border="";
    count_Xingqiu = false;
    let index = Character.indexOf("Xingqiu");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Xinyan() {
  if (count_Xinyan == false){
    document.querySelector(".char .Xinyan .box").style.cssText = Borders
    count_Xinyan = true;
    Character[Character.length] = "Xinyan";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Xinyan == true){
    document.querySelector(".char .Xinyan .box").style.border="";
    count_Xinyan = false;
    let index = Character.indexOf("Xinyan");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yae_miko() {
  if (count_Yae_miko == false){
    document.querySelector(".char .Yae_miko .box").style.cssText = Borders
    count_Yae_miko = true;
    Character[Character.length] = "Yae Miko";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yae_miko == true){
    document.querySelector(".char .Yae_miko .box").style.border="";
    count_Yae_miko = false;
    let index = Character.indexOf("Yae Miko");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yanfei() {
  if (count_Yanfei == false){
    document.querySelector(".char .Yanfei .box").style.cssText = Borders
    count_Yanfei = true;
    Character[Character.length] = "Yanfei";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yanfei == true){
    document.querySelector(".char .Yanfei .box").style.border="";
    count_Yanfei = false;
    let index = Character.indexOf("Yanfei");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yaoyao() {
  if (count_Yaoyao == false){
    document.querySelector(".char .Yaoyao .box").style.cssText = Borders
    count_Yaoyao = true;
    Character[Character.length] = "Yaoyao";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yaoyao == true){
    document.querySelector(".char .Yaoyao .box").style.border="";
    count_Yaoyao = false;
    let index = Character.indexOf("Yaoyao");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yelan() {
  if (count_Yelan == false){
    document.querySelector(".char .Yelan .box").style.cssText = Borders
    count_Yelan = true;
    Character[Character.length] = "Yelan";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yelan == true){
    document.querySelector(".char .Yelan .box").style.border="";
    count_Yelan = false;
    let index = Character.indexOf("Yelan");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yoimiya() {
  if (count_Yoimiya == false){
    document.querySelector(".char .Yoimiya .box").style.cssText = Borders
    count_Yoimiya = true;
    Character[Character.length] = "Yoimiya";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yoimiya == true){
    document.querySelector(".char .Yoimiya .box").style.border="";
    count_Yoimiya = false;
    let index = Character.indexOf("Yoimiya");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Yunjin() {
  if (count_Yunjin == false){
    document.querySelector(".char .Yunjin .box").style.cssText = Borders
    count_Yunjin = true;
    Character[Character.length] = "Yunjin";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Yunjin == true){
    document.querySelector(".char .Yunjin .box").style.border="";
    count_Yunjin = false;
    let index = Character.indexOf("Yunjin");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

function select_Zhongli() {
  if (count_Zhongli == false){
    document.querySelector(".char .Zhongli .box").style.cssText = Borders
    count_Zhongli = true;
    Character[Character.length] = "Zhongli";
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
  if (count_Zhongli == true){
    document.querySelector(".char .Zhongli .box").style.border="";
    count_Zhongli = false;
    let index = Character.indexOf("Zhongli");
    Character.splice(index,1);
    if (Character.length == CharCheck.length){
      document.querySelector(".selectall_char").style.cssText = "display: none;"
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
      document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }
    return
  }
}

//BOSS
function select_Anemo_Hypotasis() {
  if (count_Anemo_Hypotasis == false){
    document.querySelector(".boss.Anemo_Hypotasis.box").style.cssText = Borders
    count_Anemo_Hypotasis = true;
    Boss[Boss.length] = "Anemo Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Anemo_Hypotasis == true){
    document.querySelector(".boss.Anemo_Hypotasis.box").style.border="";
    count_Anemo_Hypotasis = false;
    let index = Boss.indexOf("Anemo Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Cryo_Hypotasis() {
  if (count_Cryo_Hypotasis == false){
    document.querySelector(".boss.Cryo_Hypotasis.box").style.cssText = Borders
    count_Cryo_Hypotasis = true;
    Boss[Boss.length] = "Cryo Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Cryo_Hypotasis == true){
    document.querySelector(".boss.Cryo_Hypotasis.box").style.border="";
    count_Cryo_Hypotasis = false;
    let index = Boss.indexOf("Cryo Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Dendro_Hypotasis() {
  if (count_Dendro_Hypotasis == false){
    document.querySelector(".boss.Dendro_Hypotasis.box").style.cssText = Borders
    count_Dendro_Hypotasis = true;
    Boss[Boss.length] = "Dendro Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Dendro_Hypotasis == true){
    document.querySelector(".boss.Dendro_Hypotasis.box").style.border="";
    count_Dendro_Hypotasis = false;
    let index = Boss.indexOf("Dendro Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Electro_Hypotasis() {
  if (count_Electro_Hypotasis == false){
    document.querySelector(".boss.Electro_Hypotasis.box").style.cssText = Borders
    count_Electro_Hypotasis = true;
    Boss[Boss.length] = "Electro Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Electro_Hypotasis == true){
    document.querySelector(".boss.Electro_Hypotasis.box").style.border="";
    count_Electro_Hypotasis = false;
    let index = Boss.indexOf("Electro Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Geo_Hypotasis() {
  if (count_Geo_Hypotasis == false){
    document.querySelector(".boss.Geo_Hypotasis.box").style.cssText = Borders
    count_Geo_Hypotasis = true;
    Boss[Boss.length] = "Geo Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Geo_Hypotasis == true){
    document.querySelector(".boss.Geo_Hypotasis.box").style.border="";
    count_Geo_Hypotasis = false;
    let index = Boss.indexOf("Geo Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Hydro_Hypotasis() {
  if (count_Hydro_Hypotasis == false){
    document.querySelector(".boss.Hydro_Hypotasis.box").style.cssText = Borders
    count_Hydro_Hypotasis = true;
    Boss[Boss.length] = "Hydro Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Hydro_Hypotasis == true){
    document.querySelector(".boss.Hydro_Hypotasis.box").style.border="";
    count_Hydro_Hypotasis = false;
    let index = Boss.indexOf("Hydro Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Pyro_Hypotasis() {
  if (count_Pyro_Hypotasis == false){
    document.querySelector(".boss.Pyro_Hypotasis.box").style.cssText = Borders
    count_Pyro_Hypotasis = true;
    Boss[Boss.length] = "Pyro Hypotasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Pyro_Hypotasis == true){
    document.querySelector(".boss.Pyro_Hypotasis.box").style.border="";
    count_Pyro_Hypotasis = false;
    let index = Boss.indexOf("Pyro Hypotasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Cryo_Regisvine() {
  if (count_Cryo_Regisvine == false){
    document.querySelector(".boss.Cryo_Regisvine.box").style.cssText = Borders
    count_Cryo_Regisvine = true;
    Boss[Boss.length] = "Cryo Regisvine";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Cryo_Regisvine == true){
    document.querySelector(".boss.Cryo_Regisvine.box").style.border="";
    count_Cryo_Regisvine = false;
    let index = Boss.indexOf("Cryo Regisvine");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Electro_Regisvine() {
  if (count_Electro_Regisvine == false){
    document.querySelector(".boss.Electro_Regisvine.box").style.cssText = Borders
    count_Electro_Regisvine = true;
    Boss[Boss.length] = "Electro Regisvine";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Electro_Regisvine == true){
    document.querySelector(".boss.Electro_Regisvine.box").style.border="";
    count_Electro_Regisvine = false;
    let index = Boss.indexOf("Electro Regisvine");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Pyro_Regisvine() {
  if (count_Pyro_Regisvine == false){
    document.querySelector(".boss.Pyro_Regisvine.box").style.cssText = Borders
    count_Pyro_Regisvine = true;
    Boss[Boss.length] = "Pyro Regisvine";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Pyro_Regisvine == true){
    document.querySelector(".boss.Pyro_Regisvine.box").style.border="";
    count_Pyro_Regisvine = false;
    let index = Boss.indexOf("Pyro Regisvine");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Oceanid() {
  if (count_Oceanid == false){
    document.querySelector(".boss.Oceanid.box").style.cssText = Borders
    count_Oceanid = true;
    Boss[Boss.length] = "Oceanid";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Oceanid == true){
    document.querySelector(".boss.Oceanid.box").style.border="";
    count_Oceanid = false;
    let index = Boss.indexOf("Oceanid");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Primo_Geovishap() {
  if (count_Primo_Geovishap == false){
    document.querySelector(".boss.Primo_Geovishap.box").style.cssText = Borders
    count_Primo_Geovishap = true;
    Boss[Boss.length] = "Primo Geovishap";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Primo_Geovishap == true){
    document.querySelector(".boss.Primo_Geovishap.box").style.border="";
    count_Primo_Geovishap = false;
    let index = Boss.indexOf("Primo Geovishap");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Golden_Wolflord() {
  if (count_Golden_Wolflord == false){
    document.querySelector(".boss.Golden_Wolflord.box").style.cssText = Borders
    count_Golden_Wolflord = true;
    Boss[Boss.length] = "Golden Wolflord";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Golden_Wolflord == true){
    document.querySelector(".boss.Golden_Wolflord.box").style.border="";
    count_Golden_Wolflord = false;
    let index = Boss.indexOf("Golden Wolflord");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Bathysmal_Vishap() {
  if (count_Bathysmal_Vishap == false){
    document.querySelector(".boss.Bathysmal_Vishap.box").style.cssText = Borders
    count_Bathysmal_Vishap = true;
    Boss[Boss.length] = "Bathysmal  Vishap";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Bathysmal_Vishap == true){
    document.querySelector(".boss.Bathysmal_Vishap.box").style.border="";
    count_Bathysmal_Vishap = false;
    let index = Boss.indexOf("Bathysmal Vishap");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Thunder_Manifestation() {
  if (count_Thunder_Manifestation == false){
    document.querySelector(".boss.Thunder_Manifestation.box").style.cssText = Borders
    count_Thunder_Manifestation = true;
    Boss[Boss.length] = "Thunder";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Thunder_Manifestation == true){
    document.querySelector(".boss.Thunder_Manifestation.box").style.border="";
    count_Thunder_Manifestation = false;
    let index = Boss.indexOf("Thunder");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Iniquitous_Baptist() {
  if (count_Iniquitous_Baptist == false){
    document.querySelector(".boss.Iniquitous_Baptist.box").style.cssText = Borders
    count_Iniquitous_Baptist = true;
    Boss[Boss.length] = "Iniquitous Baptist";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Iniquitous_Baptist == true){
    document.querySelector(".boss.Iniquitous_Baptist.box").style.border="";
    count_Iniquitous_Baptist = false;
    let index = Boss.indexOf("Iniquitous Baptist");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Jadeplume() {
  if (count_Jadeplume_Terrorshroom == false){
    document.querySelector(".boss.Jadeplume.box").style.cssText = Borders
    count_Jadeplume_Terrorshroom = true;
    Boss[Boss.length] = "Jadeplume";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Jadeplume_Terrorshroom == true){
    document.querySelector(".boss.Jadeplume_Terrorshroom.box").style.border="";
    count_Jadeplume_Terrorshroom = false;
    let index = Boss.indexOf("Jadeplume Terrorshroom");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Setekh_Wenut() {
  if (count_Setekh_Wenut == false){
    document.querySelector(".boss.Setekh_Wenut.box").style.cssText = Borders
    count_Setekh_Wenut = true;
    Boss[Boss.length] = "Setekh Wenut";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Setekh_Wenut == true){
    document.querySelector(".boss.Setekh_Wenut.box").style.border="";
    count_Setekh_Wenut = false;
    let index = Boss.indexOf("Setekh Wenut");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Maguu_Kenki() {
  if (count_Maguu_Kenki == false){
    document.querySelector(".boss.Maguu_Kenki.box").style.cssText = Borders
    count_Maguu_Kenki = true;
    Boss[Boss.length] = "Maguu Kenki";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Maguu_Kenki == true){
    document.querySelector(".boss.Maguu_Kenki.box").style.border="";
    count_Maguu_Kenki = false;
    let index = Boss.indexOf("Maguu Kenki");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Aeonblight_Drake() {
  if (count_Aeonblight_Drake == false){
    document.querySelector(".boss.Aeonblight_Drake.box").style.cssText = Borders
    count_Aeonblight_Drake = true;
    Boss[Boss.length] = "Aeonblight Drake";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Aeonblight_Drake == true){
    document.querySelector(".boss.Aeonblight_Drake.box").style.border="";
    count_Aeonblight_Drake = false;
    let index = Boss.indexOf("Aeonblight Drake");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Algorithm() {
  if (count_Algorithm == false){
    document.querySelector(".boss.Algorithm.box").style.cssText = Borders
    count_Algorithm = true;
    Boss[Boss.length] = "Algorithm";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Algorithm == true){
    document.querySelector(".boss.Algorithm.box").style.border="";
    count_Algorithm = false;
    let index = Boss.indexOf("Algorithm");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Perpetual() {
  if (count_Perpetual_Mechanical_Array == false){
    document.querySelector(".boss.Perpetual.box").style.cssText = Borders
    count_Perpetual_Mechanical_Array = true;
    Boss[Boss.length] = "Perpetual";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Perpetual_Mechanical_Array == true){
    document.querySelector(".boss.Perpetual.box").style.border="";
    count_Perpetual_Mechanical_Array = false;
    let index = Boss.indexOf("Perpetual");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Ruin_Serpent() {
  if (count_Ruin_Serpent == false){
    document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders
    count_Ruin_Serpent = true;
    Boss[Boss.length] = "Ruin Serpent";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ruin_Serpent == true){
    document.querySelector(".boss.Ruin_Serpent.box").style.border="";
    count_Ruin_Serpent = false;
    let index = Boss.indexOf("Ruin Serpent");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Ruin_Serpent() {
  if (count_Ruin_Serpent == false){
    document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders
    count_Ruin_Serpent = true;
    Boss[Boss.length] = "Ruin Serpent";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Ruin_Serpent == true){
    document.querySelector(".boss.Ruin_Serpent.box").style.border="";
    count_Ruin_Serpent = false;
    let index = Boss.indexOf("Ruin Serpent");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Lupus_Boreas() {
  if (count_Lupus_Boreas == false){
    document.querySelector(".boss.Lupus_Boreas.box").style.cssText = Borders
    count_Lupus_Boreas = true;
    Boss[Boss.length] = "Lupus Boreas";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Lupus_Boreas == true){
    document.querySelector(".boss.Lupus_Boreas.box").style.border="";
    count_Lupus_Boreas = false;
    let index = Boss.indexOf("Lupus Boreas");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Stormterror() {
  if (count_Stormterror == false){
    document.querySelector(".boss.Stormterror.box").style.cssText = Borders
    count_Stormterror = true;
    Boss[Boss.length] = "Stormterror";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Stormterror == true){
    document.querySelector(".boss.Stormterror.box").style.border="";
    count_Stormterror = false;
    let index = Boss.indexOf("Stormterror");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Azhdaha() {
  if (count_Azhdaha == false){
    document.querySelector(".boss.Azhdaha.box").style.cssText = Borders
    count_Azhdaha = true;
    Boss[Boss.length] = "Azhdaha";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Azhdaha == true){
    document.querySelector(".boss.Azhdaha.box").style.border="";
    count_Azhdaha = false;
    let index = Boss.indexOf("Azhdaha");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Childe() {
  if (count_Childe == false){
    document.querySelector(".boss.Childe.box").style.cssText = Borders
    count_Childe = true;
    Boss[Boss.length] = "Childe";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Childe == true){
    document.querySelector(".boss.Childe.box").style.border="";
    count_Childe = false;
    let index = Boss.indexOf("Childe");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_La_Signora() {
  if (count_La_Signora == false){
    document.querySelector(".boss.La_Signora.box").style.cssText = Borders
    count_La_Signora = true;
    Boss[Boss.length] = "La Signora";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_La_Signora == true){
    document.querySelector(".boss.La_Signora.box").style.border="";
    count_La_Signora = false;
    let index = Boss.indexOf("La Signora");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Magatsu_Mitake() {
  if (count_Magatsu_Mitake == false){
    document.querySelector(".boss.Magatsu_Mitake.box").style.cssText = Borders
    count_Magatsu_Mitake = true;
    Boss[Boss.length] = "Magatsu Mitake";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Magatsu_Mitake == true){
    document.querySelector(".boss.Magatsu_Mitake.box").style.border="";
    count_Magatsu_Mitake = false;
    let index = Boss.indexOf("Magatsu Mitake");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Shouki_no_Kami() {
  if (count_Shouki_no_Kami == false){
    document.querySelector(".boss.Shouki_no_Kami.box").style.cssText = Borders
    count_Shouki_no_Kami = true;
    Boss[Boss.length] = "Shouki no Kami";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Shouki_no_Kami == true){
    document.querySelector(".boss.Shouki_no_Kami.box").style.border="";
    count_Shouki_no_Kami = false;
    let index = Boss.indexOf("Shouki no Kami");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}

function select_Warden_of_Oasis() {
  if (count_Warden_of_Oasis == false){
    document.querySelector(".boss.Warden_of_Oasis.box").style.cssText = Borders
    count_Warden_of_Oasis = true;
    Boss[Boss.length] = "Warden of Oasis";
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    return
  }
  if (count_Warden_of_Oasis == true){
    document.querySelector(".boss.Warden_of_Oasis.box").style.border="";
    count_Warden_of_Oasis = false;
    let index = Boss.indexOf("Warden of Oasis");
    Boss.splice(index,1);
    if (Boss.length == Countboss.length){
      document.querySelector(".selectall_boss").style.cssText = "display: none;"
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
      document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
      document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    } 
    return
  }
}