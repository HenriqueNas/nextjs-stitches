import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",

  marginLeft: "auto",

  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  minWidth: 700,

  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "2rem",
    borderRadius: 8,

    background: "$gray800",

    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,

    opacity: 0,
    transform: "translateY(100%)",
    transition: "all .1s ease-in-out",

    strong: {
      fontSize: "$md",
      color: "$gray100",
    },

    span: {
      fontSize: "$lg",
      fontWeight: "$bold",
      color: "$green600",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 0.9,
    },
  },
});

export const ArrowButtonWrapper = styled("div", {
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "5rem",
  height: "100%",
  background:
    "linear-gradient(270deg, rgba(40, 40, 60, 0) 0%, rgba(40, 40, 60, 0.7) 100%)",
  cursor: "pointer",
  border: "none",
  outline: "none",
  color: "$white",
  fill: "$white",
  padding: "0 1rem",

  variants: {
    direction: {
      left: {
        left: 0,
        textAlign: "left",
      },
      right: {
        left: "auto",
        right: 0,
        textAlign: "right",
        background:
          "linear-gradient(90deg, rgba(40, 40, 60, 0) 0%, rgba(40, 40, 60, .7) 100%)",
      },
    },
  },
});

export const ArrowButton = styled("div", {
  variants: {
    disabled: {
      true: {
        pointerEvents: "none",
        opacity: 0.5,
      },
      false: {
        pointerEvents: "initial",
      },
    },
  },
});
