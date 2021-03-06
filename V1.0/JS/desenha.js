function desenha_obj(){

    for(var x = 0, tam = obstaculos._obsfundo.length; x < tam; x++){
        var obsb = obstaculos._obsfundo[x];

        if(obsb.altura >= 55){
            
            if(obsb.altura > 80){
                if(obsb.altura > 110)
                    spritePredio1_1.desenha(obsb.x, chao.y - obsb.altura + 25 , obsb.largura, obsb.altura);
                else if(obsb.altura > 100)
                    spritePredio1_2.desenha(obsb.x, chao.y - obsb.altura + 25 , obsb.largura, obsb.altura);
                else if(obsb.altura > 90)
                    spritePredio1_1Antena.desenha(obsb.x, chao.y - obsb.altura + 25 , obsb.largura, obsb.altura);
                else
                    spritePredio1_2Antena.desenha(obsb.x, chao.y - obsb.altura + 25 , obsb.largura, obsb.altura);
            }else if(obsb.altura > 60)
                spritePredio2.desenha(obsb.x, chao.y - obsb.altura + 25 , obsb.largura, obsb.altura);
            else
                spritePisao.desenha(obsb.x, chao.y - 38, obsb.largura, obsb.altura);

        }else if(obsb.altura < 55 && obsb.altura >= 50)
            spriteArvore.desenha(obsb.x, chao.y - obsb.altura + 8, obsb.largura, obsb.altura);
        else if(obsb.altura < 50 && obsb.altura >= 45)
            spriteArvore_frutifera.desenha(obsb.x, chao.y - obsb.altura + 13, obsb.largura, obsb.altura);
        else if(obsb.altura < 45 && obsb.altura >= 35)
            spriteArvore2.desenha(obsb.x, chao.y - 50 , obsb.largura, obsb.altura);
        else
            spriteArbusto.desenha(obsb.x, chao.y - obsb.altura + 18, obsb.largura, obsb.altura);
    }

    chao.desenha();

    for(var x = 0, tam = obstaculos._obsfundo.length; x < tam; x++){
        var obsb = obstaculos._obsfundo[x];

        // Sombra dos objetos
        if(obsb.altura > 80){
            if(obsb.altura > 90)
                spriteSombraPredio1.desenha(obsb.x - 28, chao.y, obsb.largura, obsb.altura);
            else
                spriteSombraPredio_Antena.desenha(obsb.x - 18, chao.y, obsb.largura, obsb.altura);
        }else if(obsb.altura > 60)
            spriteSombraPredio2_1.desenha(obsb.x - 17, chao.y, obsb.largura, obsb.altura);
        else if(obsb.altura <= 60 && obsb.altura >= 55)
            spriteSombraPisao.desenha(obsb.x - 10, chao.y, obsb.largura, obsb.altura);
        else if(obsb.altura < 55 && obsb.altura >= 50)
            spriteSombra_Arvore.desenha(obsb.x - 11, chao.y, obsb.largura, obsb.altura);
        else if(obsb.altura < 50 && obsb.altura >= 45)
            spriteSombra_ArvoreFrutifera.desenha(obsb.x - 8, chao.y, obsb.largura, obsb.altura);
        else if(obsb.altura < 45 && obsb.altura >= 35)
            spriteSombra_Arvore2.desenha(obsb.x - 15, chao.y, obsb.largura, obsb.altura);
    }

    for(var i = 0, tam = obstaculos._obs.length; i < tam; i++){
        var obs = obstaculos._obs[i];

        if(obs.altura > 60){
            if(obs.altura > 110)
                spritePredio1_1.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
            else if(obs.altura > 100)
                spritePredio1_1Antena.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
            else if(obs.altura > 90)
                spritePredio1_2.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
            else if( obs.altura > 80)
                spritePredio1_2Antena.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
            else
                spritePredio2.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
        }else if(obs.altura >= 55 && obs.altura <= 60)
            spritePisao.desenha(obs.x, chao.y - 25, obs.largura, obs.altura);
        else if(obs.altura < 55 && obs.altura >= 50)
            spriteArvore.desenha(obs.x, chao.y - obs.altura + 25 , obs.largura, obs.altura);
        else if(obs.altura < 50 && obs.altura >= 45)
            spriteArvore_frutifera.desenha(obs.x + 10, chao.y - obs.altura + 25 , obs.largura, obs.altura);
        else if(obs.altura < 45 && obs.altura >= 35)
            spriteArvore2.desenha(obs.x, chao.y - 35 , obs.largura, obs.altura);
        else
            spriteArbusto.desenha(obs.x, chao.y - obs.altura + 36 , obs.largura, obs.altura);
    }

    chao.desenha2();
    jogador.desenha();

    for(var x = 0, tam = obstaculos._obsfrente.length; x < tam; x++){
        var obsf = obstaculos._obsfrente[x];

        if(obsf.altura < 55 && obsf.altura >= 50)
            spriteArvore.desenha(obsf.x, chao.y - obsf.altura + 40, obsf.largura, obsf.altura);
        else if(obsf.altura < 50 && obsf.altura >= 45)
            spriteArvore_frutifera.desenha(obsf.x, chao.y - 5, obsf.largura, obsf.altura);
        else if(obsf.altura < 45 && obsf.altura >= 35)
            spriteArvore2.desenha(obsf.x, chao.y - 20, obsf.largura, obsf.altura);
        else
            spriteArbusto.desenha(obsf.x, chao.y + 25, obsf.largura, obsf.altura);
    
    }

    chao.desenha3();

    for(var i = 0, tam = obstaculos._obs.length; i < tam; i++){
        var obs = obstaculos._obs[i];

        // Sombra dos objetos
        if(obs.altura > 80){
            if(obs.altura > 90)
                spriteSombraPredio1.desenha(obs.x - 30, chao.y + 18, obs.largura, obs.altura);
            else
                spriteSombraPredio_Antena.desenha(obs.x - 18, chao.y + 15 , obs.largura, obs.altura);
        }else if(obs.altura > 60)
            spriteSombraPredio2_1.desenha(obs.x - 15, chao.y + 15, obs.largura, obs.altura);

        else if(obs.altura <= 60 && obs.altura >= 55)
            spriteSombraPisao.desenha(obs.x - 10, chao.y + 16, obs.largura, obs.altura);
        else if(obs.altura < 55 && obs.altura >= 50)
            spriteSombra_Arvore.desenha(obs.x - 10, chao.y + 12 , obs.largura, obs.altura);
        else if(obs.altura < 50 && obs.altura >= 45)
            spriteSombra_ArvoreFrutifera.desenha(obs.x + 5, chao.y + 10, obs.largura, obs.altura);
        else if(obs.altura < 45 && obs.altura >= 35)
            spriteSombra_Arvore2.desenha(obs.x - 14, chao.y + 10, obs.largura, obs.altura);
    }

    for(var x = 0, tam = obstaculos._obsfrente.length; x < tam; x++){
        var obsf = obstaculos._obsfrente[x];

        if(obsf.altura >= 50)
            spriteSombra_Arvore.desenha(obsf.x - 11, chao.y + 30, obsf.largura, obsf.altura);
        else if(obsf.altura < 50 && obsf.altura >= 45)
            spriteSombra_ArvoreFrutifera.desenha(obsf.x - 8, chao.y + 25, obsf.largura, obsf.altura);
        else if(obsf.altura < 45 && obsf.altura >= 35)
            spriteSombra_Arvore2.desenha(obsf.x - 15, chao.y + 30, obsf.largura, obsf.altura);
    }

    if(estadoAtual == estados.jogando || estadoAtual == estados.jogar)
        spriteSombraJogador.desenha(jogador.x - 48, 1000 - jogador.y);
    else if(jogador.y >= 500)
        spriteSombraJogador.desenha(jogador.x - 48, jogador.y + 135);

}