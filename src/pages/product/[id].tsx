import {
  ImageWrapper,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageWrapper>{/* <Image src={} /> */}</ImageWrapper>

      <ProductDetails>
        <div>
          <h1>Camiseta Beyond the Limits</h1>
          <h2>R$ 79,90</h2>
          <p>
            Tempus fermentum eget lacus, quis ante. Potenti sit pharetra,
            ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus
            donec hendrerit. Rhoncus, nunc, eu at ac. At massa, fermentum amet
            ornare cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis
            integer velit dictum proin nibh.
          </p>
        </div>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
