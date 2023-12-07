import { InputField } from '../@types/types';
import './CalculatorContainer.css';
import FormSection from './FormSection';
import ResultCard from './ResultCard';

const inputFields:InputField[] = [
  {
    id: 'monthlyNetSalary',
    label: 'Quanto você quer ganhar por mês? (líquido)',
    inputInfo: 'R$/mês',
  },
  {
    id: 'workHoursPerDay',
    label: 'Quantas horas você quer trabalhar por dia?',
    inputInfo: 'horas/dia',
  },
  {
    id: 'workDaysPerWeek',
    label: 'Quantos dias você quer trabalhar por semana?',
    inputInfo: 'dias/semana',
  },
  {
    id: 'vacationWeeksPerYear',
    label: 'Quantas semanas por ano você gostaria de tirar férias?',
    inputInfo: 'semanas/ano',
  },
  {
    id: 'monthlyExpenses',
    label: 'Qual os seus custos mensais relacionados ao trabalho? Custo de licenças e sistemas, internet, luz, celular, entre outros',
    inputInfo: 'R$/mês',
  },
];

function CalculatorContainer() {
  return (
    <div className="calculator__container">
      <div className="container">
        <FormSection inputFields={ inputFields } onChange={ () => {} } />
        <ResultCard>
          <p>O valor mínimo para sua hora de trabalho é:</p>
          <h2>
            0,00
            <span>/hora</span>
          </h2>
          <p>O valor médio bruto que você precisa faturar é:</p>
          <h2>
            0,00
            <span>/mês</span>
          </h2>
        </ResultCard>
      </div>
    </div>
  );
}

export default CalculatorContainer;
