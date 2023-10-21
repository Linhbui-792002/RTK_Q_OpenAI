import { excuteQuery } from "@src/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const result = await excuteQuery({
				query: `SELECT
	G.id,
	G.name,
	G.address,
	G.map,
	G.phone,
	G.email,
	G.tektra_media,
	G.about_tektra_num,
	G.logo,
	G.logo_footer,
	G.favicon,
	G.title,
	G.telegram_group_chat_id,
	G.telegram_token,
	G.about_slogan,
	G.social_media,
	G.contact_slogan,
	G.partner_slogan,
	G.services_slogan,
	G.meta_title,
	G.meta_slug,
	G.meta_keyword,
	G.meta_description,
	G.updated_at,
	G.tektra_interview,
	G.updated_by
FROM
	db_general AS G`,
			});
			res.status(200).json({
				status: 200,
				data: result,
			});
		} else {
			res.status(404).json({ error: "Route general not found" });
		}
	} catch (error) {
		console.error("Error reading data:", error);
		res.status(500).json({ error: "Error reading data" });
	}
}
