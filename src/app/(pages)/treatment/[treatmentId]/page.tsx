import React from "react"
import { useRouter } from "next/router"
import { Treatment, TREATMENTS }  from "@/data"

const TreatmentDetail = ({ params }: any) => {
  const id = params.treatmentId
  const treatment = TREATMENTS.find((t) => t.id === parseInt(id as string))

  if (!treatment) {
    return <p>Treatment not found</p>
  }

  return (
    <div className="container mx-auto py-10 h-screen">
      <h1 className="text-3xl font-bold mb-4">{treatment.name}</h1>
      <p>{treatment.description}</p>
    </div>
  )
}

export default TreatmentDetail
