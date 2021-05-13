$(document).ready(function(){


    /*_________________________________________________________________PESSOAS_________________________________________________________________________*/
    
    //FUNÇÃO RECUPERAR LIVROS
    function recuperarPessoas(){
        var stringArrPessoas = localStorage.getItem("arrPessoas"); //recebe a chave do vetor da outra pagina
        var arrPessoas = JSON.parse(stringArrPessoas); // string -> array

        return arrPessoas
    }

    //ARRAY DE LIVROS
    var arrPessoas = recuperarPessoas()
    if(!arrPessoas){
        arrPessoas = []
    }
   
    //VERIFICA SE O LIVRO EXISTE
    var existePessoa = function(cpf,arr){
        var i=0
        for(i=0; i<arr.length; i++){                                                       
            if(arr[i]["cpf"] == cpf){
                return false 
            } 
        }
        return true
    }

    //FUNÇÃO GRAVAR OS LIVROS
    function gravarPessoas(){
        var stringArrPessoas = JSON.stringify(arrPessoas); // array -> string 
        localStorage.setItem("arrPessoas",stringArrPessoas); //passa a string pra chave arrLivros  
    }

    //VALIDAR FORMULARIO DE PESSOAS
    $("#peopleFormId").validate({
        rules:{
            NAMEnome: {
                required: true,
                minWords:2
            },
            NAMEcpf: {
                required: true,
                
            },
            NAMEend:{
                required:true
            },
            NAMEdata:{
                required:true,
                date:true
            },
            NAMEmail1:{
                required:true,
                email:true
            },
            NAMEmail2:{
                email:true
            },
            NAMEtel1:{
                required:true,
                digits:true,   
                maxlength:11  
            },
            NAMEtel2:{
                digits:true, 
            },
            NAMEcep:{
                required:true,
                digits:true,
                maxlength:9
            },
            NAMEprof:{
                required:true,
                digits:false
            },
            NAMEnroCasa:{
                required:true,
                digits:true
            }
        },

        submitHandler:function(form){
            alert("cadastramento realizado")
            var cpf = $("#IDcpf").val()
            var nome = $("#IDnome").val()
            var endereco = $("#IDendereco").val()
            var nroCasa = $("#IDnroCasa").val()
            var cep = $("#IDcep").val()
            var email1 = $("#IDMail1").val()
            var email2 = $("#IDMail2").val()
            var tel1 = $("#IDtel1").val()
            var tel2 = $("#IDtel2").val()
            var dataNasc = $("#IDdate").val()
            var profissao = $("#IDprofissao").val()                

            if(existePessoa(cpf,arrPessoas)){  
                var objPessoa = {cpf,nome,endereco,nroCasa,cep,email1,email2,tel1,tel2,dataNasc,profissao};
                arrPessoas.push(objPessoa);

                console.log(arrPessoas)
                alert("cadastro realizado");

                gravarPessoas()

            }else{
                alert('CPF já cadastrado')
            }
        }
    })

    //mostrar todas pessoas
    $("#btn-MostrarTodasPessoas").click(function(){

        $("#conteudoTheadPessoas").empty() //remove os filhos do thead
        $("#conteudoTheadPessoas").append("<th>"+"cpf"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"nome"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"endereço"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"casa"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"cep"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"email 1"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"email 2"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"telefone 1"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"telefone 2"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"data de nascimento"+"</th>");
        $("#conteudoTheadPessoas").append("<th>"+"profissão"+"</th>");
        
        $("#conteudoTbodyPessoas").empty() //remove os filhos do thead
        for(i in arrPessoas){
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].cpf+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].nome+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].endereco+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].nroCasa+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].cep+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].email1+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].email2+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].tel1+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].tel2+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].dataNasc+"</td>");
            $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].profissao+"</td>");
            $("#conteudoTbodyPessoas").append("<tr>"+"</tr>");
        }     
    })

    //MOSTRAR 1 PESSOA
    $("#btn-mostrarPessoa").click(function(){
        var cpf = $("#IDcpf").val();

        for(i in arrPessoas){
            if(arrPessoas[i]["cpf"] == cpf){
                $("#conteudoTheadPessoas").empty() //remove os filhos do thead
                $("#conteudoTheadPessoas").append("<th>"+"cpf"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"nome"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"endereço"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"casa"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"cep"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"email 1"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"email 2"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"telefone 1"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"telefone 2"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"data de nascimento"+"</th>");
                $("#conteudoTheadPessoas").append("<th>"+"profissão"+"</th>");
                
                $("#conteudoTbodyPessoas").empty() //remove os filhos do thead
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].cpf+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].nome+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].endereco+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].nroCasa+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].cep+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].email1+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].email2+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].tel1+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].tel2+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].dataNasc+"</td>");
                $("#conteudoTbodyPessoas").append("<td>"+arrPessoas[i].profissao+"</td>");
                $("#conteudoTbodyPessoas").append("<tr>"+"</tr>");

            } 
        }  
    })

    $("#btn-excluirPessoas").click(function(){
        var cpf = $("#IDcpf").val();

        for(obj in arrPessoas){
            if(arrPessoas[obj]["cpf"] == cpf){
                let indice = arrPessoas.indexOf(arrPessoas[obj])
                arrPessoas.splice(indice, 1);
                alert("Pessoa excluida com sucesso")
                
                //atualiza o array de livros
                gravarPessoas()

            } 
        }
    })

    $("#btn-alterarPessoas").click(function(){  
        //pega a chave         
        var cpf = $("#IDcpf").val();

        for(var i=0; i<arrPessoas.length; i++){
            if(arrPessoas[i]["cpf"] == cpf){ 

                //pega os novos valores
                var nome = $("#IDnome").val()
                var endereco = $("#IDendereco").val()
                var nroCasa = $("#IDnroCasa").val()
                var cep = $("#IDcep").val()
                var email1 = $("#IDMail1").val()
                var email2 = $("#IDMail2").val()
                var tel1 = $("#IDtel1").val()
                var tel2 = $("#IDtel2").val()
                var dataNasc = $("#IDdate").val()
                var profissao = $("#IDprofissao").val()            
                
                //atualiza os valores no objeto
                arrPessoas[i]["nome"] = nome
                arrPessoas[i]["endereco"] = endereco
                arrPessoas[i]["nroCasa"] = nroCasa
                arrPessoas[i]["cep"] = cep
                arrPessoas[i]["email1"] = email1
                arrPessoas[i]["email2"] = email2
                arrPessoas[i]["tel1"] = tel1
                arrPessoas[i]["tel2"] = tel2
                arrPessoas[i]["dataNasc"] = dataNasc
                arrPessoas[i]["profissao"] = profissao

                //atualiza o array de pessoas
                gravarPessoas()

                alert("Pessoa alterada com sucesso")
            } 
        } 
    })

    
    /*_________________________________________________________________LIVROS__________________________________________________________________________*/
    
    //FUNÇÃO RECUPERAR LIVROS
    function recuperarLivros(){
        var stringArrLivros = localStorage.getItem("arrLivros"); //recebe a chave do vetor da outra pagina
        var arrLivros = JSON.parse(stringArrLivros); // string -> array

        return arrLivros
    }

    //ARRAY DE LIVROS
    var arrLivros = recuperarLivros()
    if(!arrLivros){
        arrLivros = []
    }
   
    //VERIFICA SE O LIVRO EXISTE
    var existeLivro = function(insb,arr){
        var i=0
        for(i=0; i<arr.length; i++){                                                       
            if(arr[i]["insb"] == insb){
                return false 
            } 
        }
        return true
    }

    //FUNÇÃO GRAVAR OS LIVROS
    function gravarLivros(){
        var stringArrLivros = JSON.stringify(arrLivros); // array -> string 
        localStorage.setItem("arrLivros",stringArrLivros); //passa a string pra chave arrLivros  
    }
    

    //VALIDAR FORMULARIO E CADASTRAR LIVROS 
    $("#bookFormId").validate({
        rules:{
            NAMEinsb: {
                required: true,
                minlength:4
                
            },
            NAMEtitulo:{
                required:true
            },
            NAMEgenero:{
                required:true,
            },
            NAMEautores:{
                required:true,
            }
        },

        //CADASTRAR LIVRO
        submitHandler:function(form){ 
            var insb = $("#IDinsb").val();
            var titulo = $("#IDtitulo").val();
            var genero = $("#IDgenero").val();
            var autores = $("#IDautores").val();    
            
            console.log(arrLivros)
            if(existeLivro(insb,arrLivros)){             
                //criar obj, array
                var objLivro = {insb,titulo,genero,autores}; //cria obj
                arrLivros.push(objLivro); //add obj no array
    
                console.log(arrLivros)
                alert("cadastro realizado");

                gravarLivros()

            }else{
                alert('Livro já cadastrado')
            }
            
        },
    })

    //MOSTRA TODOS OS LIVROS
    $("#btn-MostrarTodosLivros").click(function(){
        $("#conteudoTheadLivros").empty() //remove os filhos do thead
        $("#conteudoTheadLivros").append("<th>"+"insb"+"</th>");
        $("#conteudoTheadLivros").append("<th>"+"Titulo"+"</th>");
        $("#conteudoTheadLivros").append("<th>"+"Genero"+"</th>");
        $("#conteudoTheadLivros").append("<th>"+"Autores"+"</th>");
        
        $("#conteudoTbodyLivros").empty()
        for(i in arrLivros){
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[i].insb+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[i].titulo+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[i].genero+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[i].autores+"</td>");
            $("#conteudoTbodyLivros").append("<tr>"+"</tr>");  
        } 
   
    })

    //MOSTRAR 1 LIVRO
    $("#btn-MostrarLivro").click(function(){
        var insb = $("#IDinsb").val();

        for(obj in arrLivros){
            if(arrLivros[obj]["insb"] == insb){
            $("#conteudoTheadLivros").empty() //remove os filhos do thead
            $("#conteudoTheadLivros").append("<th>"+"insb"+"</th>");
            $("#conteudoTheadLivros").append("<th>"+"Titulo"+"</th>");
            $("#conteudoTheadLivros").append("<th>"+"Genero"+"</th>");
            $("#conteudoTheadLivros").append("<th>"+"Autores"+"</th>");
            
            $("#conteudoTbodyLivros").empty() //remove os filhos do thead
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[obj].insb+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[obj].titulo+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[obj].genero+"</td>");
            $("#conteudoTbodyLivros").append("<td>"+arrLivros[obj].autores+"</td>");
            $("#conteudoTbodyLivros").append("<tr>"+"</tr>");

            } 
        }  
    })

    $("#btn-ExcluirLivro").click(function(){
        var insb = $("#IDinsb").val();

        for(i in arrLivros){
            if(arrLivros[i]["insb"] == insb){
                let indice = arrLivros.indexOf(arrLivros[i])
                arrLivros.splice(indice, 1);
                alert("Livro excluido com sucesso")
                
                //atualiza o array de livros
                gravarLivros()

            }
        }
    })

    $("#btn-AlterarLivro").click(function(){  
        //pega a chave         
        var insb = $("#IDinsb").val();

        for(var i=0; i<arrLivros.length; i++){
            if(arrLivros[i]["insb"] == insb){ 

                //pega os novos valores
                var titulo = $("#IDtitulo").val();
                var genero = $("#IDgenero").val();
                var autores = $("#IDautores").val(); 
                
                //atualiza os valores no objeto
                arrLivros[i]["titulo"] = titulo
                arrLivros[i]["genero"] = genero
                arrLivros[i]["autores"] = autores

                //atualiza o array de livros
                gravarLivros()

                alert("Livro alterado com sucesso")
            } 
        } 
    })
    

    /*_______________________________________________________________EMPRESTIMOS_______________________________________________________________________*/
    
    function recuperarEmprestimos(){
        var stringArrEmprestimos = localStorage.getItem("arrEmprestimos"); //recebe a chave do vetor da outra pagina
        var arrEmprestimos = JSON.parse(stringArrEmprestimos); // string -> array

        return arrEmprestimos
    }

    //ARRAY DE EMPRESTIMOS
    var arrEmprestimos = recuperarEmprestimos()
    if(!arrEmprestimos){
        arrEmprestimos = []
    }
   
    //VERIFICA SE O EMPRESTIMO EXISTE
    var existeEmprestimo = function(cpf,insb,arr){
        var i=0
        for(i=0; i<arr.length; i++){                                                       
            if(arr[i]["insb"] == insb && arr[i]["cpf"] == cpf){
                return false 
            } 
        }
        return true
    }

    //FUNÇÃO GRAVAR OS EMPRESTIMOS
    function gravarEmprestimos(){
        var stringArrEmprestimos = JSON.stringify(arrEmprestimos); // array -> string 
        localStorage.setItem("arrEmprestimos",stringArrEmprestimos); //passa a string pra chave arrLivros  
        
    }

    //VALIDAR FORMULARIO E CADASTRAR EMPRESTIMOS  
    $("#emprestimoFormId").validate({
        rules:{
            NAMEinsb: {
                required: true,
                min:4
                
            },
            NAMEcpf: {
                required: true,
                //cpfBR:true
            },
            NAMEdataEmp:{
                required:true,
                date:true
            },
            NAMEdataDev:{
                required:true,
                date:true
            },
            NAMEmulta:{
                required:true,
            }

         },
        submitHandler:function(form){
            var cpf = $("#IDcpfEmprestimo").val()
            var insb = $("#IDinsbEmprestimo").val()
            var dataEmp = $("#IDdataEmp").val()
            var dataDev = $("#IDdataDev").val()
            var multa = $("#IDmulta").val()    
            
            if(existeEmprestimo(cpf,insb,arrEmprestimos)){ 
                var objEmprestimo = {cpf,insb,dataEmp,dataDev,multa};
                arrEmprestimos.push(objEmprestimo);

                alert("cadastro realizado")
                console.log(arrEmprestimos)

                gravarEmprestimos()
            } else {
                alert("Dados invalidos")
            }
        }
        
    })

    //MOSTRAR TODOS EMPRESTIMOS
    $("#btn-mostrarTodosEmprestimos").click(function(){
        $("#conteudoTheadEmprestimo").empty() //remove os filhos do thead
        $("#conteudoTheadEmprestimo").append("<th>"+"cpf"+"</th>");
        $("#conteudoTheadEmprestimo").append("<th>"+"insb"+"</th>");
        $("#conteudoTheadEmprestimo").append("<th>"+"data de emprestimo"+"</th>");
        $("#conteudoTheadEmprestimo").append("<th>"+"data de devolução"+"</th>");
        $("#conteudoTheadEmprestimo").append("<th>"+"valor da multa"+"</th>");
        
        $("#conteudoTbodyEmprestimo").empty() //remove os filhos do thead
        for(i in arrEmprestimos){
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].cpf+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].insb+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].dataEmp+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].dataDev+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].multa+"</td>");
            $("#conteudoTbodyEmprestimo").append("<tr>"+"</tr>");
        }     
        
    })

    //MOSTRAR UM EMPRESTIMO
    $("#btn-mostrarEmprestimo").click(function(){
        var cpf = $("#IDcpfEmprestimo").val()
        var insb = $("#IDinsbEmprestimo").val()
        
        for(i in arrEmprestimos){
            if(arrEmprestimos[i]["insb"] == insb && arrEmprestimos[i]["cpf"] == cpf){
            $("#conteudoTheadEmprestimo").empty() //remove os filhos do thead
            $("#conteudoTheadEmprestimo").append("<th>"+"cpf"+"</th>");
            $("#conteudoTheadEmprestimo").append("<th>"+"insb"+"</th>");
            $("#conteudoTheadEmprestimo").append("<th>"+"data de emprestimo"+"</th>");
            $("#conteudoTheadEmprestimo").append("<th>"+"data de devolução"+"</th>");
            $("#conteudoTheadEmprestimo").append("<th>"+"valor da multa"+"</th>");
            
            $("#conteudoTbodyEmprestimo").empty() //remove os filhos do thead
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].cpf+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].insb+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].dataEmp+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].dataDev+"</td>");
            $("#conteudoTbodyEmprestimo").append("<td>"+arrEmprestimos[i].multa+"</td>");
            $("#conteudoTbodyEmprestimo").append("<tr>"+"</tr>");
            }    
        }   
    })

    //EXCLUIR EMPRESTIMO
    $("#btn-excluirEmprestimo").click(function(){
        var cpf = $("#IDcpfEmprestimo").val()
        var insb = $("#IDinsbEmprestimo").val()
        
        for(i in arrEmprestimos){
            if(arrEmprestimos[i]["insb"] == insb && arrEmprestimos[i]["cpf"] == cpf){
                let indice = arrEmprestimos.indexOf(arrEmprestimos[i])
                arrEmprestimos.splice(indice, 1);
                alert("Emprestimo excluido com sucesso")
                
                //atualiza o array de livros
                gravarEmprestimos()

            }
        }
    })

    $("#btn-alterarEmprestimo").click(function(){  
        //pega a chave         
        var cpf = $("#IDcpfEmprestimo").val()
        var insb = $("#IDinsbEmprestimo").val()

        for(var i=0; i<arrEmprestimos.length; i++){
            if(arrEmprestimos[i]["insb"] == insb && arrEmprestimos[i]["cpf"] == cpf){ 

                //pega os novos valores
                var dataEmp = $("#IDdataEmp").val();
                var dataDev = $("#IDdataDev").val();
                var multa = $("#IDmulta").val(); 
                
                //atualiza os valores no objeto
                arrEmprestimos[i]["dataEmp"] = dataEmp
                arrEmprestimos[i]["dataDev"] = dataDev
                arrEmprestimos[i]["multa"] = multa

                //atualiza o array de livros
                gravarEmprestimos()

                alert("Livro alterado com sucesso")
            } 
        } 
    })


})