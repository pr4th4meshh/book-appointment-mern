"use client"
import { useSession, signOut } from "next-auth/react"
import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment"
import Link from "next/link"
import { Button } from "antd"

interface Appointment {
  _id: string
  date: string
  message: string
  phone: number
  email: string
}

export default function ClientDashboard() {
  const { data: session, status } = useSession()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAppointments = async () => {
      if (status === "authenticated") {
        setLoading(true)
        try {
          const response = await axios.get("/api/appointments")
          const data: { data: Appointment[] } = response.data
          setAppointments(data.data)
        } catch (error) {
          console.error("Failed to fetch appointments", error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchAppointments()
  }, [status])

  const cancelAppointment = async (id: string) => {
    try {
      await axios.delete(`/api/appointments?id=${id}`)
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== id)
      )
    } catch (error) {
      console.error("Failed to cancel appointment", error)
    }
  }

  if (status === "loading") {
    return <p className="text-center">Loading...</p>
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center items-center flex-col h-[90vh]">
        <h1 className="text-xl md:text-5xl font-semibold">
          Please sign in to view appointments.
        </h1>
        <Link href="/register">
          <Button type="primary" className="bg-primary px-6 py-5 mt-3 text-xl">
            Please sign in
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Your Appointments:
        </h1>
        {session && session.user && (
          <p className="text-lg text-gray-700 mb-6">
            Welcome, {session.user.name}
          </p>
        )}
        {loading && <h1>Loading appointments..</h1>}
        {appointments.length === 0 && (
          <h1 className="text-xl">No appointments to show, start booking!</h1>
        )}
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment._id}
              className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <div className="flex-1">
                <p className="text-lg sm:text-xl font-semibold pb-2">
                  {appointment.message}
                </p>
                <p className="text-gray-600">
                  Appointment on:{" "}
                  {moment(appointment.date).format("MMMM D, YYYY")}
                </p>
                <p className="text-gray-600">
                  Your contact number: {appointment.phone}
                </p>
                <p className="text-gray-600">
                  Your e-mail: {appointment.email}
                </p>
              </div>
              <button
                onClick={() => cancelAppointment(appointment._id)}
                className="mt-4 sm:mt-0 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => signOut()}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
