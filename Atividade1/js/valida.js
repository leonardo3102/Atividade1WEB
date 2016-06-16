function is_checked(){
    var var1 = document.getElementById('var1').checked;
    var var2 = document.getElementById('var2').checked;
    var var3 = document.getElementById('var3').checked;
    var var4 = document.getElementById('var4').checked;
    var var5 = document.getElementById('var5').checked;
    var var6 = document.getElementById('var6').checked;
    var var7 = document.getElementById('var7').checked;
    var var8 = document.getElementById('var8').checked;
    var var9 = document.getElementById('var9').checked;
    var var10 = document.getElementById('var10').checked;
    var var11 = document.getElementById('var11').checked;
    var var12 = document.getElementById('var12').checked;
    var var13 = document.getElementById('var13').checked;
    var var14 = document.getElementById('var14').checked;
    var var15 = document.getElementById('var15').checked;
    var var16 = document.getElementById('var16').checked;
    if(var1==false && var2==false && var3==false && var4==false && var5==false && var6==false && var7==false && var8==false && var9==false && var10==false && var11==false && var12==false && var13==false &&var14==false && var15==false&& var16==false){
        alert('Selecione uma opção!');
        return false;
    }else{
        return true;
    }
}


$(document).ready(function(){
    $("#validar").click(function(){
        var var1 = document.getElementById('var1').checked;
        var var2 = document.getElementById('var2').checked;
        var var3 = document.getElementById('var3').checked;
        var var4 = document.getElementById('var4').checked;
        var var5 = document.getElementById('var5').checked;
        var var6 = document.getElementById('var6').checked;
        var var7 = document.getElementById('var7').checked;
        var var8 = document.getElementById('var8').checked;
        var var9 = document.getElementById('var9').checked;
        var var10 = document.getElementById('var10').checked;
        var var11 = document.getElementById('var11').checked;
        var var12 = document.getElementById('var12').checked;
        var var13 = document.getElementById('var13').checked;
        var var14 = document.getElementById('var14').checked;
        var var15 = document.getElementById('var15').checked;
        var var16 = document.getElementById('var16').checked;
        var var17 = document.getElementById('var17').checked;
        var var18 = document.getElementById('var18').checked;
        var var19 = document.getElementById('var19').checked;
        var var20 = document.getElementById('var20').checked;
        var var21 = document.getElementById('var21').checked;
        var var22 = document.getElementById('var22').checked;
        var var23 = document.getElementById('var23').checked;
        var var24 = document.getElementById('var24').checked;
        var var25 = document.getElementById('var25').checked;
        var var26 = document.getElementById('var26').checked;
        var var27 = document.getElementById('var27').checked;
        var var28 = document.getElementById('var28').checked;
        var var29 = document.getElementById('var29').checked;
        var var30 = document.getElementById('var30').checked;
        var var31 = document.getElementById('var31').checked;
        var var32 = document.getElementById('var32').checked;
        if(var1==false && var2==false && var3==false && var4==false && var5==false && var6==false && var7==false && var8==false && var9==false && var10==false && var11==false && var12==false && var13==false &&var14==false && var15==false&& var16==false){
            document.getElementById("resultado").innerHTML = 'Você não terminou todas atividades';
        }else if(var2==true&&var7==true&&var12==true&&var16==true&&var17==true&&var22==true&&var27==true&&var32==true){
            document.getElementById("resultado").innerHTML = "Prabéns. Você acertou todas as questões";
        }else{
            document.getElementById("resultado").innerHTML = "Você ainda não acertou todas as questões";
        }
    });
});
