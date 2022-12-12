import React, { useRef } from "react";
import { FormMethodType } from "../../types/FormMethodType";

export default function Form({ action = '', method = 'POST', onSubmit, className, children }: FormType) {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSubmit = (event: React.SyntheticEvent) => {
    if (onSubmit) {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      onSubmit({ formData: Object.fromEntries(formData) });
    }
  };

  return (
    <form action={action} method={method} onSubmit={ (event) => handleSubmit(event) } ref={formRef} className={className} >
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

export type FormSubmitType = {
  formData: any;
};