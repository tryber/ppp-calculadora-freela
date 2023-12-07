import { InputField } from '../@types/types';
import './FormSection.css';

type FormSectionProps = {
  inputFields: InputField[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormSection({ inputFields, onChange }: FormSectionProps) {
  return (
    <form>
      {inputFields.map((inputField) => (
        <div key={ inputField.id } className="input__group">
          <label htmlFor={ inputField.id }>{inputField.label}</label>
          <div className="input__container">
            <span>{ inputField.inputInfo}</span>
            <input type="text" id={ inputField.id } name={ inputField.id } onChange={ onChange } />
          </div>
        </div>
      ))}
      <button type="submit">Calculate</button>
    </form>
  );
}

export default FormSection;
