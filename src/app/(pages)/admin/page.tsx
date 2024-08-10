"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

interface AppointmentProps {
  _id: string
  name: string
  email: string
  date: Date
  message: string
}

export default function AdminPage() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get("/api/appointments")
      setAppointments(response.data.data)
    }
    fetchAppointments()
  }, [])

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Appointments</h1>
      <ul className="space-y-4">
        {appointments.map((appointment: AppointmentProps) => (
          <li key={appointment._id} className="bg-gray-100 p-4 rounded-md">
            <p>
              <strong>Name:</strong> {appointment.name}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(appointment.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Message:</strong> {appointment.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
