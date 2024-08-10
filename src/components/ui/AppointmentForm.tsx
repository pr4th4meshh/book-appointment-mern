"use client"
import React, { useState } from "react"
import { Form, Input, Button, message } from "antd"
import axios from "axios"
import { useSession } from "next-auth/react"

interface AppointmentFormValues {
  name: string
  email: string
  phone: string
  date: string
  message: string
}

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const { data: session } = useSession()

  const onFinish = async (values: AppointmentFormValues) => {
    setLoading(true)
    try {
      await axios.post("/api/appointments", values)
      message.success("Appointment request sent successfully")
      form.resetFields()
    } catch (error) {
      console.error(error)

      {
        !session?.user
          ? message.error("You need to signin to book an appointment")
          : message.error("Error booking appointment")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className="flex flex-col w-[270px] md:w-[600px]"
    >
      <Form.Item
        label="Your Name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Email is required" }]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: "Phone number is required" }]}
      >
        <Input type="tel" placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Date is required" }]}
      >
        <Input type="date" />
      </Form.Item>

      <Form.Item label="Message" name="message">
        <Input.TextArea placeholder="Message" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button
          loading={loading}
          disabled={loading}
          type="primary"
          htmlType="submit"
          className="bg-primary text-white"
        >
          Book Appointment
        </Button>
      </Form.Item>
    </Form>
  )
}
