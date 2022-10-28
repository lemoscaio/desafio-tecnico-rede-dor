import React, { useRef, useState } from "react"
import InputMask from "react-input-mask"
import { api } from "../api"

const feedbackMessages = {
  "Blocked by flood":
    "Muitas requisições feitas recentemente. Por favor, aguarde um pouco antes de tentar novamente.",
  default: "Ocorreu um erro. Por favor, tente novamente",
}

export function Form({ setAddress, setIsLoadingAddress }) {
  const [cep, setCep] = useState("")
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const cepInput = useRef()

  function handleCepChange(e) {
    setFeedbackMessage("")
    setCep(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (cep === "") return setFeedbackMessage("Insira um CEP")

    setIsLoadingAddress(true)
    setFeedbackMessage("")

    try {
      const formmatedCep = cep.replace("-", "")
      const response = await api.get(`/addresses/cep/${formmatedCep}`)
      const { data } = response
      console.log(response)

      if (data.status !== 200) {
        setAddress({})
        return setFeedbackMessage(
          feedbackMessages[data?.message] || feedbackMessages.default,
        )
      }

      setAddress(data)
    } catch (error) {
      console.log("Error", error)

      setFeedbackMessage(
        feedbackMessages[error.response?.status] || feedbackMessages.default,
      )
      setAddress({})
    } finally {
      setIsLoadingAddress(false)
    }
  }

  function handleReset() {
    setFeedbackMessage("")
    setCep("")
    setIsLoadingAddress(false)
    cepInput.current.getInputDOMNode().focus()
    console.log(cepInput.current.setCursorPosition(0))
  }

  return (
    <form
      className="cep-search__form form"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="CEP"
        className="form__label"
      >
        Busque aqui o endereço:
      </label>
      <InputMask
        ref={cepInput}
        type="numeric"
        name="CEP"
        id="CEP"
        value={cep}
        onChange={handleCepChange}
        className="form__input"
        mask="99999-999"
        alwaysShowMask
        maskChar="_"
      ></InputMask>
      <div className="form__button-wrapper">
        <button
          className="form__button form__button--search"
          type="submit"
        >
          Buscar
        </button>
        <button
          type="reset"
          className="form__button form__button--reset"
          onClick={handleReset}
        >
          Limpar
        </button>
      </div>
      {feedbackMessage && (
        <div>
          <p className="form__feedback-message">{feedbackMessage}</p>
        </div>
      )}
    </form>
  )
}
