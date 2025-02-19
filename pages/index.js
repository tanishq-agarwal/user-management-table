import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>User Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 text-center px-4 py-6 max-w-3xl">
          Welcome to User Management Table! Go to{" "}
          <Link
            href={"/users"}
            className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
          >
            Users{" "}
          </Link>
          page for live data.
        </h1>
      </div>
    </>
  );
}
