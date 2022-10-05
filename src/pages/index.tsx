import { GetStaticProps } from "next";
import Image from "next/future/image";
import { useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { CaretLeft, CaretRight } from "phosphor-react";

import {
  ArrowButton,
  ArrowButtonWrapper,
  HomeContainer,
  Product,
} from "../styles/pages/home";

import { Price, stripe } from "../lib/stripe";
import Link from "next/link";

interface HomeProps {
  products: LeanProductModel[];
}

type LeanProductModel = Omit<ProductModel, "description" | "priceId">;

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Product className="keen-slider__slide">
            <Image
              src={product.imageUrl}
              alt="t-shirt image"
              width={520}
              height={480}
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}

      <>
        <ArrowButtonWrapper direction={"left"}>
          <ArrowButton
            disabled={currentSlide === 0}
            onClick={(event) => {
              event.stopPropagation();
              instanceRef.current?.prev();
            }}
          >
            <CaretLeft size={40} color="white" />
          </ArrowButton>
        </ArrowButtonWrapper>

        <ArrowButtonWrapper direction={"right"}>
          <ArrowButton
            disabled={
              currentSlide ===
              instanceRef.current?.track?.details?.slides.length - 2
            }
            onClick={(event) => {
              console.log(instanceRef.current);
              event.stopPropagation();
              instanceRef.current?.next();
            }}
          >
            <CaretRight size={40} color="white" />
          </ArrowButton>
        </ArrowButtonWrapper>
      </>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products: LeanProductModel[] = data.map((item) => {
    const price = item.default_price as Price;
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100);

    return {
      id: item.id,
      name: item.name,
      price: formattedPrice,
      imageUrl: item.images[0],
    };
  });

  return {
    props: {
      products,
    },
  };
};
