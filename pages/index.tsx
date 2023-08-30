import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}


export default function Home() {

    const { data: user } = useCurrentUser();

  return (
    <>
        <h1 className='text-white text-4xl'>Netflix clone</h1>
        <p className="text-white">Logged in as: {user?.name} </p>
        <button className="h-10 w-50 bg-white" onClick={() => signOut()}>Log Out</button>

    </>
  )
}
