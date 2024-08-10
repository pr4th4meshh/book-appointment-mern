// "use client";
// import { useForm } from 'react-hook-form';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// export default function SignIn() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const router = useRouter();

//   const onSubmit = async (data) => {
//     const result = await signIn('credentials', {
//       redirect: false,
//       email: data.email,
//       password: data.password,
//     });

//     if (result.error) {
//       console.error('Sign In Error:', result.error);
//     } else {
//       router.push('/');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('email', { required: true })} placeholder="Email" />
//       {errors.email && <span>Email is required</span>}

//       <input {...register('password', { required: true })} type="password" placeholder="Password" />
//       {errors.password && <span>Password is required</span>}

//       <button type="submit">Sign In</button>
//     </form>
//   );
// }

"use client"
import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [error, setError] = useState("")
  const router = useRouter()

  console.log("asdfasdf", error)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })
    if (res?.error) {
      setError(res.error as string)
      console.log(error)
      console.log(formData)
    }
    if (res?.ok) {
      return router.push("/")
    }
  }

  return (
    <section className="w-full py-8 md:px-0 px-4 md:py-0 h-auto md:h-screen flex items-center justify-center">
      <form
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
      border border-solid border-black bg-white rounded"
        onSubmit={handleSubmit}
      >
        {error && <div className="text-black">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid border-black rounded p-2"
          name="email"
        />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid border-black rounded p-2"
            name="password"
          />
        </div>
        <button className="w-full border border-solid border-black rounded">
          Sign In
        </button>

        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black"
        >
          Dont have an account?
        </Link>
      </form>
    </section>
  )
}
