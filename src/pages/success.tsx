import Link from "next/link";
import Image from "next/future/image";
import { GetServerSideProps } from "next/types";

import { stripe, Product } from "../lib/stripe";
import { ImageWrapper, SuccessContainer } from "../styles/pages/success";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra com Sucesso | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageWrapper>
          <Image src={product.imageUrl} alt="" height={110} width={120} />
        </ImageWrapper>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const { name, images } = response.line_items.data[0].price.product as Product;

  const checkoutInfo: SuccessProps = {
    customerName: response.customer_details.name,
    product: {
      name,
      imageUrl: images[0],
    },
  };

  return {
    props: {
      ...checkoutInfo,
    },
  };
};
