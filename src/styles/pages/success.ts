import { styled } from "..";

export const SuccessContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$xl",
    fontWeight: "$bold",
    color: "$gray300",

    marginBottom: "4rem",
  },

  p: {
    fontSize: "$lg",
    fontWeight: "$regular",
    color: "$gray300",
    textAlign: "center",

    marginBottom: "6rem",
    maxWidth: 590,
  },

  a: {
    fontSize: "$md",
    fontWeight: "$bold",
    color: "$green700",
    textDecoration: "none",
  },
});

export const ImageWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.25rem",

  width: "100%",
  maxWidth: 130,
  height: 145,

  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  marginBottom: "2rem",

  img: {
    objectFit: "cover",
  },
});
