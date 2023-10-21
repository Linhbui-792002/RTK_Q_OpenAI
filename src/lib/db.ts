import mysql, { Connection } from "mysql2/promise";

export async function excuteQuery({ query, values = [] }: { query: string; values?: any | any[] }): Promise<any> {
	const dbconnection: Connection = await mysql.createConnection({
		host: process.env.MYSQL_HOST,
		port: parseInt(process.env.MYSQL_PORT || "3306", 10),
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
	});

	try {
		const sanitizedValues = values.map((value: any) => (value !== undefined ? value : null));

		const [results] = await dbconnection.execute(query, sanitizedValues);
		dbconnection.end();

		if (Array.isArray(results)) {
			if (results.length === 1) {
				return results[0];
			} else {
				return results;
			}
		} else {
			return results;
		}
	} catch (error: any) {
		throw new Error(error.message);
	}
}
