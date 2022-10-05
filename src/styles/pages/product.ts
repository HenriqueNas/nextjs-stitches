import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gridGap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.25rem",

  width: "100%",
  maxWidth: 576,
  height: 656,

  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  h1: {
    fontSize: "$xl",
    color: "$gray300",
    fontWeight: "$bold",
  },

  span: {
    fontSize: "$xl",
    color: "$green600",

    display: "block",

    marginTop: "1rem",
    marginBottom: "2.5rem",
  },

  p: {
    fontSize: "$sm",
    color: "$gray300",
    lineHeight: 1.6,

    display: "block",
  },

  button: {
    marginTop: "auto",
    padding: "1.25rem",

    color: "$white",
    fontSize: "$sm",
    fontWeight: "$bold",

    border: "none",
    borderRadius: 8,
    backgroundColor: "$green600",
    cursor: "pointer",

    transition: "background-color 0.2s ease",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled)hover": {
      backgroundColor: "$green700",
    },
  },
});
