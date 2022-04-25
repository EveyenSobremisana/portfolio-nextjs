import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Eveyen Sobremisana | {page}</title>
    </Head>
  );
};

export default PageHead;
