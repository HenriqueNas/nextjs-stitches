import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!priceId) {
    return res.status(400).json({ error: "Missing priceId parameter." });
  }

  const cancelUrl = `${process.env.NEXT_URL}/`;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;

  const checkout = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkout.url,
  });
}
