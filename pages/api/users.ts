import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../models/user.models";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" }
  ]);
}
