import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import axios from "axios";

import { Price, stripe } from "../../lib/stripe";
import {
  ImageWrapper,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import { useState } from "react";
import Head from "next/head";

interface HomeProps {
  product: ProductModel;
}

export default function Product({ product }: HomeProps) {
  const { isFallback } = useRouter();
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);

  if (isFallback) {
    return <p>Loading...</p>;
  }

  async function handleBuyProduct() {
    setIsLoadingCheckout(true);
    try {
      const response = await axios.post("/api/checkout", {
        priceId: product.priceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsLoadingCheckout(false);
      alert("Falha ao redirecionar para o checkout");
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageWrapper>
          <Image
            src={product.imageUrl}
            alt="t-shirt image"
            height={520}
            width={480}
          />
        </ImageWrapper>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isLoadingCheckout} onClick={handleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  { product: ProductModel },
  { id: string }
> = async ({ params }) => {
  const productId = params.id;

  const productData = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = productData.default_price as Price;
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price.unit_amount / 100);

  const product: ProductModel = {
    id: productData.id,
    name: productData.name,
    price: formattedPrice,
    description: productData.description,
    imageUrl: productData.images[0],
    priceId: price.id,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_MWqKl6Kv4lL0Tf" } }],
    fallback: true,
  };
};
