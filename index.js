// Base a ser utilizada
const alunosDaEscola=[
    {
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },
    {
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },
    {
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },
    {
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[{
            nomeDoCurso:"Full Stack",
            dataMatricula:new Date
            }],
        faltas:0
    },
    {
        nome:"Carlos",
        notas:[],
        cursos:[],
        faltas:0
    },
    {
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{
            nomeDoCurso:"UX",
            dataMatricula:new Date}],
        faltas:0
    }
];


// implementação
function adicionarAluno(nomeAluno){
 
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    let alunoNovo = {
        nome: nomeAluno,
        notas:[],
        cursos:[],
        faltas:0
    }
    alunosDaEscola.push(alunoNovo);
    console.log(`${alunoNovo.nome} foi inserido na lista de alunos!`)
    }
   
function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    console.log("Lista de Alunos:");
    for(let aluno of alunosDaEscola){
    console.log(`-----------------------------------------
    ${aluno.nome}
    `);}

    }
function buscarAluno(nomeAluno){
/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    let busca = alunosDaEscola.filter(aluno => aluno.nome === nomeAluno);
    
    if(busca.length == 1){
        console.log(`${busca.length} aluno com nome ${nomeAluno} encontrado!`)
    }else if (busca.length > 1){
        console.log(`${busca.length} alunos com nome ${nomeAluno} encontrado!`)
    }else{
        console.log("Nome não cadastrado!");
        
    }
    
}
function matricularAluno(nomeAluno, curso){
/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */
    let novoCurso = {nomeDoCurso: curso, dataMatricula: new Date};
    for (let aluno of alunosDaEscola){
        if(aluno.nome == nomeAluno){
            aluno.cursos.push(novoCurso);
        }
    }
    console.log(`${nomeAluno} foi matriculado no curso ${curso} com sucesso.`);
}

function aplicarFalta(alunoFalta){
/*
    Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/
    let alunoFaltante = alunosDaEscola.find(aluno =>{return aluno.nome == alunoFalta});
    if(alunoFaltante.cursos.length == 0){
        console.log(`${alunoFalta} não está matriculado em nenhum curso!`);
    }else{
        alunoFaltante.faltas++;
        console.log(`----------------------------
    Falta de ${alunoFalta} adicionada ao sistema
----------------------------
    ${alunoFalta} está com ${alunoFaltante.faltas} falta(s)!`)
    }


    return {...alunosDaEscola, ...alunoFaltante}
        
    
}
    
function aplicarNota(alunoNota, nota){
/*
    Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/

    let alunoExiste = alunosDaEscola.find(aluno =>{return aluno.nome == alunoNota});
        if(alunoExiste.cursos.length == 0){
            console.log(`${alunoNota} não está matriculado em nenhum curso!`);
        }else{
            alunoExiste.notas.push(nota);
            console.log(`----------------------------
    Nota de ${alunoNota} adicionada ao sistema
----------------------------`)
        }


        return {...alunosDaEscola, ...alunoExiste}
        
    
}

   
function aprovarAluno(nomeAluno){
/* 
Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/
    let alunoExiste = alunosDaEscola.find(aluno =>{return aluno.nome == nomeAluno});
    let faltas = alunoExiste.faltas;
    if(alunoExiste.cursos.length == 0){
        console.log(`${nomeAluno} não está matriculado em nenhum curso!`);
    }else{
        let soma = alunoExiste.notas.reduce((total, elemento)=>{return total+elemento});
        let media = soma/alunoExiste.notas.length;
        if (media >= 7 && faltas <= 3){
            console.log(`${nomeAluno} está aprovado!`);
        }else{console.log(`${nomeAluno} foi reprovado!`);
        }
    }
}


// adicionarAluno("Paulo");

// listarAlunos();

// buscarAluno("Henrique");

// matricularAluno("Edson", "UX");

// aplicarFalta("Guilherme");

// aplicarNota("Lucca", 8);

// aprovarAluno("Lucca");