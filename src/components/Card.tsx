import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "store/store"
import Sppiner from "./Spinner"
import { useLazyGetStoreDataQuery } from "../store/redusers/apireduser"
import { useDeleteAlbumMutation, useAddNewContactMutation } from "../store/redusers/apireduser"
import { addContact } from "../store/redusers/contact"

import { QweryType } from "types"
import { useNavigate } from "react-router-dom"

export interface Product {
  num: QweryType
}
function Card(props: Product) {
  const [deleteAlbum] = useDeleteAlbumMutation()

  const dispatch = useDispatch<AppDispatch>()
  const route = useNavigate()
  const handleSubmit = (id: string) => {
    try {
      deleteAlbum(id)
    } catch (e) {
      console.log("ref")
    }
  }

  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      dispatch(addContact(props.num))
      route("/contact")
      localStorage.setItem("id", props.num.id);
    }
  }

  return (
    <div className="block-container" onClick={handleClick}>
      <div></div>

      <div className="block-card">
        <div></div>
        <div>
          <img src={`${props.num.avatar_url}`} className="img-card"></img>
          <div className="title-card">
            {props.num.fields["first name"] ? props.num.fields["first name"][0]["value"] : ""}
          </div>
          <div className="price">
            {props.num.fields["last name"] ? props.num.fields["last name"][0]["value"] : ""}$
          </div>
          <button onClick={() => handleSubmit(props.num.id)}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default Card
