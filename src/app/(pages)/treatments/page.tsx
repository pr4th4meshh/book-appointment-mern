// this route is temp out of use

"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { TREATMENTS, Treatment } from "@/data"

const TreatmentsPage = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([])

  useEffect(() => {
    const fetchTreatments = async () => {
      const response = await axios.get("/api/treatments")
      setTreatments(response.data.data)
    }

    fetchTreatments()
  }, [])

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Treatments</h1>
      <ul>
        {TREATMENTS.map((treatment) => (
          <li key={treatment.id} className="mb-4">
            <h2 className="text-2xl font-semibold">{treatment.name}</h2>
            <p>{treatment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TreatmentsPage
