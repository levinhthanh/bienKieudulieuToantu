function hamConvert(){
    var sotienInput=document.getElementById('sotien').value;
    var sotienOutput=0;
    var loaitienInput=document.getElementById('from').value;
    var loaitienOutput=document.getElementById('to').value;
    if(loaitienOutput==loaitienInput)  sotienOutput=sotienInput;
    if((loaitienInput=="VND") &&( loaitienOutput=="USD")){sotienOutput=sotienInput/23000;}
    if((loaitienInput=="USD") &&( loaitienOutput=="VND")) {sotienOutput=sotienInput*23000;}
    document.getElementById('tiendoi').innerHTML='Result = '+sotienOutput + ' '+loaitienOutput;  
                     
}