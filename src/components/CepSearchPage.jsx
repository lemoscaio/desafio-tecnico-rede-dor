import React, { useState } from "react"
import { Address } from "./Address"
import { Box } from "./Box"
import { Footer } from "./Footer"
import { Form } from "./Form"
import { Title } from "./Title"

export function CepSearchPage() {
  const [address, setAddress] = useState({})
  const [loadingAddress, setIsLoadingAddress] = useState(false)

  return (
    <>
      <main className="cep-search">
        <Box>
          <Title></Title>
          <Form
            setAddress={setAddress}
            setIsLoadingAddress={setIsLoadingAddress}
          ></Form>
          <Address
            address={address}
            loadingAddress={loadingAddress}
          />
        </Box>
      </main>
      <Footer />
    </>
  )
}
