import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Profiles = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col text-white justify-center">
        <h1 className="text-3xl md:text-6xl">Who is watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-5">
          <div onClick={() => router.push("/")}>
            <div className="w-44 group flex-row mx-auto">
              <div className="w-36 h-36 flex items-center justify-center border-2 border-transparent rounded-sm group-hover:cursor-pointer group-hover:border-white overflow-hidden mx-auto">
                <img
                  src={
                    currentUser?.image
                      ? currentUser?.image
                      : "/images/default-slate.png"
                  }
                  alt="Profile picture"
                  className="w-36 h-36"
                />
              </div>
              <div className="mt-3 text-gray-400 text-2xl group-hover:text-white text-center">
                {currentUser?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
