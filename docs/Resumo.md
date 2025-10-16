# JavaScript

## Módulo A

- relembrando algumas coisas:
- Parte do conteúdo: linguagem HTML
- Parte de designer: linguagem CSS
- Parte da interatividade: linguagem JavaScript

# Primeiros Passos em JavaScript:

## Aula 03:

- Bibliografia:
- JavaScript o guia definitivo.
- JavaScript guia do Programador.
- Guia prático: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide

# Primeiro Script

## Aula 04:

- head: cabeça do site, parte de configurações.
- body: corpo do site,parte que vai apareçer quando rodar o site.
- O que tiver entre <> é as tag, as marcar.
- Exemplo:
- meta: `<meta *charset*="UTF-8">` . Configuração de caracteres, para poder usar as acentuações do português.
- usa `<h1> Olá, mundo! </h1>`, para criar um título no body, um no começo e outro no final.
- Para cria um parágrafo se usa: `<p> Aprendendo o básico de HTML</p>`;
- Para utilizar o CSS dentro do html  na parte de head você faz:  `<style> body { backgorund-color: blue;  } </style>`;
- Para mudar a cor da letra só usar: `color: white;`
- Para mudar a fonte: `font: normal 20pt Arial;`.
- a parte de estilo ficou assim:

`<style>
body {
background-color: rgb(76, 76, 146);
color: white;
font: normal 17pt Arial;
}
</style>`

- primeiro comando em JavaScript parte da interção: `<script> window.alert('Minha primeira mensagem!') </scrip>`.
- Mundando a cor do título dentro de style: `h1 { color: black; }`
- outros scripts: `window.confirm('Está gostando de JS')` , `window.prompt(’Qual é o seu nome’)` ;

# Variáveis e Tipos Primitivos

## Módulo B

## Aula 05:

- Comentários em JavaScript:  `//` ou `/* */`;
- Para criar variáveis é só usar a palavra: `var`;
- No JavaScript moderno, além de usar a palavra `var`, podemos usar a palavra `let`.
- E para cada Variável você precisa de um identificador: `n1 var = 10` , `n2 var = 7` e `n3 var = 9`.
- Variáveis com tamanhos maiores: `var s1 = “JavaScript”` , `var s2 = ‘CursoJS’`e `var = s3 João Guilherme`, e podemos usar  “ “, ‘ ‘  e ` `.

## O nome para cada variável se chama Identificador

 Regras:

- elas podem começar com `letra`, `$` ou `_`;
- Não podem começar com `números`;
- É possível usar `letras` e `números`;
- É possível usar `acento` e `símbolos`;
- Não podem conter `espaços`;
- Não podem ser `palavras reservadas`.

## Dicas

- `Maiúsculas` e `minúsculas` fazem diferença;
- Tente escolher `nomes coerentes` para as variáveis;
- Evite se tornar um `programador alfabeto` ou um `programador contador`;

- Variáveis serve para a gente guardar dados.

## Principais Tipos Primitivos do JavaScript:

- `number` valores interno importantes: `Infinite` e `NaN`;
- `string`;
- `boolean`;
- `null`;
- `undefined`;
- `object` tipo interno: `array`;
- `function`.

# Manipulação de Dados

## Aula 06:

- Para fazer uma concatenação é só usar o: `+`. Exemplo: `window.alert(’É um grande prazer em te conhecer’ + João ‘!’)`;
- Covertendo uma string para um número, pode usar: `Number.parseInt(n)`, para um número inteiro; `Number.parseFloat(n)`, para um número real. Pode se usar também só `Number(n)`, o JavaScript vai definir de acordo com o número que ele receber se é inteiro ou se é real e vai fazer a conversão automaticamente.
- Convertendo um número para string: `String(n)` ou pode também fazer `n.toString(n)`.

## Formatando uma Strings

- var s = ‘JavaScript’
- ‘Eu estou aprendendo s’ // não faz interpolação
- ‘Eu estou aprendendo’ + s // usa concatenação
- `Eu estou aprendendo ${s}` // usa template string
- Exemplo: 
Utilizando concatenação `'O aluno ' + nome + ' com ' + idade + ' anos tirou nota ' + nota`
Utilizando template string: `O aluno ${nome} com ${idade} anos, tirou nota ${nota}!` utilizando isso entre ` `.
- Informações extras:
 `s.lenght` // quantos caracteres a string tem
    
    `s.toUpperCase()` // tudo para letras ‘MAIÚSCULAS'
    
    `s.toLowerCase()` // tudo para letras ‘minúsculas’
    
- Novo comando para mostra na tela: `document.write`.

## Formatando um número

- `var n1 = 1543.5`
`n1`
`n1.toFixed(2)`, formatando para até duas casas decimais 
`n1.tofixed(2).replace(’ . ’ , ‘ ,’)`, trocando o ‘ . ‘ por ‘ , ‘.
`n1.LocaleString(’pt-BR’, {style: ‘currency’, currency: ‘BRL’})`, isso está localizando para o Brasil, o estilo é ‘currency’ que é dinheiro e currency: ‘BRL’ que é Brasil real.

