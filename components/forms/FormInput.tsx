export default function FormInput({
  label = '',
  type = '',
  id = '',
  name = '',
  placeholder = '',
  required = false,
  className = '',
}: FormInputType) {
  return (
    <>
      {!!label && <label>{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={ `p-5 border ${className}` }
        required={required}
      />
    </>
  );
}

export type FormInputType = {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};
