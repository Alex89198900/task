import React from "react"
import { useAddNewContactMutation } from "../store/redusers/apireduser"
import { useForm } from "react-hook-form"
import { FormInputs, MyInputEmail, MyInputName, MyInputSurName } from "./FormComponent"

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })
  const [addNewContact] = useAddNewContactMutation()
  const onSubmit = (data: FormInputs): void => {
    addNewContact(data)
    console.log(data)
    reset()
  }
  return (
    <>
      <div className="all-forms">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <MyInputName register={register} errors={errors} title={"First name"} />
          <MyInputSurName register={register} errors={errors} title={"last name"} />
          <MyInputEmail register={register} errors={errors} title={"Email"} />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