# Operadores do JS (Parte 1)

## Aula 07:

- **Operadores:
Aritméticos;
Atribuição;
Relacionais;
Lógicos;
Ternário.**
- **Aritméticos:** 
`+`
`-`
`*`
`/`
`%`
`**`
- **Precedência:**
`()`
`**`
`*` `/` `%`
`+` `-`
- **Atribuição Simples:**
`var a = 5 + 3 == 8
var b = a % 5 == 3
var c = 5 * b ** 2 == 45
var d = 10 - a / 2  == 6
var e = 6 * 2 / d == 2
var f = b % e + 4 / e == 3`
- **Auto-atribuições:**
`var n = 3
n = n + 4 == 7
n = n - 5 == 2
n = n * 4 == 8
n = n / 2 == 4 
n = n ** 2 == 16
n = n % 5 == 1`
- **Simplificando:**
`n += 4
n -+ 5
n *= 4
n /= 2
n **= 2
n %= 5`
- **Incremento:**
`var x = 5
x ++
x --`

# Operadores do JS (Parte 2)

## Aula 08:

- **Operadores Relacionais:**
`>
<
>=
<=
==
!=` ****
- **Identidade:**
`===` testa o valor e o tipo.
- **Lógicos:**
`!` negação;
`var a = false
!a`
resultado: `true`

`&&` conjunção; 
Exemplo:
`idade = 17`
`idade >= 15 && idade <=17`
resultado: `true`

`||` disjunção;
Exemplo:
`var estado = ‘DF’
estado == 'RJ' || estado == 'SP’`
resultado: `false`
- **Precedência:**
`(), **, /`… todos os outros Aritméticos;
`>, <, >=`… todos os outros Relacionais;
`!, &&. ||` Lógicos.
- **Ternário:**
`?
:`
Exemplo: 
`var x = 20
var res = 20 % 5 == 0 ? 7 : 10`

# Entendendo o DOM

## Módulo c

### Aula 09:

- DOM: Document Objetc Model (Modelo de Objetos para Documentos).
- Árvore DOM:
    
    ![Captura de tela de 2025-09-13 13-49-42.png](attachment:cdd142aa-e8d5-48a4-acc9-d6c1323dabf1:Captura_de_tela_de_2025-09-13_13-49-42.png)
    
- window (janela)
- location (Qual é a localização do site, qual é a URL, qual é a página atual, qual foi a página anterior ele fala isso tudo).
- document ( Documento atual).
- head (parte do cabeçalho).
- body ( parte do corpo)
- history ( que vai guardando de onde você veio para onde você vai, facilita a navegação dentro do site).

### Selecionando:

- por Marca(`getElementsByTagName()`);
- por ID(`getElementById()`);
- por Nome(`getElementsByName()`);
- por Classe(`getElementsByClassName()`);
- por Seletor(`querySelector()`, `querySelectorAll()`).
- quando é ID usa `#`, quando é Class usa `.`.
Exemplo:
por ID: `var d = window.document.querySelector('div#msg')` ;
por Class: `var d = window.document.querySelector('div.msg')`;

# Eventos DOM

## Aula 10:

- Funções:
Exemplo: 
function ação(param){

}
- criação de blocos é com `{` e `}`.

# Condições em JS (Parte 1)

## Módulo D

- Condições Simples;
- Condicionais Compostas;
- Condições Alinhadas;
- Condições Múltiplas;
- Exercícios Propostos.

### Aula 11:

- Condições:
    
    ![Captura de tela de 2025-09-16 15-34-30.png](attachment:b5720539-3c61-4e76-b1a6-97aa6158156b:Captura_de_tela_de_2025-09-16_15-34-30.png)
    

### Tipos de Condição:

- Condição simples: 
`if (condição) {
    true
 }`

# Parte 2

## Aula 12:

- Condições Compostas não tem só o  `if` tem o `else` agora também.

![Captura de tela de 2025-09-17 18-48-31.png](attachment:2d6d8030-82b8-4fbe-817d-1bdb992c0a94:Captura_de_tela_de_2025-09-17_18-48-31.png)

- Condições Aninhadas: uma condição dentro da outra.
    
    ![Captura de tela de 2025-09-17 18-51-54.png](attachment:82369ff3-f2e7-409c-8bf4-8c11fa41b8d4:Captura_de_tela_de_2025-09-17_18-51-54.png)
    

- Exemplo:
    
    ![Captura de tela de 2025-09-17 18-56-19.png](attachment:9c10778e-645a-4baa-995f-69d89a73233d:Captura_de_tela_de_2025-09-17_18-56-19.png)
    

- Condições Múltiplas:
    
    ![Captura de tela de 2025-09-17 19-18-15.png](attachment:b2033769-2163-4488-905b-caf933b340d7:Captura_de_tela_de_2025-09-17_19-18-15.png)
    

