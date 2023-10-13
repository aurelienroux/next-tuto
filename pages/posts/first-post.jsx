import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>First Post</h1>
      <Link href="/">Return to home page</Link>

      <Image src="/images/avatar.png" width="150" height="150" alt="avatar" />
    </Layout>
  );
}
