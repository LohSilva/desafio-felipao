# 📚 Resumo: Desafio Classificador de nível de Herói

**Objetivo:**

Criar um programa que classifica um herói em um nível com base em sua experiência (XP).

**Requisitos:**

- Variáveis;
- Operadores;
- Laços de repetição;
- Estruturas de decisão.

## ⚙️Implemenando o código:

### Biblioteca:

- **prompt-sync:** Usada para solicitar informações ao usuário.
### Declaração de variáveis:

- **nomeHeroi:** Armazena o nome do herói.
- **pontosXPHeroi:** Armazena a quantidade de experiência do herói.
- **nivel:** Armazena o nível do herói.

### Verificação do nível do herói:

- A estrutura **if...else** verifica o valor de pontosXPHeroi e define o valor de nível de acordo com a faixa de XP.
- O nível é definido de acordo com a seguinte tabela:

| XP do herói|Nível|
|------------|-----|
|Menor que 1.000|Ferro|
|Entre 1.001 e 2.000	|Bronze|
|Entre 2.001 e 5.000	|Prata|
|Entre 5.001 e 7.000	|Ouro|
|Entre 7.001 e 8.000	|Platina|
|Entre 8.001 e 9.000	|Ascendente|
|Entre 9.001 e 10.000	|Imortal|
|Maior ou igual a 10.001	|Radiante|


### Saída:

- A mensagem "O Herói de nome " + nomeHeroi + " está no nível de " + nivel é exibida no console

#### Exemplo de uso:

- Se o usuário digitar "Ana" como nome do herói e "12.500" como quantidade de experiência, a saída do código será:

- **O Herói de nome Ana está no nível de Radiante**


## 🥷Desafio:

- Curso Lógica programação [DIO](https://www.dio.me/)

## 🔎Recursos:

- [JavaScript Conditional Statements](https://www.w3schools.com/js/js_if_else.asp)
