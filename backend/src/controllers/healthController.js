/**
 * Health Check Controller
 */

/**
 * Controller to handle server health status checks.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export function getHealth(req, res) {
  return res.status(200).json({ status: "ok" });
}