- Exemplo:
    
    ![Captura de tela de 2025-09-17 19-20-23.png](attachment:9f42913a-5f8c-46f3-9d2b-a65bb5aece22:Captura_de_tela_de_2025-09-17_19-20-23.png)
    

- importante: lembrar sempre de dar `break` no final de cada `case` porque se não ele vai continuar rodando o código até encontrar o `break` e quando existe esse `break` ele para de rodar o código e retorna o valor no final (ilustrado na imagem abaixo).
    
    ![Captura de tela de 2025-09-17 19-21-08.png](attachment:be5165c8-572b-4168-98d6-17f0dcdf7fda:Captura_de_tela_de_2025-09-17_19-21-08.png)
    

# Exercícios (Parte 1)

- Modelo e algumas tags nova de HTML:
    
    ![Captura de tela de 2025-09-18 18-57-31.png](attachment:ce78e36e-1fae-4277-8a80-77daa9d4cd31:Captura_de_tela_de_2025-09-18_18-57-31.png)
    

# Repetições (Parte 01)

## Aula 13:

- Diagrama do uso de repetições:

![Captura de tela de 2025-09-27 16-15-44.png](attachment:4c49b168-896a-453e-8854-6ddcdf042a0e:Captura_de_tela_de_2025-09-27_16-15-44.png)

- quando tiver a palavra `while` lê-se `enquanto` .
- Na forma de diagrama e de código.

![Captura de tela de 2025-09-27 16-17-56.png](attachment:c503426b-1944-4ead-8c0a-55538cd4472b:Captura_de_tela_de_2025-09-27_16-17-56.png)

- Exemplo: enquanto tiver pizza ele come os pedaços quando não tiver pizza ele sai do laço.

![Captura de tela de 2025-09-27 16-20-22.png](attachment:07525c17-5fa1-4441-bbe9-66c916a2a0a5:Captura_de_tela_de_2025-09-27_16-20-22.png)

- Comportamentos do diagrama de cima: ele primeiro testa e executa o bloco, no diagrama de baixo: ele executa primeiro o bloco e no final ele testa.

![Captura de tela de 2025-09-27 16-28-04.png](attachment:b1f17465-fc86-4044-a8a6-833c9e432b1c:Captura_de_tela_de_2025-09-27_16-28-04.png)

- a palavra `do` significa `faça` .

![Captura de tela de 2025-09-27 16-34-12.png](attachment:26b9f0b9-4548-4ec6-8c4c-e203d4bbfbf0:Captura_de_tela_de_2025-09-27_16-34-12.png)

- A primeira estrutura chama de: estrutura de repetição com teste lógico no início, e a segunda estrutura chama de: estrutura de repetição com este lógico no final.

![Captura de tela de 2025-09-27 16-34-27.png](attachment:d330ad41-f61e-471b-b086-af05fd3b9bf9:Captura_de_tela_de_2025-09-27_16-34-27.png)

# Repetições (Parte 2)

## Aula 14:

- Estrutura de Repetição `for` :

![Captura de tela de 2025-09-27 17-25-14.png](attachment:3630b948-ab28-4fbe-aa99-d21154d2235b:Captura_de_tela_de_2025-09-27_17-25-14.png)

# Variáveis Compostas

## Aula 15:

- Variáveis simples: só consegue armazenar um valor por vez.
- Varáveis compostas: devem ser capazes de armazenar vários valores em uma mesma estrutura.
- Array (Vetor):

![Captura de tela de 2025-10-07 14-28-50.png](attachment:bf8d99c7-fc59-4e11-b3e5-418949229fa1:Captura_de_tela_de_2025-10-07_14-28-50.png)

- Um array ou um vetor ou uma variável composta, é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.

# Funções

## Aula 16:

- são tarefas
- elas tem chamada, parâmetro, ação e retorno.
- São ações executadas assim que são chamadas ou em decorrência de algum evento.
- Uma função pode receber parâmetros e retornar um resultado.

![Captura de tela de 2025-10-08 14-29-53.png](attachment:67f222b4-d571-4991-bc2c-cf4609416d07:Captura_de_tela_de_2025-10-08_14-29-53.png)

# Próximos Passos

## Nossa rota até aqui:

- Fundamentos da linguagem (o que é o JS, como ele surgiu, a evolução dele o seu paradigma de linguagem client server, depois a evolução dele com o NodeJS para conseguir alcançar outros níveis conquistar os servidores, hoje conseguimos rodar JS no cliente e no servidor).
- Variáveis e Dados (como colocar os dados dentro de uma variável como o JS trata os tipos primitivos).
- Operadores (como tratar os valores com operações, todos os operadores)
- Condições (if, else, swicth).
- Repetições (while, do while, for).
- Arrays (variáveis compostas).
- Functions
- DOM (Document Object Model, faz o JS falar com HTML e CSS).

### …daqui para frente:

- fazer o curso de HTML 5 e CSS 3
- estudar muito sobre funções
- objetos
- modularização de código
- RegEx
- JSON (salva dados localmente).
- AJAX
- NodeJS (faz o script rodar no servidor).