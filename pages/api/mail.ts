// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "eserranor98@gmail.com", // Change to your recipient
    from: "test@inteminer.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(msg)
    .then(() => res.status(200).json({ message: "message sent" }))
    .catch(() => res.status(500).json({ message: "message sent" }));
}
