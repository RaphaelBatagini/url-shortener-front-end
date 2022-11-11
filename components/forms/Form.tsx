import { FormMethodType } from "../../types/FormMethodType";

export default function Form({ action = '', method = 'POST', onSubmit, className, children }: FormType) {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form action={action} method={method} onSubmit={ () => handleSubmit() } className={className} >
      { children }
    </form>
  );
}

export type FormType = {
  action?: string;
  method?: FormMethodType;
  onSubmit?: CallableFunction;
  className?: string;
  children?: any;
}