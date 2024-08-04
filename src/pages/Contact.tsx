import React, { useEffect, useState } from "react"
import { useAppSelector } from "../hooks/redux"
import { RootState } from "store/store"
import { FieldValues, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { AppDispatch } from "store/store"
import {
  TypeN,
  useGetContactQuery,
  useLazyGetStoreDataQuery,
  useUpdateContactMutation,
} from "../store/redusers/apireduser"
import arrContacts, { addContactArr } from "../store/redusers/arrContacts"
interface FormInputs {
  tag: string
}
function Contact() {
  const dataCon = useAppSelector((state: RootState) => state.contact)
  const [updateContact] = useUpdateContactMutation()
  const [value, setValue] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  //let idContact = localStorage.getItem("id");
  const { data, isLoading } = useGetContactQuery(localStorage.getItem("id"))

  const [name1, setName] = useState<string[]>([])
  //const [tags, setTags] = useState<string[]>(dataCon[0].tags2)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })
  useEffect(() => {
    let idContact = localStorage.getItem("id")
    async function fetchData() {
      if(data){
     if(data.resources[0].tags2.length!==0) setName(data.resources[0].tags2)
      }
      const tagsData: TypeN = {
        id: idContact || "",
        tag: name1
      }
      if (name1.length !== 0) updateContact(tagsData)
    }
    

    fetchData()
  }, [ data, name1])

  const onchange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }
  const onSubmit = (arg: FieldValues) => {
    setName((prev) => [...prev, arg.tag])
    reset()
  }
  return (
    <div>
      {isLoading || (
        <div className="about">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="catalin">
            <input
              type="text"
              {...register("tag")}
              className="input"
              value={value}
              onInput={onchange}
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          <img src={`${data.resources[0].avatar_url}`} className="img-card"></img>
          <div className="title-card">
            {data.resources[0].fields["first name"]
              ? data.resources[0].fields["first name"][0]["value"]
              : ""}
          </div>
          <div className="price">
            {data.resources[0].fields["last name"]
              ? data.resources[0].fields["last name"][0]["value"]
              : ""}
            $
          </div>
          {name1.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Contact
