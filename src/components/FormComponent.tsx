import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type FormInputs = {
  name: string;
  surname:string;
  email:string;
};
type ComponentPropsd = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  title:string
};


export function MyInputName(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="name">{props.title}</label>
      <input
        type="text"
        {...props.register('name', {
          required: 'Please Enter Name',
          pattern: {
            value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            message: 'Please Enter A Valid Name!',
          },
        })}
        
      />
      <div className="message-errr">{props.errors.name?.message}</div>
    </div>
  );
}

export function MyInputSurName(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="name">{props.title}</label>
      <input
        type="text"
        {...props.register('surname', {
          required: 'Please Enter Name',
          pattern: {
            value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            message: 'Please Enter A Valid Name!',
          },
        })}
       
      />
      <div className="message-errr">{props.errors.name?.message}</div>
    </div>
  );
}


export function MyInputEmail(props: ComponentPropsd) {
  return (
    <div className="field">
      <label htmlFor="name">{props.title}</label>
      <input
        type="email"
        {...props.register('email', {
          required: 'Please Enter Name',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please Enter A Valid Name!',
          },
        })}
       
      />
      <div className="message-errr">{props.errors.name?.message}</div>
    </div>
  );
}

