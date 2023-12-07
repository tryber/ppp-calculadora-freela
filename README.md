# Calculadora de Freelancer

Este projeto é uma calculadora de freelancers construída com React e Vite e transmitido ao vivo no Youtube da Trybe em Dezembro de 2023. É uma ferramenta útil para freelancers calcularem seus preços de serviços baseados em diferentes critérios.

## Pré-requisitos

Antes de começar, você precisará instalar:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Visual Studio Code (VSCode)**: [Download VSCode](https://code.visualstudio.com/)

## Instalação

Para configurar este projeto, siga estas etapas:

1. Clone o repositório:
2. Navegue até a pasta do projeto e instale as dependências:

```shell
cd [nome-do-seu-projeto]
npm install
```

## Execução

Para rodar o projeto localmente, execute:

```shell
npm run dev
```

# Cálculo do Valor da Hora de Trabalho como MEI

Este documento descreve como calcular o valor da hora de trabalho para Microempreendedores Individuais (MEI), utilizando JavaScript, o imposto mensal varia de acordo com a atividade exercida e pode ser consultado na receita federal.

## Variáveis e Cálculos

**1. Semanas Trabalhadas por Ano (`workedWeeksPerYear`):**

```javascript
const totalWeeks = 52;
const vacationWeeks = /* número de semanas de férias */;
const workedWeeksPerYear = totalWeeks - vacationWeeks;
```

\*\*2. Dias Trabalhados por Ano (workedDaysPerYear):

```javascript
const workedDaysPerWeek = /* dias trabalhados por semana */;
const workedDaysPerYear = workedWeeksPerYear * workedDaysPerWeek;
```

\*\*3. Horas Trabalhadas por Ano (workedHoursPerYear):

```javascript
const workedHoursPerDay = /* horas trabalhadas por dia */;
const riskAdjustment = 0.9; // 10% de desconto para adicional de risco
const workedHoursPerYear = workedDaysPerYear * workedHoursPerDay * riskAdjustment;
```

\*\*4. Salário Anual Líquido Desejado (netAnnualSalary):

```javascript
const monthlyEarningsGoal = /* quanto você quer ganhar por mês */;
const monthsPerYear = 12;
const netAnnualSalary = monthlyEarningsGoal * monthsPerYear;
```

\*\*5. Impostos por Tipo de Atividade (annualTaxes):

```javascript
const monthlyTax = /* imposto mensal baseado na atividade */;
const annualTaxes = monthlyTax * monthsPerYear;
```

\*\*6. Custo Anual de Operação (annualOperatingCost):

```javascript
const monthlyOperatingCost = /* custo operacional mensal */;
const annualOperatingCost = monthlyOperatingCost * monthsPerYear;
```

\*\*7. Salário Anual Bruto Necessário (grossAnnualSalary):

```javascript
const grossAnnualSalary = netAnnualSalary + annualTaxes + annualOperatingCost;
```

\*\*8. Valor da Hora de Trabalho (hourlyRate):

```javascript
const hourlyRate = grossAnnualSalary / workedHoursPerYear;
```

\*\*9. Valor Bruto por Mês (monthlyGrossIncome):

```javascript
const monthlyGrossIncome = grossAnnualSalary / monthsPerYear;
```

## Exemplo

Para um desenvolvedor que trabalha 8 horas por dia, 5 dias por semana, 48 semanas por ano, com um salário líquido desejado de R$ 5.000,00, impostos mensais de R$ 70,00 e custo operacional mensal de R$ 1.000,00.

## Calcular valor do projeto

Para calcular o valor do projeto, você pode utilizar a seguinte fórmula:

1. Valor da Hora de Trabalho (hourlyRate):

```javascript
const hourlyRate = /* valor da hora de trabalho */;
```

2. Quantas horas por dia você vai trabalhar no projeto (workedHoursPerDay):

```javascript
const workedHoursPerDay = /* horas trabalhadas por dia */;
```

3. Quantos dias você vai trabalhar no projeto (workedDays):

```javascript
const workedDays = /* dias trabalhados no projeto */;
```

4. Adicional de complexidade ou desconto (complexityAdjustment):

```javascript
const complexityAdjustment = /* adicional de complexidade ou desconto */;
```

5. Valor do Projeto (projectValue):

```javascript
const projectValue = hourlyRate * workedHoursPerDay * workedDays;
```

6. Valor do Projeto com Adicional/Desconto (projectValueWithAdjustment):

```javascript
const projectValueWithAdjustment = projectValue * (1 + complexityAdjustment);
```

7. Desconto ou Adicional (adjustment):

```javascript
const adjustment = projectValueWithAdjustment - projectValue;
```
